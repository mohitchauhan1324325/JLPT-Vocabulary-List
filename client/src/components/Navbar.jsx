import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="site-navbar">
            <Link to="/" className="navbar-brand">
                <span className="navbar-mon">語</span>

                <span className="navbar-title">
                    JLPT 語彙
                    <small>Japanese Vocabulary</small>
                </span>
            </Link>

            <div className="navbar-links">
                <Link to="/" className="navbar-link">
                    Home
                </Link>

                <Link to="/vocabulary" className="navbar-link">
                    Vocabulary
                </Link>

                {isAuthenticated && (
                    <>
                        <Link to="/quiz" className="navbar-link">
                            Quiz
                        </Link>

                        <Link to="/flashcards" className="navbar-link">
                            Flashcards
                        </Link>
                    </>
                )}
            </div>

            <div className="navbar-auth">
                {isAuthenticated ? (
                    <button
                        type="button"
                        className="navbar-logout"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className="navbar-login">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}