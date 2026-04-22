import logoWithName from '../assets/logos/logoWithName.svg'
import './SiteHeader.css'

function SiteHeader() {
    return (
        <header className="site-header">
            <div className="site-header-inner">
                <a href="#top" className="brand-mark" aria-label="Swapnow home">
                    <img src={logoWithName} alt="Swapnow" />
                </a>
                <div className="site-header-actions">
                    <button className="btn btn-secondary">
                        Log in
                    </button>
                    <button className="btn btn-primary">
                        Sign up
                    </button>
                </div>

            </div>
        </header>
    )
}

export default SiteHeader
