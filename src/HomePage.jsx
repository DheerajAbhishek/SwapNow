import React, { useState, useEffect } from 'react';
import './theme.css'
import './App.css'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'

import Testimonials from './components/Testimonials'
// import Dock from './components/Dock'

import LogoLoop from './components/LogoLoop';
import cultLogo from './assets/logos/cult-logo.png';
import weWorkLogo from './assets/logos/weWork.png';
import springBoardLogo from './assets/logos/91sp.png';
import isb from './assets/logos/isb.png';
import ebg from './assets/logos/ebg.jpg';
import doc from './assets/images/doc.jpeg';
import del from './assets/images/del.jpeg';
import bmr from './assets/images/bmr.jpeg';
import fba from './assets/images/fba.jpeg';


import CardSwap, { Card } from './components/CardSwap'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import { VscHeart, VscTools, VscAccount, VscCommentDiscussion, VscPlayCircle } from 'react-icons/vsc'

function HomePage() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    useEffect(() => {
        // Logs the font-family currently active on the page body
        const bodyFont = window.getComputedStyle(document.body).getPropertyValue('font-family');
        console.log('Site is currently using the following font-family on body:', bodyFont);
    }, []);

    const buttonConfig = [
        { label: 'Consult the Doc', onClick: () => console.log('Consult the Doc') },
        { label: 'Calculate BMR', onClick: () => console.log('Calculate BMR') },
        { label: 'Book a Checkup', onClick: () => console.log('Book a Checkup') },
        { label: 'Order Now', onClick: () => console.log('Order Now') }
    ];

    // Alternative with image sources
    const imageLogos = [
        { src: cultLogo, alt: "cult", href: "https://www.cult.fit" },
        { src: weWorkLogo, alt: "weWork", href: "https://company2.com" },
        { src: springBoardLogo, alt: "91SpringBoard", href: "https://company3.com" },
        { src: isb, alt: "ISB", href: "https://www.isb.edu" },
        { src: ebg, alt: "EBG", href: "https://www.ebg.in" },


    ];
    const dockItems = [
        { icon: <VscHeart size={24} />, label: 'Meals', onClick: () => window.location.href = '#personalized' },
        { icon: <VscTools size={24} />, label: 'Tools', onClick: () => window.location.href = '#tools' },
        { icon: <VscAccount size={24} />, label: 'Doctor', onClick: () => window.location.href = '#doctor' },
        { icon: <VscCommentDiscussion size={24} />, label: 'Testimonials', onClick: () => window.location.href = '#testimonials' },
        { icon: <VscPlayCircle size={24} />, label: 'Reels', onClick: () => window.location.href = '#reels' },
    ];

    return (
        <div className="page-shell">
            <div className="page-backdrop" aria-hidden="true" />

            <SiteHeader />

            <HeroSection />

            <div className='imgs' style={{ height: '600px', position: 'relative' }}>
                <h1 style={{
                    padding: '4rem 7rem 2rem 7rem',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Fixed: camelCase
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    fontWeight: '800', // Fixed: comma instead of semicolon
                    color: '#1a1a1a' // Fixed: added a color or you can remove the line
                }}>
                    How we play!
                </h1>
                <div style={{ textAlign: 'center', marginBottom: '2rem', zIndex: 10, position: 'relative' }}>
                    <button className="primary-button" style={{
                        padding: '16px 32px',
                        borderRadius: '30px',
                        border: 'none',
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, background-color 0.2s ease',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                        position: 'relative',
                        right: '26%',
                        top: '30px'
                    }}
                        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        onClick={buttonConfig[activeCardIndex]?.onClick}
                    >
                        {buttonConfig[activeCardIndex]?.label}
                    </button>
                </div>
                <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={true}
                    onActiveIndexChange={(newIndex) => setActiveCardIndex(newIndex)}
                >
                    <Card style={{
                        width: '100%',
                        maxWidth: '800px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                        border: '1px solid #f0f0f0',
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* 1. Title at the very top */}
                        <div style={{ padding: '20px 32px 20px 32px' }}>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '400',
                                color: '#1a1a1a',
                                margin: 0,
                                lineHeight: '1.2',

                            }}>
                                Professional Clinical Consultation
                            </h3>
                        </div>

                        {/* 2. Full Image in the middle */}
                        <div style={{ width: '100%', height: '71%', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={doc}
                                alt="Doctor"
                                style={{
                                    width: '86%',
                                    height: '93%', // Allows the full image to show without cropping
                                    display: 'block',
                                    paddingLeft: '50px',
                                    borderRadius: '12px'
                                }}
                            />
                        </div>

                        {/* 3. Description text at the bottom */}
                        <div style={{ padding: '10px 40px 40px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{
                                color: '#555',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                margin: 0,
                                textAlign: 'center',
                                marginBottom: '20px'
                            }}>
                                Skip the guesswork. Dedicated doctor consultations and targeted blood panels
                                to map your metabolic markers with clinical precision.
                            </p>
                        </div>
                    </Card>
                    <Card style={{
                        width: '100%',
                        maxWidth: '800px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                        border: '1px solid #f0f0f0',
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* 1. Title at the very top */}
                        <div style={{ padding: '20px 32px 20px 32px' }}>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '400',
                                color: '#1a1a1a',
                                margin: 0,
                                lineHeight: '1.2',

                            }}>
                                BMR-Driven Macro Mapping
                            </h3>
                        </div>

                        {/* 2. Full Image in the middle */}
                        <div style={{ width: '100%', height: '71%', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={bmr}
                                alt="Doctor"
                                style={{
                                    width: '86%',
                                    height: '93%', // Allows the full image to show without cropping
                                    display: 'block',
                                    paddingLeft: '50px',
                                    borderRadius: '12px'
                                }}
                            />
                        </div>

                        {/* 3. Description text at the bottom */}
                        <div style={{ padding: '10px 40px 40px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{
                                color: '#555',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                margin: 0,
                                textAlign: 'center',
                                marginBottom: '20px'
                            }}>
                                Using your Basal Metabolic Rate and clinical data, our experts engineer a precise nutritional roadmap of calories and macros.
                            </p>
                        </div>
                    </Card>
                    <Card style={{
                        width: '100%',
                        maxWidth: '800px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                        border: '1px solid #f0f0f0',
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* 1. Title at the very top */}
                        <div style={{ padding: '20px 32px 20px 32px' }}>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '400',
                                color: '#1a1a1a',
                                margin: 0,
                                lineHeight: '1.2',

                            }}>
                                Deep Full-Body Analysis
                            </h3>
                        </div>

                        {/* 2. Full Image in the middle */}
                        <div style={{ width: '100%', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={fba}
                                alt="Doctor"
                                style={{
                                    width: '86%',
                                    height: '93%', // Allows the full image to show without cropping
                                    display: 'block',
                                    paddingLeft: '50px',
                                    borderRadius: '12px'
                                }}
                            />
                        </div>

                        {/* 3. Description text at the bottom */}
                        <div style={{ padding: '10px 40px 40px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{
                                color: '#555',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                margin: 0,
                                textAlign: 'center',
                                marginBottom: '20px'
                            }}>
                                A 360° view of your health. We analyze visceral fat, muscle mass, and metabolic age to track what weight scales miss.
                            </p>
                        </div>
                    </Card>
                    <Card style={{
                        width: '100%',
                        maxWidth: '800px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                        border: '1px solid #f0f0f0',
                        backgroundColor: '#fff',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* 1. Title at the very top */}
                        <div style={{ padding: '20px 32px 20px 32px' }}>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '400',
                                color: '#1a1a1a',
                                margin: 0,
                                lineHeight: '1.2',

                            }}>
                                Precision Personalized Delivery
                            </h3>
                        </div>

                        {/* 2. Full Image in the middle */}
                        <div style={{ width: '100%', backgroundColor: '#f9f9f9' }}>
                            <img
                                src={del}
                                alt="Doctor"
                                style={{
                                    width: '86%',
                                    height: '93%', // Allows the full image to show without cropping
                                    display: 'block',
                                    paddingLeft: '50px',
                                    borderRadius: '12px'
                                }}
                            />
                        </div>

                        {/* 3. Description text at the bottom */}
                        <div style={{ padding: '10px 40px 40px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{
                                color: '#555',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                margin: 0,
                                textAlign: 'center',
                                marginBottom: '20px'
                            }}>
                                Nutritionist-crafted, medical-grade meals tailored to your profile, delivered fresh to your doorstep daily.
                            </p>
                        </div>
                    </Card>
                </CardSwap>
            </div>

            {/* Instagram Reels Section */}
            <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#fff', marginTop: '2rem' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem', color: '#1a1a1a', fontWeight: '800' }}>
                    See us in action!
                </h2>
                <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {/* Reel 1 Wrapper - Crops out Instagram headers/footers */}
                    <div style={{
                        width: '320px',
                        height: '400px',
                        overflow: 'hidden',
                        borderRadius: '16px',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative'
                    }}>
                        <iframe
                            src="https://www.instagram.com/reel/DXWotnRDO6Q/embed"
                            width="322"
                            height="700"
                            frameBorder="0"
                            scrolling="no"
                            allowtransparency="true"
                            style={{ position: 'absolute', top: '-60px', left: '-1px' }}
                            title="Instagram Reel 1"
                        ></iframe>
                        {/* Overlay to block out bottom interactions */}
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'transparent', zIndex: 10 }}></div>
                    </div>

                    {/* Reel 2 Wrapper */}
                    <div style={{
                        width: '320px',
                        height: '400px',
                        overflow: 'hidden',
                        borderRadius: '16px',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative'
                    }}>
                        <iframe
                            src="https://www.instagram.com/reel/DSH-QPPgap5/embed"
                            width="322"
                            height="700"
                            frameBorder="0"
                            scrolling="no"
                            allowtransparency="true"
                            style={{ position: 'absolute', top: '-60px', left: '-1px' }}
                            title="Instagram Reel 2"
                        ></iframe>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'transparent', zIndex: 10 }}></div>
                    </div>

                    {/* Reel 3 Wrapper */}
                    <div style={{
                        width: '320px',
                        height: '400px',
                        overflow: 'hidden',
                        borderRadius: '16px',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative'
                    }}>
                        <iframe
                            src="https://www.instagram.com/reel/DQ4SgXPATz7/embed"
                            width="322"
                            height="700"
                            frameBorder="0"
                            scrolling="no"
                            allowtransparency="true"
                            style={{ position: 'absolute', top: '-60px', left: '-1px' }}
                            title="Instagram Reel 3"
                        ></iframe>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'transparent', zIndex: 10 }}></div>
                    </div>
                    {/* Reel 4 Wrapper */}
                    <div style={{
                        width: '320px',
                        height: '400px',
                        overflow: 'hidden',
                        borderRadius: '16px',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative'
                    }}>
                        <iframe
                            src="https://www.instagram.com/reel/DLuhejjh5Cs/embed"
                            width="322"
                            height="700"
                            frameBorder="0"
                            scrolling="no"
                            allowtransparency="true"
                            style={{ position: 'absolute', top: '-60px', left: '-1px' }}
                            title="Instagram Reel 4"
                        ></iframe>
                        {/* Overlay to block out bottom interactions */}
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'transparent', zIndex: 10 }}></div>
                    </div>
                </div>
            </div>

            <Testimonials />
            <div position="relative" style={{ textAlign: 'center' }}>
                <h2>TRUSTED PARTNERS</h2>
            </div>


            <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                {/* Basic horizontal loop */}
                <LogoLoop
                    logos={imageLogos}
                    speed={80}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={50}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />


            </div>

            <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '5rem 2rem 2rem 2rem', marginTop: '4rem', fontFamily: 'sans-serif' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem' }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff', fontWeight: '800', letterSpacing: '-0.5px' }}>Swapnow</h3>
                        <p style={{ color: '#a0aec0', lineHeight: '1.7', fontSize: '1rem', maxWidth: '350px' }}>
                            Skip the guesswork. Dedicated doctor consultations and targeted blood panels to map your metabolic markers with clinical precision.
                        </p>
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff', fontWeight: '600' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#how-we-play" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#a0aec0'}>How we play!</a></li>
                            <li><a href="#testimonials" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#a0aec0'}>Testimonials</a></li>
                            <li><a href="#partners" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#a0aec0'}>Our Partners</a></li>
                            <li><a href="#faq" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#a0aec0'}>FAQ</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff', fontWeight: '600' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#privacy" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#a0aec0'}>Privacy Policy</a></li>
                            <li><a href="#terms" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#a0aec0'}>Terms of Service</a></li>
                            <li><a href="#cookie" style={{ color: '#a0aec0', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#a0aec0'}>Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff', fontWeight: '600' }}>Connect</h4>
                        <p style={{ color: '#a0aec0', marginBottom: '1rem', lineHeight: '1.6' }}>Follow us to stay updated on your healthy journey.</p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#2d3748', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#4a5568'} onMouseOut={(e) => e.target.style.backgroundColor = '#2d3748'}>Instagram</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#2d3748', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.target.style.backgroundColor = '#4a5568'} onMouseOut={(e) => e.target.style.backgroundColor = '#2d3748'}>X / Twitter</a>
                        </div>
                    </div>
                </div>

                <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', paddingTop: '2rem', borderTop: '1px solid #2d3748', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <p style={{ color: '#718096', fontSize: '0.9rem', margin: 0 }}>
                        &copy; {new Date().getFullYear()} Swapnow. All rights reserved.
                    </p>
                    <p style={{ color: '#718096', fontSize: '0.9rem', margin: 0 }}>
                        Designed with clinical precision.
                    </p>
                </div>
            </footer>

            {/* <Dock
                items={dockItems}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            /> */}

        </div>
    )
}

export default HomePage
