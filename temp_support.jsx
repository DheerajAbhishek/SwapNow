            {/* FULL SUPPORT, ZERO HASSLE SECTION */}
            <section id="full-support" style={{ padding: '100px 20px', backgroundColor: '#fff', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div className="fade-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '12px 24px', borderRadius: '30px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                            <LifeBuoy size={24} color="#10b981" strokeWidth={2.5} />
                            <span style={{ fontSize: '1rem', color: '#10b981', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Zero Hassle Guarantee</span>
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#0f172a', fontWeight: '900', letterSpacing: '-1px', margin: '0 0 24px 0' }}>Comprehensive Support</h2>
                        <p style={{ color: '#4b5563', fontSize: '1.25rem', fontWeight: '500', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                            Our robust operational infrastructure handles everything from technology to logistics, ensuring your franchise runs smoothly without your daily involvement.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
                        
                        {/* Digital Layer */}
                        <div className="fade-up" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '48px', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 350px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}><Laptop size={32} color="#10b981" /></div>
                                    <span style={{ color: '#10b981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Layer 1: Digital</span>
                                </div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Technology Stack</h3>
                                <p style={{ color: '#4b5563', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: '500' }}>End-to-end digital ecosystem for seamless operations.</p>
                            </div>
                            <div style={{ flex: '1.5 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', backgroundColor: '#fff', padding: '32px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                {['Consumer Ordering App', 'Kitchen Display System (KDS)', 'Real-time Analytics Dashboard', 'Automated Payments'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                        <CheckCircle2 fill="#10b981" color="#fff" size={28} strokeWidth={1.5} style={{ flexShrink: 0 }} /> 
                                        <span style={{ color: '#334155', fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.4' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Physical Layer */}
                        <div className="fade-up" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '48px', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 350px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}><Store size={32} color="#10b981" /></div>
                                    <span style={{ color: '#10b981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Layer 2: Physical</span>
                                </div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>On-Ground Ops</h3>
                                <p style={{ color: '#4b5563', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: '500' }}>Complete physical setup and ongoing management.</p>
                            </div>
                            <div style={{ flex: '1.5 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', backgroundColor: '#fff', padding: '32px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                {['Kiosk Design & Build-out', 'Staff Recruitment & Training', 'Standard Operating Procedures', 'Daily Staff Management'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                        <CheckCircle2 fill="#10b981" color="#fff" size={28} strokeWidth={1.5} style={{ flexShrink: 0 }} /> 
                                        <span style={{ color: '#334155', fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.4' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Supply Layer */}
                        <div className="fade-up" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '48px', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 350px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}><Truck size={32} color="#10b981" /></div>
                                    <span style={{ color: '#10b981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>Layer 3: Supply</span>
                                </div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Logistics & QA</h3>
                                <p style={{ color: '#4b5563', fontSize: '1.15rem', lineHeight: '1.6', fontWeight: '500' }}>Robust supply chain ensuring consistent quality.</p>
                            </div>
                            <div style={{ flex: '1.5 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', backgroundColor: '#fff', padding: '32px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                {['Central Kitchen Partners', 'Quality Assurance Audits', 'Standardized SKU Management', 'Last-Mile Logistics'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                        <CheckCircle2 fill="#10b981" color="#fff" size={28} strokeWidth={1.5} style={{ flexShrink: 0 }} /> 
                                        <span style={{ color: '#334155', fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.4' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Bottom Banner */}
                    <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '32px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '50%' }}><Megaphone size={24} color="#10b981" /></div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>Marketing Playbooks</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', fontWeight: '500' }}>Proven launch & growth campaigns</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '32px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '50%' }}><ShieldCheck size={24} color="#10b981" /></div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>Regular Audits</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', fontWeight: '500' }}>Monthly hygiene & performance checks</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '32px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '50%' }}><TrendingUp size={24} color="#10b981" /></div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>Advanced Analytics</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', fontWeight: '500' }}>Data-driven menu optimization</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
