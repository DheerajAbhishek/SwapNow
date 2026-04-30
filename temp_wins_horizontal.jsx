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
                            { icon: <Smartphone size={24} color="#10b981" />, title: 'Native App Ecosystem', desc: 'Frictionless digital ordering and loyalty loops baked directly into the consumer''s everyday habit flow.' },
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
