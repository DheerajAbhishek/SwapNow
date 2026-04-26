import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import './theme.css'
import './App.css'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'

import Testimonials from './components/Testimonials'
// import Dock from './components/Dock'
import logo from './assets/logos/logo.svg'

import LogoLoop from './components/LogoLoop';
import cultLogo from './assets/logos/cult-logo.webp';
import weWorkLogo from './assets/logos/weWork.webp';
import springBoardLogo from './assets/logos/91sp.webp';
import isb from './assets/logos/isb.webp';
import ebg from './assets/logos/ebg.webp';
import orangeElement from './assets/logos/orangeElement.webp';
import yellowElement from './assets/logos/yellowElement.webp';
import doc from './assets/images/doc.jpeg';
import del from './assets/images/del.jpeg';
import bmr from './assets/images/bmr.jpeg';
import fba from './assets/images/fba.jpeg';
import fbimg2 from './assets/images/fbimg1.webp';
import fbimg1 from './assets/images/fbimg2.webp';
import fbimg3 from './assets/images/fbimg3.webp';
import food1 from './assets/images/food1.webp';
import food2 from './assets/images/food2.webp';
import food3 from './assets/images/food3.webp';
import secImg1 from './assets/images/secImg1.jpg';
import secImg2 from './assets/images/secImg2.jpg';
import secImg3 from './assets/images/secImg3.jpg';
import pontaq from './assets/images/pontaq.png';
import reelVid2 from './assets/videos/VID_20260423_051433_057.mp4';
import reelVid1 from './assets/videos/compressed_VID_20260423_052410_965.mp4';
import reelVid3 from './assets/videos/comp_VID_20260423_051130_835.mp4';
import reelVid4 from './assets/videos/VID_20260423_051400_630.mp4';
import fitBarVideo from './assets/videos/comp_firbar.mp4';

import CardSwap, { Card } from './components/CardSwap'
import BmrModal from './components/BmrModal';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import { VscHeart, VscTools, VscAccount, VscCommentDiscussion, VscPlayCircle } from 'react-icons/vsc'

