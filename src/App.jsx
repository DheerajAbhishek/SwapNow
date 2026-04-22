import './theme.css'
import './App.css'
import SiteHeader from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import WhatWeOffer from './components/WhatWeOffer'
import Testimonials from './components/Testimonials'
import Dock from './components/Dock'
import { VscHeart, VscTools, VscAccount, VscCommentDiscussion, VscPlayCircle } from 'react-icons/vsc'

function App() {
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

            <WhatWeOffer />

            <Testimonials />

            <footer className="site-footer">
                <p>Swapnow - Healthy food, personalized for your goals.</p>
            </footer>

            <Dock
                items={dockItems}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </div>
    )
}

export default App
