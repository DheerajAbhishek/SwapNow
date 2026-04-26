import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { useAuth } from '../context/AuthContext';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            login(data.user);
            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        // Here you would typically integrate with AWS Cognito Google Provider UI
        // For demonstration purposes, we are simulating a successful login
        login({ name: 'Google User', email: 'test@example.com' });
        navigate('/');
    };

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

                    <form onSubmit={handleEmailLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                        {error && (
                            <div style={{ padding: '12px', backgroundColor: '#fee2e2', color: '#dc2626', borderRadius: '8px', fontSize: '0.9rem' }}>
                                {error}
                            </div>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '0.9rem', color: '#1a1a1a', fontWeight: 600 }}>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
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
                            disabled={loading}
                            className="btn btn-primary"
                            style={{
                                marginTop: '12px',
                                padding: '16px',
                                width: '100%',
                                justifyContent: 'center',
                                boxShadow: '0 8px 20px rgba(25, 158, 65, 0.25)',
                                opacity: loading ? 0.7 : 1,
                                cursor: loading ? 'not-allowed' : 'pointer'
                            }}>
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
                            <span style={{ margin: '0 10px', color: '#666', fontSize: '0.9rem' }}>OR</span>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                padding: '14px',
                                width: '100%',
                                backgroundColor: '#fff',
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                color: '#1a1a1a',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
                            Continue with Google
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