function HomePage() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleProtectedAction = (action) => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        action();
    };

    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isBmrModalOpen, setIsBmrModalOpen] = useState(false);

    // Reels logic
    const reelVideos = [reelVid1, reelVid2, reelVid3, reelVid4];

    // We will handle video play/pause at the element level to avoid React re-renders

    useEffect(() => {
        // Logs the font-family currently active on the page body
        const bodyFont = window.getComputedStyle(document.body).getPropertyValue('font-family');
        console.log('Site is currently using the following font-family on body:', bodyFont);
    }, []);

    const buttonConfig = [
        { label: 'Consult the Doc', onClick: () => handleProtectedAction(() => console.log('Consult the Doc')) },
        { label: 'Calculate BMR', onClick: () => handleProtectedAction(() => setIsBmrModalOpen(true)) },
        { label: 'Book a Checkup', onClick: () => handleProtectedAction(() => console.log('Book a Checkup')) },
        { label: 'Order Now', onClick: () => handleProtectedAction(() => console.log('Order Now')) }
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
        { icon: <VscHeart size={24} />, label: 'Meals', onClick: () => handleProtectedAction(() => window.location.href = '#personalized') },
        { icon: <VscTools size={24} />, label: 'Tools', onClick: () => handleProtectedAction(() => window.location.href = '#tools') },
        { icon: <VscAccount size={24} />, label: 'Doctor', onClick: () => handleProtectedAction(() => window.location.href = '#doctor') },
        { icon: <VscCommentDiscussion size={24} />, label: 'Testimonials', onClick: () => handleProtectedAction(() => window.location.href = '#testimonials') },
        { icon: <VscPlayCircle size={24} />, label: 'Reels', onClick: () => handleProtectedAction(() => window.location.href = '#reels') },
    ];

    return (
        <div className="page-shell">
            <div className="page-backdrop" aria-hidden="true" />

            <SiteHeader />

            <HeroSection />

            <div className='imgs' style={{ height: '600px', position: 'relative' }}>
                <img
                    src={orangeElement}
                    alt="Orange Decoration"
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '0px',
                        width: '217px',
                        zIndex: 0,

                    }}
                />
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
                        right: '29%',
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

            {/* Food Thats Coded for You Section */}
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#1a1a1a', marginBottom: '3rem', lineHeight: '1.1' }}>
                        Food that's Coded for You, Not the Crowd.
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={secImg1} alt="For late nights, not ramen." style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
                            <p style={{ marginTop: '20px', fontSize: '2.25rem', fontWeight: '600', color: '#1a1a1a' }}>Real meals for real grind.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src={secImg2} alt="For PRs, not just protein" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
                            <p style={{ marginTop: '20px', fontSize: '2.25rem', fontWeight: '600', color: '#1a1a1a' }}>Muscles need more than motivation.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src={secImg3} alt="For vitality, not just aging." style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
                            <p style={{ marginTop: '20px', fontSize: '2.25rem', fontWeight: '600', color: '#1a1a1a' }}>Energy that doesn't retire.</p>
                        </div>
                        {/* <div style={{ textAlign: 'center' }}>
                            <img src={secImg4} alt="For lunch, not spreadsheets" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
                            <p style={{ marginTop: '20px', fontSize: '2.25rem', fontWeight: '600', color: '#1a1a1a' }}>Deadlines handled. Dinner too.</p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Fit Bar Section */}
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fafafa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '60px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 calc(66.666% - 20px)', minWidth: '300px', textAlign: 'left', paddingRight: '2vw' }}>
                            {/* <h4 style={{ textTransform: 'uppercase', letterSpacing: '2px', color: '#666', fontSize: '0.9rem', marginBottom: '10px' }}>
                                compact size absolute. absolute impact
                            </h4> */}
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px', lineHeight: '1.1' }}>
                                Compact size. Absolute Impact.
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
                                The era of mid snacks is dead. We just dropped the Fit Bar—a high-key fuel station designed to clock your hunger with zero misses. Food that's personalized for you, ready in under two minutes, and priced so you can stay winning every day. This isn't just food; it’s a literal cheat code.    </p>
                        </div>
                        <div style={{ flex: '1 1 calc(33.333% - 20px)', minWidth: '300px' }}>
                            <video
                                src={fitBarVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: '100%',
                                    borderRadius: '16px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        <img src={fbimg1} alt="Fit Bar 1" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        <img src={fbimg2} alt="Fit Bar 2" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        <img src={fbimg3} alt="Fit Bar 3" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>
            </div>

            {/* The Top Shelf Stash Section */}
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff', position: 'relative' }}>
                <img
                    src={yellowElement}
                    alt="Yellow Decoration"
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '0px',
                        width: '217px',
                        zIndex: 0,

                    }}
                />
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: '#1a1a1a', marginBottom: '3rem', lineHeight: '1.1' }}>
                        The top shelf stash
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div style={{ textAlign: 'left', backgroundColor: '#f9f9f9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <img src={food1} alt="Food 1" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div style={{ padding: '24px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a1a' }}>Lorem Ipsum</h3>
                                <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', backgroundColor: '#f9f9f9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <img src={food2} alt="Food 2" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div style={{ padding: '24px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a1a' }}>Dolor Sit Amet</h3>
                                <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', backgroundColor: '#f9f9f9', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <img src={food3} alt="Food 3" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div style={{ padding: '24px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px', color: '#1a1a1a' }}>Consectetur Adipiscing</h3>
                                <p style={{ color: '#555', lineHeight: '1.6', margin: 0 }}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instagram Reels Section */}
            <div
                style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#fff', marginTop: '2rem' }}
            >
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem', color: '#1a1a1a', fontWeight: '800' }}>
                    See us in action!
                </h2>
                <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {reelVideos.map((videoSrc, index) => (
                        <div
                            key={index}
                            className="reel-card"
                            onMouseEnter={(e) => {
                                const v = e.currentTarget.querySelector('video');
                                if (v) {
                                    v.muted = false;
                                    v.play().catch(() => { v.muted = true; v.play(); });
                                }
                                e.currentTarget.classList.add('hovered');
                            }}
                            onMouseLeave={(e) => {
                                const v = e.currentTarget.querySelector('video');
                                if (v) {
                                    v.pause();
                                    v.currentTime = 0;
                                    v.muted = true;
                                }
                                e.currentTarget.classList.remove('hovered');
                            }}
                            style={{
                                width: '320px',
                                height: '568px',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                position: 'relative',
                                cursor: 'pointer',
                                transform: 'scale(1) translateZ(0)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                willChange: 'transform'
                            }}
                        >
                            <style>{`
                                .reel-card.hovered {
                                    transform: scale(1.05) translateZ(0) !important;
                                    box-shadow: 0 15px 35px rgba(0,0,0,0.3) !important;
                                }
                                .reel-card.hovered .reel-overlay {
                                    opacity: 0;
                                }
                            `}</style>
                            <video
                                src={videoSrc}
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            {/* Overlay to indicate it plays on hover */}
                            <div className="reel-overlay" style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '3rem',
                                transition: 'opacity 0.3s ease, background-color 0.3s ease',
                                pointerEvents: 'none'
                            }}>
                                <VscPlayCircle />
                            </div>
                        </div>
                    ))}
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

            {/* Our Investors Section */}
            <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
                <h2 style={{ marginBottom: '3rem', color: '#1a1a1a', textTransform: 'uppercase' }}>
                    Our Investors
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={ebg} alt="EBG Investor" style={{ height: '80px', objectFit: 'contain', transition: 'all 0.3s ease' }} />
                    <img src={isb} alt="ISB Investor" style={{ height: '80px', objectFit: 'contain', transition: 'all 0.3s ease' }} />
                    <img src={pontaq} alt="Pontaq Investor" style={{ height: '80px', objectFit: 'contain', transition: 'all 0.3s ease' }} />
                </div>
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

            <BmrModal isOpen={isBmrModalOpen} onClose={() => setIsBmrModalOpen(false)} />
        </div>
    )
}

export default HomePage
