import './theme.css'
import './App.css'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import WhatWeOffer from './components/WhatWeOffer'
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

function App() {


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
                </h1> <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={true}
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
                        <div style={{ padding: '10px 40px 40px 40px' }}>
                            <p style={{
                                color: '#555',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                margin: 0,
                                textAlign: 'center'
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
                        <div style={{ padding: '10px 40px 40px 40px' }}>
                            <p style={{
                                color: '#555',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                margin: 0,
                                textAlign: 'center'
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
                        <div style={{ padding: '10px 40px 40px 40px' }}>
                            <p style={{
                                color: '#555',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                margin: 0,
                                textAlign: 'center'
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
                        <div style={{ padding: '10px 40px 40px 40px' }}>
                            <p style={{
                                color: '#555',
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                margin: 0,
                                textAlign: 'center'
                            }}>
                                Nutritionist-crafted, medical-grade meals tailored to your profile, delivered fresh to your doorstep daily.</p>
                        </div>
                    </Card>
                </CardSwap>
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

            <footer className="site-footer">
                <p>Swapnow - Healthy food, personalized for your goals.</p>
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

export default App
