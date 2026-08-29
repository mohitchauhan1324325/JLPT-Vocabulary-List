import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
    const { login, register } = useAuth();
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setLoading(true);

        try {
            if (isRegister) {
                await register(name, email, password);
            } else {
                await login(email, password);
            }

            navigate("/vocabulary");
            
        } catch (err) {
            setError(
                err.response?.data?.message ||
                'Something went wrong'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-mon">語</div>

                <h1>
                    {isRegister ? 'Create Account' : 'Welcome Back'}
                </h1>

                <p className="auth-subtitle">
                    {isRegister
                        ? 'Create your JLPT learning account'
                        : 'Login to continue your JLPT learning'}
                </p>

                <form onSubmit={handleSubmit}>
                    {isRegister && (
                        <div className="auth-field">
                            <label htmlFor="name">Name</label>

                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                required
                            />
                        </div>
                    )}

                    <div className="auth-field">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="password">Password</label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="At least 6 characters"
                            minLength={6}
                            required
                        />
                    </div>

                    {error && (
                        <p className="auth-error">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="auth-submit"
                        disabled={loading}
                    >
                        {loading
                            ? 'Please wait...'
                            : isRegister
                                ? 'Create Account'
                                : 'Login'}
                    </button>
                </form>

                <div className="auth-switch">
                    {isRegister
                        ? 'Already have an account?'
                        : "Don't have an account?"}

                    <button
                        type="button"
                        onClick={() => {
                            setIsRegister((value) => !value);
                            setError('');
                        }}
                    >
                        {isRegister ? 'Login' : 'Register'}
                    </button>
                </div>
            </div>
        </div>
    );
}