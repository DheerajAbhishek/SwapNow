import React, { useRef } from 'react';
import { Stethoscope, Calculator, ActivitySquare, PackageSearch } from 'lucide-react';
import { useFadeUp } from '../hooks/useFadeUp';
import './WhatWeOffer.css';

const OFFERINGS = [
    {
        id: 1,
        title: 'Professional Clinical Consultation',
        description: 'Skip the guesswork. Dedicated doctor consultations and targeted blood panels to map your metabolic markers.',
        Icon: Stethoscope,
        color: '#199e41' // Healthy Green
    },
    {
        id: 2,
        title: 'BMR-Driven Macro Mapping',
        description: 'Using your Basal Metabolic Rate and clinical data, our experts engineer a precise nutritional roadmap of calories and macros.',
        Icon: Calculator,
        color: '#0d8fa8' // Ocean Blue
    },
    {
        id: 3,
        title: 'Deep Full-Body Analysis',
        description: 'A 360° view of your health. We analyze visceral fat, muscle mass, and metabolic age to track what weight scales miss.',
        Icon: ActivitySquare,
        color: '#7272f2' // Biotech Indigo
    },
    {
        id: 4,
        title: 'Precision Personalized Delivery',
        description: 'Nutritionist-crafted, medical-grade meals tailored to your profile, delivered fresh to your doorstep daily.',
        Icon: PackageSearch,
        color: '#f78757' // Warm Amber
    }
];

export default function WhatWeOffer() {
    const [sectionRef, isVisible] = useFadeUp(0.15);

    return (
        <section className="wwo-section" ref={sectionRef}>
            <div className="wwo-container">
                <header className={`wwo-header ${isVisible ? 'fade-up' : ''}`}>
                    <h2 className="wwo-title">How we play!</h2>
                    <p className="wwo-subtitle">The Ecosystem of Precision Health</p>
                </header>

                <div className="wwo-grid-wrapper">
                    {/* The Connection Line animated behind the cards */}
                    <div className="wwo-connection-line">
                        <svg width="100%" height="80" preserveAspectRatio="none" viewBox="0 0 1000 80">
                            <path
                                d="M 0,40 Q 250,5 500,40 T 1000,40"
                                fill="none"
                                stroke="#199e41"
                                strokeWidth="3"
                                strokeDasharray="12 12"
                                strokeLinecap="round"
                                className="wwo-animated-path"
                            />
                        </svg>
                    </div>

                    <div className="wwo-grid">
                        {OFFERINGS.map((item, index) => (
                            <OfferCard
                                key={item.id}
                                item={item}
                                index={index}
                                sectionVisible={isVisible}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function OfferCard({ item, index, sectionVisible }) {
    const { Icon, color } = item;
    // Stagger the fade-up based on index
    const staggerDelay = index * 0.15;

    return (
        <div
            className={`wwo-card ${sectionVisible ? 'fade-in-up' : ''}`}
            style={{
                '--delay': `${staggerDelay}s`,
                '--brand-color': color
            }}
        >
            <div className="wwo-card-icon-wrap" style={{ color: color }}>
                <div className="wwo-icon-glow" style={{ backgroundColor: color }}></div>
                <Icon size={34} strokeWidth={1.8} className="wwo-icon-svg" />
            </div>

            <h3 className="wwo-card-title">{item.title}</h3>
            <p className="wwo-card-desc">{item.description}</p>
        </div>
    );
}
