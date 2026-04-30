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
