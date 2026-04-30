            {/* WHY SWAP WINS SECTION */}
            <section id="why-swap-wins" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#f8fafc', borderRadius: '40px', border: '1px solid #e2e8f0', margin: '40px auto' }}>
                <div className="fade-up" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#f0fdf4', padding: '10px 20px', borderRadius: '100px', marginBottom: '24px', border: '1px solid #bbf7d0' }}>
                        <Trophy size={20} color="#10b981" />
                        <span style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>The SWAP Advantage</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#0f172a', fontWeight: '900', letterSpacing: '-1px', margin: '0 0 20px 0' }}>Why FitBar Wins</h2>
                    <p style={{ color: '#475569', fontSize: '1.25rem', fontWeight: '500', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        A proven, scalable micro-retail model built for maximum efficiency and predictable recurring revenue.
                    </p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {[
                        { icon: <LineChart size={28} color="#10b981" />, title: 'Demand Flywheel', desc: 'High retention + daily frequency creates compounding revenue from captive audicences.' },
                        { icon: <Zap size={28} color="#10b981" />, title: 'Asset-Light', desc: 'Low CapEx kiosks allow rapid scale with minimal upfront capital.' },
                        { icon: <FlaskConical size={28} color="#10b981" />, title: 'Standardized', desc: 'Precision nutrition that fitness enthusiasts trust implicitly.' },
                        { icon: <Smartphone size={28} color="#10b981" />, title: 'App Integrated', desc: 'Seamless ordering and retention baked into user habits.' },
                        { icon: <Truck size={28} color="#10b981" />, title: 'Supply Chain', desc: 'Procurement savings and reliable daily dark-kitchen logistics.' },
                        { icon: <ShieldCheck size={28} color="#10b981" />, title: 'Audited Safety', desc: 'Rigorous QA protocols maintain restaurant-grade standards.' },
                        { icon: <Star size={28} color="#10b981" />, title: 'Brand Equity', desc: 'A recognized leader with growing community momentum.' },
                        { icon: <Headset size={28} color="#10b981" />, title: 'Full Support', desc: 'End-to-end ops setup ensuring launch and daily success.' }
                    ].map((feature, idx) => (
                        <div key={idx} className="fade-up" style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '40px 32px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(0,0,0,0.03)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden', group: 'true' }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%' }}></div>
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '20px', display: 'inline-flex', alignSelf: 'flex-start', marginBottom: '24px', border: '1px solid #f1f5f9' }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>{feature.title}</h3>
                            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
