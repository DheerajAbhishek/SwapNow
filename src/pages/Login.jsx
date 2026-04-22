import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';

function Login() {
    return (
        <div className="page-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="page-backdrop" aria-hidden="true" />
            <SiteHeader />

            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 20px 60px' }}>
                <div style={{
                    width: '100%',
                    maxWidth: '420px',
                    backgroundColor: '#fff',
                    padding: '40px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                    border: '1px solid #f0f0f0',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 8px 0', color: '#1a1a1a', letterSpacing: '-0.5px' }}>
                        Welcome Back
                    </h2>
                    <p style={{ color: '#666', fontSize: '1rem', marginBottom: '32px' }}>
                        Log in to manage your clinical nutrition
                    </p>

                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', color: '#1a1a1a', fontWeight: 600 }}>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: '14px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s ease'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', color: '#1a1a1a', fontWeight: 600 }}>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                style={{
                                    padding: '14px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s ease'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{
                                marginTop: '12px',
                                padding: '16px',
                                width: '100%',
                                justifyContent: 'center',
                                boxShadow: '0 8px 20px rgba(25, 158, 65, 0.25)'
                            }}>
                            Log In
                        </button>
                    </form>

                    <p style={{ marginTop: '32px', color: '#666', fontSize: '0.95rem' }}>
                        Don't have an account?{' '}
                        <Link to="/signup" style={{ color: 'var(--primary-600)', fontWeight: 600, textDecoration: 'none' }}>
                            Sign up
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Login;