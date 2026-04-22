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
import doc from './assets/logos/doc.jpg';


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

            <div style={{ height: '600px', position: 'relative' }}>
                <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                >
                    <Card>
                        <h3>Professional Clinical Consultation</h3>
                        <img src={doc} alt="Doctor" style={{ height: '368px', paddingLeft: '26px' }} />
                        <p>Skip the guesswork. Dedicated doctor consultations and targeted blood panels to map your metabolic markers</p>
                    </Card>
                    <Card>
                        <h3>Card 2</h3>
                        <p>Your content here</p>
                    </Card>
                    <Card>
                        <h3>Card 3</h3>
                        <p>Your content here</p>
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
