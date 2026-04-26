import React, { useEffect } from 'react';
import './Franchise.css';
import { Link } from 'react-router-dom';
import logoWithName from '../assets/logos/logoWithName.svg';
import fitbarImg from '../assets/images/firbar.webp';

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

                        <a href="#traction" className="btn-secondary">See Our Traction ↓</a>
                    </div>
                    <div style={{ margin: '60px auto 0', width: '100%', maxWidth: '800px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: 'var(--panel)', overflow: 'hidden' }}>
                        <img src={fitbarImg} alt="Swapnow Fitbar Setup" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>
            </section>

            {/* WHAT IS SWAPNOW */}


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
                <p style={{ marginBottom: '40px' }}>The window to partner and capture this ₹5B market is open now. Own a cluster. Build a lasting health business across India.</p>

                <div className="onboarding-form fade-up">
                    <h3>Submit Your Interest</h3>
                    <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for your interest! We'll contact you soon."); }}>
                        <div className="form-row">
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-row">
                            <input type="tel" placeholder="Phone Number" required />
                            <input type="text" placeholder="City / Location" required />
                        </div>
                        <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                            <select required>
                                <option value="" disabled selected>Select Your Background / Occupation</option>
                                <option value="corporate">Corporate Professional</option>
                                <option value="restaurant">Restaurant / F&B Owner</option>
                                <option value="health">Healthcare / Wellness</option>
                                <option value="realestate">Real Estate Owner</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>Apply to Partner</button>
                    </form>
                </div>

                <div id="contact" className="contact-card fade-up">
                    <div className="contact-name">Praveen Kota</div>
                    <div style={{ fontSize: '.8rem', color: 'var(--green)', fontWeight: '600', marginBottom: '8px' }}>Founder & CEO, Swapnow · ISB Alumni</div>
                    <div className="contact-detail"><a href="mailto:praveenkota@swapnow.in">praveenkota@swapnow.in</a></div>
                    <div className="contact-detail"><a href="tel:+918897142964">+91 88971 42964</a></div>
                    <div className="contact-detail"><Link to="/"><img src={logoWithName} alt="Swapnow" style={{ height: '16px', verticalAlign: 'middle' }} /></Link></div>
                </div>
            </section>

            <footer>
                <div className="footer-logo">
                    <img src={logoWithName} alt="Swapnow" style={{ height: '30px' }} />
                </div>
                <div className="footer-copy">© 2025 Swapnow. All rights reserved. · <img src={logoWithName} alt="Swapnow" style={{ height: '14px', verticalAlign: 'middle', opacity: 0.8 }} /></div>
            </footer>
        </div>
    );
}

export default Franchise;