import React, { useEffect } from 'react';
import './Franchise.css';
import { Link } from 'react-router-dom';
import logoWithName from '../assets/logos/logoWithName.svg';
import fitbarImg from '../assets/images/firbar.jpg';
import { UtensilsCrossed, Minimize, Presentation, PlugZap, Smartphone, Store, LifeBuoy, Laptop, Truck, CheckCircle2, Megaphone, ShieldCheck, TrendingUp, Trophy, BadgeCheck, LineChart, Zap, FlaskConical, Star, Headset } from 'lucide-react';

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
                <a href="#partner" className="nav-cta">Become a Partner â†’</a>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <div className="hero-badge">India's Clinical Nutrition Infrastructure Â· 290% YOY Growth</div>
                    <h1>Partner in India's <span className="accent">Food-Led Health</span> Revolution</h1>
                    <p className="hero-sub">Swapnow is not a food brand â€” it's the <strong style={{ color: '#4fd155' }}>operating system for preventive health</strong>. With 290% YOY growth and 17 live locations, the window to own a cluster is open now.</p>
                    <div className="hero-btns">

                        <a href="#traction" className="btn-secondary">See Our Traction â†“</a>
                    </div>
                    <div style={{ margin: '60px auto 0', width: '100%', maxWidth: '800px', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', backgroundColor: 'var(--panel)', overflow: 'hidden' }}>
                        <img src={fitbarImg} alt="Swapnow Fitbar Setup" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>
            </section>

            {/* WHAT IS SWAPNOW */}
            <section id="features" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', textAlign: 'center' }}>
                    <div className="fade-up" style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--panel)', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                            <UtensilsCrossed size={36} strokeWidth={1.5} color="var(--text-strong)" />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.3 }}>No Kitchen<br />Required</h3>
                    </div>
                    <div className="fade-up" style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--panel)', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                            <Minimize size={36} strokeWidth={1.5} color="var(--text-strong)" />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.3 }}>Compact Setup<br />20Sft</h3>
                    </div>
                    <div className="fade-up" style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--panel)', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                            <Presentation size={36} strokeWidth={1.5} color="var(--text-strong)" />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.3 }}>Virtual<br />Nutritionist</h3>
                    </div>
                    <div className="fade-up" style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--panel)', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
                            <PlugZap size={36} strokeWidth={1.5} color="var(--text-strong)" />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.3 }}>Plug and Play<br />Kiosk Setup</h3>
                    </div>
                </div>
            </section>

            {/* TRACTION */}
            <section id="traction" className="metrics">
                <div className="center fade-up">
                    <p className="section-label">Proven Traction</p>
                    <h2 className="section-title">Numbers That Prove the Model Works</h2>
                    <p className="section-sub">We didn't raise funds to build â€” we built to prove. Now we're inviting partners to scale what's already working.</p>
                </div>
                <div className="metrics-grid fade-up">
                    <div className="metric-card"><div className="metric-num">290%</div><div className="metric-label">Year-over-Year Growth</div></div>
                    <div className="metric-card"><div className="metric-num">9.62L</div><div className="metric-label">Meals Delivered</div></div>
                    <div className="metric-card"><div className="metric-num">17</div><div className="metric-label">Active Locations</div></div>
                    <div className="metric-card"><div className="metric-num">1000+</div><div className="metric-label">Orders Per Day</div></div>
                    <div className="metric-card"><div className="metric-num">â‚¹5.69Cr</div><div className="metric-label">GMV (2024-25)</div></div>
                    <div className="metric-card"><div className="metric-num">â‚¹2.20Cr</div><div className="metric-label">Verified Revenue</div></div>
                </div>
                <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '.82rem', marginTop: '20px', opacity: .7 }}>Active in Bengaluru Â· Hyderabad Â· Vijayawada Â· Vizag Â· Tirupati</p>
            </section>

            {/* CLUSTERS */}


            {/* THE SWAP ECOSYSTEM */}
            <section id="ecosystem" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff' }}>
                <div className="fade-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#1a1a1a', fontWeight: '900', letterSpacing: '-1px', marginBottom: '20px' }}>The SWAP Ecosystem</h2>
                    <p style={{ color: '#4b5563', fontSize: '1.25rem', fontWeight: '500', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>Three integrated layers creating a seamless nutrition engine</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', position: 'relative' }}>
                    {/* Layer 1 */}
                    <div className="fade-up" style={{ backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ padding: '40px 30px', backgroundColor: '#f0fdf4', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 10px 25px rgba(16,185,129,0.1)', marginBottom: '24px' }}>
                                <Smartphone size={48} color="#059669" strokeWidth={1.5} />
                            </div>
                            <span style={{ backgroundColor: '#10b981', color: '#fff', padding: '8px 20px', borderRadius: '24px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', boxShadow: '0 4px 10px rgba(16,185,129,0.2)' }}>Digital Layer</span>
                        </div>
                        <div style={{ padding: '40px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '16px', textAlign: 'center' }}>SWAP App</h3>
                            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px', textAlign: 'center', flex: 1 }}>The consumer interface handling calorie counting, personalized meal plans, and subscription management.</p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>UX/UI</span>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>Subscriptions</span>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>Analytics</span>
                            </div>
                        </div>
                    </div>

                    {/* Layer 2 */}
                    <div className="fade-up" style={{ backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ padding: '40px 30px', backgroundColor: '#f0fdf4', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 10px 25px rgba(16,185,129,0.1)', marginBottom: '24px' }}>
                                <Store size={48} color="#059669" strokeWidth={1.5} />
                            </div>
                            <span style={{ backgroundColor: '#10b981', color: '#fff', padding: '8px 20px', borderRadius: '24px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', boxShadow: '0 4px 10px rgba(16,185,129,0.2)' }}>Physical Layer</span>
                        </div>
                        <div style={{ padding: '40px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '16px', textAlign: 'center' }}>FitBar Counters</h3>
                            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px', textAlign: 'center', flex: 1 }}>Tech-enabled micro-retail kiosks inside gyms for rapid &lt; 2 min assembly and distribution.</p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>High Throughput</span>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>Asset-Light</span>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>Zero Cooking</span>
                            </div>
                        </div>
                    </div>

                    {/* Layer 3 */}
                    <div className="fade-up" style={{ backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', border: '1px solid #f1f5f9', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ padding: '40px 30px', backgroundColor: '#f0fdf4', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
                            <div style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 10px 25px rgba(16,185,129,0.1)', marginBottom: '24px' }}>
                                <UtensilsCrossed size={48} color="#059669" strokeWidth={1.5} />
                            </div>
                            <span style={{ backgroundColor: '#10b981', color: '#fff', padding: '8px 20px', borderRadius: '24px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', boxShadow: '0 4px 10px rgba(16,185,129,0.2)' }}>Supply Layer</span>
                        </div>
                        <div style={{ padding: '40px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '16px', textAlign: 'center' }}>Kitchen Partners</h3>
                            <p style={{ color: '#4b5563', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px', textAlign: 'center', flex: 1 }}>Centralized dark kitchens prepping standardized proteins, carbs, and veggies in bulk for consistency.</p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>Bulk Prep</span>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>Quality Control</span>
                                <span style={{ backgroundColor: '#f8fafc', color: '#334155', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #e2e8f0' }}>Logistics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL SUPPORT, ZERO HASSLE SECTION */}
            <section id="full-support" style={{ padding: '100px 20px', backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div className="fade-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '12px 24px', borderRadius: '30px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                            <LifeBuoy size={24} color="#10b981" strokeWidth={2.5} />
                            <span style={{ fontSize: '1rem', color: '#10b981', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Zero Hassle Guarantee</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#f8fafc', fontWeight: '900', letterSpacing: '-1px', margin: '0 0 24px 0' }}>Comprehensive Support</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.25rem', fontWeight: '500', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                            Our robust operational infrastructure handles everything from technology to logistics, ensuring your franchise runs smoothly without your daily involvement.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
                        
                        {/* Digital Layer */}
                        <div className="fade-up" style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '48px', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 350px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}><Laptop size={32} color="#10b981" /></div>
                                    <span style={{ color: '#10b981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Layer 1: Digital</span>
                                </div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#f8fafc', marginBottom: '16px', letterSpacing: '-0.5px' }}>Technology Stack</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: '500' }}>End-to-end digital ecosystem for seamless operations.</p>
                            </div>
                            <div style={{ flex: '1.5 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', backgroundColor: 'rgba(15, 23, 42, 0.5)', padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.02)' }}>
                                {['Consumer Ordering App', 'Kitchen Display System (KDS)', 'Real-time Analytics Dashboard', 'Automated Payments'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                        <CheckCircle2 fill="#10b981" color="#0f172a" size={28} strokeWidth={1.5} style={{ flexShrink: 0 }} /> 
                                        <span style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.4' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Physical Layer */}
                        <div className="fade-up" style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '48px', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 350px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}><Store size={32} color="#10b981" /></div>
                                    <span style={{ color: '#10b981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Layer 2: Physical</span>
                                </div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#f8fafc', marginBottom: '16px', letterSpacing: '-0.5px' }}>On-Ground Ops</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: '500' }}>Complete physical setup and ongoing management.</p>
                            </div>
                            <div style={{ flex: '1.5 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', backgroundColor: 'rgba(15, 23, 42, 0.5)', padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.02)' }}>
                                {['Kiosk Design & Build-out', 'Staff Recruitment & Training', 'Standard Operating Procedures', 'Daily Staff Management'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                        <CheckCircle2 fill="#10b981" color="#0f172a" size={28} strokeWidth={1.5} style={{ flexShrink: 0 }} /> 
                                        <span style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.4' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Supply Layer */}
                        <div className="fade-up" style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '48px', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 350px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}><Truck size={32} color="#10b981" /></div>
                                    <span style={{ color: '#10b981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Layer 3: Supply</span>
                                </div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#f8fafc', marginBottom: '16px', letterSpacing: '-0.5px' }}>Logistics & QA</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: '500' }}>Robust supply chain ensuring consistent quality.</p>
                            </div>
                            <div style={{ flex: '1.5 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', backgroundColor: 'rgba(15, 23, 42, 0.5)', padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.02)' }}>
                                {['Central Kitchen Partners', 'Quality Assurance Audits', 'Standardized SKU Management', 'Last-Mile Logistics'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                        <CheckCircle2 fill="#10b981" color="#0f172a" size={28} strokeWidth={1.5} style={{ flexShrink: 0 }} /> 
                                        <span style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.4' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Bottom Banner */}
                    <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: '32px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ backgroundColor: '#10b981', padding: '12px', borderRadius: '50%' }}><Megaphone size={24} color="#0f172a" /></div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>Marketing Playbooks</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', fontWeight: '500' }}>Proven launch & growth campaigns</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: '32px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ backgroundColor: '#10b981', padding: '12px', borderRadius: '50%' }}><ShieldCheck size={24} color="#0f172a" /></div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>Regular Audits</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', fontWeight: '500' }}>Monthly hygiene & performance checks</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '24px', padding: '32px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ backgroundColor: '#10b981', padding: '12px', borderRadius: '50%' }}><TrendingUp size={24} color="#0f172a" /></div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>Advanced Analytics</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#cbd5e1', fontWeight: '500' }}>Data-driven menu optimization</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

                                                {/* WHY SWAP WINS SECTION */}
            <section id="why-swap-wins" style={{ padding: '120px 20px', backgroundColor: '#0f172a', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '100%', backgroundImage: 'radial-gradient(circle at center, rgba(16,185,129,0.05) 0%, transparent 70%)', zIndex: 0 }}></div>
                
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', marginBottom: '32px' }}>
                            <Trophy size={18} color="#10b981" />
                            <span style={{ color: '#f8fafc', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>The Core Advantage</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#f8fafc', fontWeight: '900', letterSpacing: '-1.5px', margin: '0 0 24px 0' }}>
                            Why FitBar <em style={{ color: '#10b981', fontStyle: 'normal' }}>Dominates</em>
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '650px', lineHeight: '1.7', fontWeight: '400', margin: 0 }}>
                            We've eliminated the friction of traditional food retail. What remains is a highly optimized, predictable asset for operators.
                        </p>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                        {[
                            { icon: <LineChart size={24} color="#10b981" />, title: 'Demand Flywheel', desc: 'Captive gym audiences combined with daily meal routines create an unstoppable recurring revenue engine.' },
                            { icon: <Zap size={24} color="#10b981" />, title: 'Asset-Light Operations', desc: 'Minimal CapEx requirement for kiosks ensures unconstrained scale without the heavy capital burden of traditional retail.' },
                            { icon: <FlaskConical size={24} color="#10b981" />, title: 'Clinical Precision', desc: 'Standardized, macro-counted nutrition protocols that generate unwavering trust from fitness professionals.' },
                            { icon: <Smartphone size={24} color="#10b981" />, title: 'Native App Ecosystem', desc: "Frictionless digital ordering and loyalty loops baked directly into the consumer's everyday habit flow." },
                            { icon: <Truck size={24} color="#10b981" />, title: 'Centralized Supply', desc: 'Leverage massive procurement savings and completely offload daily prep to reliable dark-kitchen networks.' },
                            { icon: <ShieldCheck size={24} color="#10b981" />, title: 'Audited Safety layers', desc: 'Rigorous multi-tier QA protocols that effortlessly maintain flawless, restaurant-grade hygiene standards.' },
                            { icon: <Star size={24} color="#10b981" />, title: 'Cult Brand Equity', desc: 'Step into a rapidly growing market leadership position, backed by immense and loyal community momentum.' },
                            { icon: <Headset size={24} color="#10b981" />, title: 'Turnkey Infrastructure', desc: 'An end-to-end operational blueprint guaranteeing a flawless launch and seamless daily management.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="fade-up" style={{ 
                                display: 'flex', 
                                alignItems: 'flex-start', 
                                gap: '24px', 
                                padding: '32px', 
                                backgroundColor: 'rgba(255,255,255,0.02)', 
                                borderRadius: '20px', 
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }} 
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'; }} 
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}>
                                <div style={{ 
                                    flexShrink: 0,
                                    width: '56px', height: '56px', 
                                    backgroundColor: 'rgba(16,185,129,0.1)', 
                                    borderRadius: '16px', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                    border: '1px solid rgba(16,185,129,0.2)'
                                }}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#f8fafc', marginBottom: '12px', letterSpacing: '-0.5px' }}>{feature.title}</h3>
                                    <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
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
                    <div className="incl-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}><div className="incl-title">Full Kiosk Setup & Branding</div></div>
                    <div className="incl-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}><div className="incl-title">Complete Tech Stack</div></div>
                    <div className="incl-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}><div className="incl-title">Shared Kitchen Partner</div></div>
                    <div className="incl-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}><div className="incl-title">Initial Inventory & Uniforms</div></div>
                    <div className="incl-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}><div className="incl-title">Launch Marketing Campaign</div></div>
                    <div className="incl-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}><div className="incl-title">Priority Site Allocation</div></div>
                    <div className="incl-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}><div className="incl-title">Clinical Operations Support</div></div>
                    <div className="incl-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}><div className="incl-title">Renewal & Continuity</div></div>
                </div>
            </section>

            {/* CTA */}
            <section id="partner" className="cta-section">
                <p className="section-label">Join the Movement</p>
                <h2>The Future of Health<br />is <span className="accent">Food-Led.</span></h2>
                <p style={{ marginBottom: '40px' }}>The window to partner and capture this â‚¹5B market is open now. Own a cluster. Build a lasting health business across India.</p>

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
                            <select required defaultValue="">
                                <option value="" disabled>Select Your Background / Occupation</option>
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
                    <div style={{ fontSize: '.8rem', color: 'var(--green)', fontWeight: '600', marginBottom: '8px' }}>Founder & CEO, Swapnow Â· ISB Alumni</div>
                    <div className="contact-detail"><a href="mailto:praveenkota@swapnow.in">praveenkota@swapnow.in</a></div>
                    <div className="contact-detail"><a href="tel:+918897142964">+91 88971 42964</a></div>
                    <div className="contact-detail"><Link to="/"><img src={logoWithName} alt="Swapnow" style={{ height: '16px', verticalAlign: 'middle' }} /></Link></div>
                </div>
            </section>

            <footer>
                <div className="footer-logo">
                    <img src={logoWithName} alt="Swapnow" style={{ height: '30px' }} />
                </div>
                <div className="footer-copy">Â© 2025 Swapnow. All rights reserved. Â· <img src={logoWithName} alt="Swapnow" style={{ height: '14px', verticalAlign: 'middle', opacity: 0.8 }} /></div>
            </footer>
        </div>
    );
}

export default Franchise;





