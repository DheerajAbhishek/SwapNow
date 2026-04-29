import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 800,
  height = 525,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children,
  onActiveIndexChange
}) => {
  const config =
    easing === 'elastic'
      ? {
        ease: 'elastic.out(0.6,0.9)',
        durDrop: 2,
        durMove: 2,
        durReturn: 2,
        promoteOverlap: 0.9,
        returnDelay: 0.05
      }
      : {
        ease: 'power1.inOut',
        durDrop: 0.8,
        durMove: 0.8,
        durReturn: 0.8,
        promoteOverlap: 0.45,
        returnDelay: 0.2
      };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    let isAnimating = false;

    const swap = (onStart) => {
      if (order.current.length < 2) return;
      isAnimating = true;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        }
      });
      tlRef.current = tl;
      if (onStart) onStart(tl);

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
        if (onActiveIndexChange) onActiveIndexChange(order.current[0]);
      });
    };

    let timeoutId;
    const startAutoPlay = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        if (!isAnimating) swap();
      }, delay);
    };

    // Delay the first swap so the initial layout has time to render properly on Safari/Mac
    timeoutId = setTimeout(() => {
      swap();
      startAutoPlay();
    }, delay);

    const handleManualNext = () => {
      // Return early if animating preventing multiple rapid clicks breaking gsap
      if (isAnimating) return;
      
      swap((tl) => {
        // slightly faster manual swap
        tl.timeScale(1.5);
      });
      startAutoPlay(); // Reset the timer
    };

    const node = container.current;
    
    // Add touch handlers for swiping
    let touchStartY = 0;
    let touchStartX = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
      const diffY = e.changedTouches[0].clientY - touchStartY;
      const diffX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diffX) > 40 || Math.abs(diffY) > 40) {
        handleManualNext();
      }
    };
    
    // Add wheel handler for scrolling
    let wheelDebounce;
    const handleWheel = (e) => {
      // Only capture prominent horizontal scrolls to not interfere with vertical page scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
        e.preventDefault(); // Prevent page back/forward navigation
        if (wheelDebounce) clearTimeout(wheelDebounce);
        wheelDebounce = setTimeout(() => {
          handleManualNext();
        }, 150);
      }
    };

    node.addEventListener('touchstart', handleTouchStart, { passive: true });
    node.addEventListener('touchend', handleTouchEnd, { passive: true });
    node.addEventListener('wheel', handleWheel, { passive: false });
    
    // Allow clicking the container to swap
    const handleClick = () => handleManualNext();
    node.addEventListener('click', handleClick);

    if (pauseOnHover) {
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
        clearTimeout(timeoutId);
      };
      const resume = () => {
        // If animation was paused mid-flight, resume it
        if (tlRef.current?.paused()) tlRef.current.play();
        startAutoPlay();
      };
      
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('touchstart', handleTouchStart);
        node.removeEventListener('touchend', handleTouchEnd);
        node.removeEventListener('wheel', handleWheel);
        node.removeEventListener('click', handleClick);
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        // Important: Stop animation from running on unmount
        if (tlRef.current) tlRef.current.kill();
        clearInterval(intervalRef.current);
        clearTimeout(timeoutId);
        if (wheelDebounce) clearTimeout(wheelDebounce);
      };
    }
    return () => {
      node.removeEventListener('touchstart', handleTouchStart);
      node.removeEventListener('touchend', handleTouchEnd);
      node.removeEventListener('wheel', handleWheel);
      node.removeEventListener('click', handleClick);
      if (tlRef.current) tlRef.current.kill();
      clearInterval(intervalRef.current);
      clearTimeout(timeoutId);
      if (wheelDebounce) clearTimeout(wheelDebounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
        key: i,
        ref: refs[i],
        style: { width, height, ...(child.props.style ?? {}) },
        onClick: e => {
          child.props.onClick?.(e);
          onCardClick?.(i);
        }
      })
      : child
  );

  return (
    <div 
      ref={container} 
      className="card-swap-container" 
      style={{ width, height, cursor: 'pointer', touchAction: 'pan-y', pointerEvents: 'auto' }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
