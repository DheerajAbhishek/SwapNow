import logoWithName from '../assets/logos/logoWithName.svg'
import './SiteHeader.css'
import { Link, useLocation } from 'react-router-dom'

function SiteHeader() {
    const location = useLocation();
    const isFranchise = location.pathname === '/franchise';

    return (
        <header className="site-header">
            <div className="site-header-inner">
                <Link to="/" className="brand-mark" aria-label="Swapnow home">
                    <img src={logoWithName} alt="Swapnow" />
                </Link>
                <div className="site-header-actions">
                    <Link to="/franchise"
                        className="btn"
                        style={{
                            backgroundColor: 'transparent',
                            color: '#1a1a1a',
                            border: '1px solid #e2e8f0',
                            boxShadow: 'none',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#f8fafc'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Own a Franchise
                    </Link>
                    {!isFranchise && (
                        <>
                            <Link to="/login" className="btn btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                Log in
                            </Link>
                            <Link to="/signup" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                Sign up
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </header>
    )
}

export default SiteHeader
