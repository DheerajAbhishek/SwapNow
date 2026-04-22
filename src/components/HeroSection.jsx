import Threads from './Threads';
import SplitText from './SplitText';
import ClinicalCircleAnimation from './ClinicalCircleAnimation';
import './SwapAnimation.css';

function HeroSection() {
    return (
        <section className="hero-fullwidth" id="top" aria-label="Swapnow introduction" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                    color={[0.1, 0.62, 0.25]}
                />
            </div>
            <div className="hero-content-container">
                <div className="hero-card">
                    <p className="hero-kicker">
                        {/* India's First Clinical Health Ecosystem */}
                    </p>
                    <h1 className="hero-title">India’s First end to end Health Ecosystem.</h1>
                    <SplitText
                        text="We’ve bridged the gap between the doctor’s and your kitchen. A synchronized ecosystem built for your results."
                        className="hero-text"
                        delay={30}
                        duration={0.6}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 15 }}
                        to={{ opacity: 1, y: 0 }}
                        textAlign="left"
                    />
                </div>

                <ClinicalCircleAnimation />
            </div>
        </section>
    )
}

export default HeroSection;
