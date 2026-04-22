import React, { useEffect } from 'react';
import './Franchise.css';
import { Link } from 'react-router-dom';
import logoWithName from '../assets/logos/logoWithName.svg';

function Franchise() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="franchise-body">
            {/* NAV */}
            <nav className="franchise-nav">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Link to="/" style={{ textDecoration: 'none' }} className="logo">
                        <img src={logoWithName} alt="Swapnow" style={{ height: '24px' }} />
                    </Link>
                </div>
                <a href="#partner" className="nav-cta">Become a Partner →</a>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <div className="hero-badge">India's Clinical Nutrition Infrastructure · 290% YOY Growth</div>
                    <h1>Partner in India's <span className="accent">Food-Led Health</span> Revolution</h1>
                    <p className="hero-sub">Swapnow is not a food brand — it's the <strong style={{ color: '#4fd155' }}>operating system for preventive health</strong>. With 290% YOY growth and 17 live locations, the window to own a cluster is open now.</p>
                    <div className="hero-btns">
                        <a href="#clusters" className="btn-primary">Explore Investment Clusters</a>
                        <a href="#traction" className="btn-secondary">See Our Traction ↓</a>
                    </div>
                </div>
            </section>

            {/* WHAT IS SWAPNOW */}
            <section id="what">
                <div className="center fade-up">
                    <p className="section-label">What We Do</p>
                    <h2 className="section-title">End-to-End Clinical Nutrition.<br />Automated.</h2>
                    <p className="section-sub">Swapnow is not just another food app. We are a structured, goal-oriented nutrition journey platform — connecting users from consultation to delivery to monitoring.</p>
                </div>
                <div className="steps fade-up" style={{ marginTop: '60px' }}>
                    <div className="step"><div className="step-num">01</div><div className="step-title">Consult</div><div className="step-desc">Clinical nutritionist consultation linked to health goals</div></div>
                    <div className="step"><div className="step-num">02</div><div className="step-title">Assess</div><div className="step-desc">Diagnostics-linked personalisation & BMR calculation</div></div>
                    <div className="step"><div className="step-num">03</div><div className="step-title">Personalise</div><div className="step-desc">Custom meal plans per health goal, per family member</div></div>
                    <div className="step"><div className="step-num">04</div><div className="step-title">Deliver</div><div className="step-desc">Daily meals via kiosks, subscriptions & partner kitchens</div></div>
                    <div className="step"><div className="step-num">05</div><div className="step-title">Monitor</div><div className="step-desc">Continuous tracking to retain, upsell & improve compliance</div></div>
                </div>
            </section>

            {/* TRACTION */}
            <section id="traction" className="metrics">
                <div className="center fade-up">
                    <p className="section-label">Proven Traction</p>
                    <h2 className="section-title">Numbers That Prove the Model Works</h2>
                    <p className="section-sub">We didn't raise funds to build — we built to prove. Now we're inviting partners to scale what's already working.</p>
                </div>
                <div className="metrics-grid fade-up">
                    <div className="metric-card"><div className="metric-num">290%</div><div className="metric-label">Year-over-Year Growth</div></div>
                    <div className="metric-card"><div className="metric-num">9.62L</div><div className="metric-label">Meals Delivered</div></div>
                    <div className="metric-card"><div className="metric-num">17</div><div className="metric-label">Active Locations</div></div>
                    <div className="metric-card"><div className="metric-num">1000+</div><div className="metric-label">Orders Per Day</div></div>
                    <div className="metric-card"><div className="metric-num">₹5.69Cr</div><div className="metric-label">GMV (2024-25)</div></div>
                    <div className="metric-card"><div className="metric-num">₹2.20Cr</div><div className="metric-label">Verified Revenue</div></div>
                </div>
                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '.82rem', marginTop: '20px', opacity: .7 }}>Active in Bengaluru · Hyderabad · Vijayawada · Vizag · Tirupati</p>
            </section>

            {/* CLUSTERS */}
            <section id="clusters" className="clusters">
                <div className="center fade-up">
                    <p className="section-label">Investment Models</p>
                    <h2 className="section-title">Choose Your Cluster</h2>
                    <p className="section-sub">Two investment tiers. Both fully backed by our clinical platform, tech stack, and national support infrastructure.</p>
                </div>
                <div className="cluster-grid fade-up">

                    <div className="cluster-card">
                        <span className="cluster-tag">Starter</span>
                        <h3 className="cluster-name">3-Unit Micro-Cluster</h3>
                        <div className="cluster-invest">₹15L <span>total CapEx</span></div>
                        <div className="cluster-tenure">5-Year Tenure · Corporates, Gyms, Hospitals, Universities</div>
                        <hr className="cluster-divider" />
                        <div className="cluster-item">Franchisee Fee: ₹7.5 Lacs</div>
                        <div className="cluster-item">Kiosk Setup: ₹7.5 Lacs</div>
                        <div className="cluster-item">Year 1 Return: 2% of investment</div>
                        <div className="cluster-item">Year 2–5 Return: 10% of gross sales</div>
                        <div className="cluster-returns">
                            <div className="returns-label">Assured Returns (5 Years)</div>
                            <div className="returns-value">₹31L – ₹39.6L</div>
                            <div className="returns-monthly">Monthly Est: ₹30K – ₹75K</div>
                        </div>
                        <a href="#contact" className="cluster-btn btn-outline">Get Started →</a>
                    </div>

                    <div className="cluster-card featured">
                        <span className="cluster-tag">Recommended</span>
                        <h3 className="cluster-name">10-Unit Scale Cluster</h3>
                        <div className="cluster-invest">₹50L <span>total CapEx</span></div>
                        <div className="cluster-tenure">5-Year Tenure · Priority Sites · Max Efficiency</div>
                        <hr className="cluster-divider" />
                        <div className="cluster-item">Franchisee Fee: ₹25 Lacs</div>
                        <div className="cluster-item">Kiosk Setup: ₹25 Lacs</div>
                        <div className="cluster-item">Year 1 Return: 2% of investment</div>
                        <div className="cluster-item">Year 2–5 Return: 10% of gross sales</div>
                        <div className="cluster-returns">
                            <div className="returns-label">Assured Returns (5 Years)</div>
                            <div className="returns-value">₹1.03Cr – ₹1.23Cr</div>
                            <div className="returns-monthly">Monthly Est: ₹1L – ₹2.5L</div>
                        </div>
                        <a href="#contact" className="cluster-btn btn-solid">Partner Now →</a>
                    </div>

                </div>
            </section>

            {/* INCLUSIONS */}
            <section id="inclusions">
                <div className="center fade-up">
                    <p className="section-label">What You Get</p>
                    <h2 className="section-title">Every Cluster Includes</h2>
                    <p className="section-sub">We handle the entire setup. You own the returns.</p>
                </div>
                <div className="inclusions-grid fade-up">
                    <div className="incl-card"><div className="incl-title">Full Kiosk Setup & Branding</div><div className="incl-desc">End-to-end installation with Swapnow branding at your allocated sites</div></div>
                    <div className="incl-card"><div className="incl-title">Complete Tech Stack</div><div className="incl-desc">App, ordering system, subscription management & clinical dashboards</div></div>
                    <div className="incl-card"><div class="incl-title">Shared Kitchen Partner</div><div class="incl-desc">Certified kitchen network allocated for your cluster's daily fulfilment</div></div>
                    <div className="incl-card"><div className="incl-title">Initial Inventory & Uniforms</div><div className="incl-desc">Starter stock and branded uniforms for your kiosk staff</div></div>
                    <div className="incl-card"><div className="incl-title">Launch Marketing Campaign</div><div class="incl-desc">Dedicated marketing push at launch including digital and on-ground</div></div>
                    <div className="incl-card"><div className="incl-title">Priority Site Allocation</div><div className="incl-desc">High-footfall locations secured via EBG Group's national real estate network</div></div>
                    <div className="incl-card"><div className="incl-title">Clinical Operations Support</div><div className="incl-desc">Nutritionist network, diagnostics integration & goal-setting protocols</div></div>
                    <div className="incl-card"><div className="incl-title">Renewal & Continuity</div><div className="incl-desc">5-year term with structured renewal at ₹7.5L / ₹25L for continued operations</div></div>
                </div>
            </section>

            {/* CTA */}
            <section id="partner" className="cta-section">
                <p className="section-label">Join the Movement</p>
                <h2>The Future of Health<br />is <span className="accent">Food-Led.</span></h2>
                <p>The window to partner and capture this ₹5B market is open now. Own a cluster. Build a lasting health business across India.</p>
                <div className="hero-btns">
                    <a href="mailto:praveenkota@swapnow.in" className="btn-primary">Express Your Interest</a>
                    <a href="tel:+918897142964" className="btn-secondary">Call Us: 88971 42964</a>
                </div>
                <div id="contact" className="contact-card">
                    <div className="contact-name">Praveen Kota</div>
                    <div style={{ fontSize: '.8rem', color: 'var(--green)', fontWeight: '600', marginBottom: '8px' }}>Founder & CEO, Swapnow · ISB Alumni</div>
                    <div className="contact-detail"><a href="mailto:praveenkota@swapnow.in">praveenkota@swapnow.in</a></div>
                    <div className="contact-detail"><a href="tel:+918897142964">+91 88971 42964</a></div>
                    <div className="contact-detail"><Link to="/">swapnow.in</Link></div>
                </div>
            </section>

            <footer>
                <div className="footer-logo">
                    <img src={logoWithName} alt="Swapnow" style={{ height: '30px' }} />
                </div>
                <div className="footer-copy">© 2025 Swapnow. All rights reserved. · swapnow.in</div>
            </footer>
        </div>
    );
}

export default Franchise;