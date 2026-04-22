import React from 'react';
import './Testimonials.css';

const REVIEWS = [
    {
        id: 1,
        name: "Sarah J.",
        role: "MARATHON RUNNER",
        review: "SWAP completely changed my recovery. The blood panel identified exactly what I was missing, and the meals are absolutely incredible.",
        avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
        id: 2,
        name: "Michael T.",
        role: "WEALTH MANAGER",
        review: "I don't have time to second-guess my macros. The clinical precision and daily delivery make staying at my peak completely effortless.",
        avatar: "https://i.pravatar.cc/100?img=11"
    },
    {
        id: 3,
        name: "Elena R.",
        role: "YOGA INSTRUCTOR",
        review: "The deep body analysis showed me things a normal scale never could. The nutritionist-crafted meals are delicious and perfectly portioned.",
        avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
        id: 4,
        name: "David K.",
        role: "TECH FOUNDER",
        review: "It's like having a doctor and a private chef in your pocket. The metabolic blueprint gave me 20% more daily energy to run my startup.",
        avatar: "https://i.pravatar.cc/100?img=8"
    },
    {
        id: 5,
        name: "Dr. Amanda W.",
        role: "CARDIOLOGIST",
        review: "As a physician, I appreciate the science-first approach. SWAP's data-driven meal plans are medically sound and highly effective.",
        avatar: "https://i.pravatar.cc/100?img=9"
    },
    {
        id: 6,
        name: "James B.",
        role: "FITNESS COACH",
        review: "BMR-driven macro mapping takes all the guesswork out of my clients' diets. I recommend the SWAP ecosystem to absolutely everyone.",
        avatar: "https://i.pravatar.cc/100?img=12"
    },
    {
        id: 7,
        name: "Chloe M.",
        role: "WORKING MOM",
        review: "Finally, a health system that actually fits my busy life. The personalized daily delivery is the ultimate life hack for my family's health.",
        avatar: "https://i.pravatar.cc/100?img=10"
    },
    {
        id: 8,
        name: "Marcus V.",
        role: "PRO ATHLETE",
        review: "The feedback loop with the clinical team is a game-changer. My performance metrics and visceral fat levels have never been better.",
        avatar: "https://i.pravatar.cc/100?img=14"
    }
];

export default function Testimonials() {

    // Split reviews into two rows
    const row1 = REVIEWS.slice(0, 4);
    const row2 = REVIEWS.slice(4, 8);

    // Duplicate arrays mathematically so that 50% translation matches perfectly (creating the infinite loop)
    const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
    const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

    return (
        <section className="testimonials-section">

            {/* ── Gradient Fades for depth ("Emerging from nothingness") ── */}
            <div className="testi-fade-left"></div>
            <div className="testi-fade-right"></div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center', zIndex: 10, position: 'relative', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#000000', marginBottom: '1rem', lineHeight: 1.1 }}>Real Results,<br />Clinical Precision.</h2>
                <p style={{ color: '#4ade80', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Loop Never Stops</p>
            </div>

            <div className="marquee-wrapper">

                {/* Top Row (Scrolls Left) */}
                <div className="marquee-container">
                    <div className="marquee-track scroll-left">
                        {duplicatedRow1.map((item, index) => (
                            <TestimonialCard key={`top-${index}`} {...item} />
                        ))}
                    </div>
                </div>

                {/* Bottom Row (Scrolls Right) */}
                <div className="marquee-container">
                    <div className="marquee-track scroll-right">
                        {duplicatedRow2.map((item, index) => (
                            <TestimonialCard key={`bottom-${index}`} {...item} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function TestimonialCard({ name, role, review, avatar }) {
    return (
        <div className="testi-card">
            <div className="testi-card-header">
                <img src={avatar} alt={name} className="testi-avatar" />
                <div className="testi-meta">
                    <h4 className="testi-name">{name}</h4>
                    <span className="testi-role">{role}</span>
                </div>
            </div>
            <p className="testi-review">"{review}"</p>
        </div>
    );
}