import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-inner">

                <div className="navbar-links">
                    <a href="#vocabulary">Vocabulary</a>
                    <a href="#quiz">Quiz</a>
                    <a href="#favorites">Favorites</a>
                </div>

                <div className="navbar-account">
                    {user && (
                        <>
                            <span className="navbar-user">
                                👤 {user.name}
                            </span>

                            <button
                                type="button"
                                className="navbar-logout"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

            </div>
        </nav>
    );
}