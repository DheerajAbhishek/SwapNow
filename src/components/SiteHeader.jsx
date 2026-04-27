import logoWithName from '../assets/logos/logoWithName.svg'
import './SiteHeader.css'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function SiteHeader() {
    const location = useLocation();
    const isFranchise = location.pathname === '/franchise';
    const { isAuthenticated, user } = useAuth();

    const displayName = user?.username || user?.name || user?.email?.split('@')[0] || 'User';

    return (
        <header className="site-header" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: 'calc(100% - 40px)',
            maxWidth: '1444px',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '9999px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(255, 255, 255, 0.4) inset',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            padding: '12px 24px',
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
        }}>
            <div className="site-header-inner" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <Link to="/" className="brand-mark" aria-label="Swapnow home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logoWithName} alt="Swapnow" style={{ height: '36px', transition: 'transform 0.3s ease', marginLeft: '36px' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                </Link>
                <div className="site-header-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Link to="/franchise"
                        className="btn"
                        style={{
                            backgroundColor: 'transparent',
                            color: '#1a1a1a',
                            border: '1px solid #e2e8f0',
                            borderRadius: '9999px',
                            padding: '8px 20px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => { e.target.style.backgroundColor = '#f8fafc'; e.target.style.transform = 'translateY(-2px)'; }}
                        onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.transform = 'translateY(0)'; }}
                    >
                        Own a Franchise
                    </Link>
                    {!isFranchise && (
                        <>
                            {isAuthenticated ? (
                                <div style={{
                                    borderRadius: '9999px',
                                    padding: '8px 18px',
                                    fontWeight: '700',
                                    color: '#0f172a',
                                    backgroundColor: '#eef2ff',
                                    border: '1px solid #c7d2fe'
                                }}>
                                    {displayName}
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="btn btn-secondary rizz-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9999px', padding: '8px 24px', fontWeight: '700' }}>
                                        Log in
                                    </Link>
                                    <Link to="/signup" className="btn btn-primary rizz-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9999px', padding: '8px 24px', fontWeight: '700' }}>
                                        Sign up
                                    </Link>
                                </>
                            )}
                        </>
                    )}
                </div>

            </div>
        </header>
    )
}

export default SiteHeader
