import { useLayoutEffect, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  onActiveCardChange,

  // ─── SCROLL HANDOFF LIMIT ────────────────────────────────────────────────────
  // How many pixels the user scrolls inside this container before control
  // transfers to the normal page scroll.  Omit the prop to disable the limit.
  //
  // Usage in HomePage.jsx (or wherever you render ScrollStack):
  //   <ScrollStack scrollLimit={900}>
  //
  // Tuning guide:
  //   • Too low  (e.g. 200) → cards barely animate before handing off
  //   • Too high (e.g. 3000) → user has to scroll a long time to leave the section
  //   • Sweet spot ≈ (number of cards) × (card height in px) + some breathing room
  //     Default card height is 20rem ≈ 320 px.
  //     Example: 3 cards → 3 × 320 + 200 = ~1160 px, so scrollLimit={1100} is good.
  //
  // Scroll also hands back to the page when the user scrolls UP past the top
  // of this container, so back-scrolling always works naturally.
  // ─────────────────────────────────────────────────────────────────────────────
  scrollLimit = null,

  // topOffset (px): shifts the entire stack vertically inside its container.
  // Negative → move up,  Positive → move down.
  // Example:  <ScrollStack topOffset={-60}>  ← pulls the cards 60px upward
  topOffset = 0,

  // cardMaxWidth: caps the width of the card column and centres it.
  // Accepts any CSS width value — px, %, vw, etc.
  // Example:  <ScrollStack cardMaxWidth="600px">  ← narrower cards
  //           <ScrollStack cardMaxWidth="80%">    ← relative to container
  cardMaxWidth = '100%',
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const isPointerOverCardRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    element => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    let activeCardIndex = 0;
    for (let j = 0; j < cardsRef.current.length; j++) {
      const jCardTop = getElementOffset(cardsRef.current[j]);
      const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
      if (scrollTop >= jTriggerStart) {
        activeCardIndex = j;
      }
    }

    if (onActiveCardChange) {
      onActiveCardChange(activeCardIndex);
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        if (i < activeCardIndex) {
          const depthInStack = activeCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    onActiveCardChange,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientationHandler: true,
        normalizeWheel: true,
        wheelMultiplier: 1,
        touchInertiaMultiplier: 35,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchInertia: 0.6
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;
    const handlePointerEnter = () => {
      isPointerOverCardRef.current = true;
    };
    const handlePointerLeave = () => {
      isPointerOverCardRef.current = false;
    };

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
      card.addEventListener('pointerenter', handlePointerEnter);
      card.addEventListener('pointerleave', handlePointerLeave);
    });

    setupLenis();

    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      isPointerOverCardRef.current = false;
      cardsRef.current = [];
      cards.forEach(card => {
        card.removeEventListener('pointerenter', handlePointerEnter);
        card.removeEventListener('pointerleave', handlePointerLeave);
      });
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    onActiveCardChange,
    setupLenis,
    updateCardTransforms
  ]);

  // ─── Scroll handoff ─────────────────────────────────────────────────────────
  // Intercepts wheel events in the capture phase (before Lenis sees them).
  // When the internal scroll position hits scrollLimit going down, or 0 going
  // up, the delta is forwarded to window.scrollBy so the page continues moving.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || useWindowScroll) return;

    const onWheel = (e) => {
      const isOverCard = isPointerOverCardRef.current || !!e.target.closest('.scroll-stack-card');

      // Only allow internal scrolling when the pointer is over a card.
      if (!isOverCard) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollBy({ top: e.deltaY });
        return;
      }

      const scrollTop = Math.round(scroller.scrollTop);

      // Past the limit and still scrolling down → hand off to the page
      if (scrollLimit != null && scrollTop >= scrollLimit && e.deltaY > 0) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollBy({ top: e.deltaY });
        return;
      }

      // At the very top and scrolling up → hand off to the page
      if (scrollLimit != null && scrollTop <= 0 && e.deltaY < 0) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollBy({ top: e.deltaY });
      }
    };

    // capture: true fires our handler before Lenis's bubble-phase listener
    scroller.addEventListener('wheel', onWheel, { passive: false, capture: true });
    return () => scroller.removeEventListener('wheel', onWheel, { capture: true });
  }, [scrollLimit, useWindowScroll]);
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef} style={{ marginTop: topOffset }}>
      <div className="scroll-stack-inner" style={{ maxWidth: cardMaxWidth, margin: '0 auto' }}>
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
