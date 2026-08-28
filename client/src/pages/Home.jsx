import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
export default function Home() {
    const { isAuthenticated } = useAuth();

    return (
        <div className="landing-page">
            <Navbar />
            
            {/* Hero */}
            <section className="hero-section">

                <div className="hero-mon">
                    語
                </div>

                <p className="hero-kicker">
                    日本語を学び、世界を広げる
                </p>

                <h1>
                    Master Japanese Vocabulary
                    <span>for the JLPT</span>
                </h1>

                <p className="hero-description">
                    Learn Japanese vocabulary, practice with quizzes and
                    flashcards, and build your JLPT skills step by step.
                </p>

                <div className="hero-actions">
                    <Link
                        to={isAuthenticated ? '/vocabulary' : '/login'}
                        className="hero-primary-btn"
                    >
                        {isAuthenticated ? 'Start Learning' : 'Get Started'}
                    </Link>

                    {!isAuthenticated && (
                        <Link
                            to="/login"
                            className="hero-secondary-btn"
                        >
                            Login
                        </Link>
                    )}
                </div>

            </section>


            {/* Features */}
            <section className="features-section">

                <div className="section-heading">
                    <p className="section-kicker">
                        学習ツール
                    </p>

                    <h2>
                        Everything you need to learn
                    </h2>

                    <p>
                        Build your Japanese vocabulary with simple,
                        focused learning tools.
                    </p>
                </div>


                <div className="feature-grid">

                    <Link
                        to="/vocabulary"
                        className="feature-card"
                    >
                        <div className="feature-icon">📚</div>

                        <h3>Vocabulary</h3>

                        <p>
                            Explore JLPT vocabulary from N5 to N1,
                            search words and learn their meanings.
                        </p>

                        <span>Explore vocabulary →</span>
                    </Link>


                    <Link
                        to="/vocabulary"
                        className="feature-card"
                    >
                        <div className="feature-icon">🃏</div>

                        <h3>Flashcards</h3>

                        <p>
                            Review vocabulary using interactive
                            flashcards and strengthen your memory.
                        </p>

                        <span>Practice flashcards →</span>
                    </Link>


                    <Link
                        to="/vocabulary"
                        className="feature-card"
                    >
                        <div className="feature-icon">✏️</div>

                        <h3>Quiz</h3>

                        <p>
                            Test your knowledge and track how well
                            you understand Japanese vocabulary.
                        </p>

                        <span>Take a quiz →</span>
                    </Link>


                    <div className="feature-card feature-coming-soon">
                        <div className="feature-icon">🤖</div>

                        <h3>AI Japanese Tutor</h3>

                        <p>
                            Practice conversations, understand grammar
                            and get personalized Japanese explanations.
                        </p>

                        <span>Coming soon</span>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">📊</div>

                        <h3>Progress Tracking</h3>

                        <p>
                            Keep track of mastered vocabulary, quiz
                            performance and your learning progress.
                        </p>

                        <span>Track your progress</span>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">⭐</div>

                        <h3>Favorites</h3>

                        <p>
                            Save difficult or important words and
                            review them whenever you want.
                        </p>

                        <span>Build your word list</span>
                    </div>

                </div>

            </section>


            {/* JLPT Levels */}
            <section className="levels-section">

                <div className="section-heading">
                    <p className="section-kicker">
                        JLPT レベル
                    </p>

                    <h2>
                        Learn at your level
                    </h2>

                    <p>
                        Start from your current Japanese level and
                        gradually work your way up.
                    </p>
                </div>


                <div className="level-cards">

                    {['N5', 'N4', 'N3', 'N2', 'N1'].map((level) => (
                        <Link
                            key={level}
                            to={`/vocabulary?level=${level}`}
                            className="level-card"
                        >
                            <span>{level}</span>

                            <small>
                                JLPT
                            </small>
                        </Link>
                    ))}

                </div>

            </section>


            {/* CTA */}
            <section className="cta-section">

                <div className="cta-content">

                    <div className="cta-mon">
                        学
                    </div>

                    <h2>
                        Start your Japanese learning journey
                    </h2>

                    <p>
                        One word at a time. One step at a time.
                    </p>

                    <Link
                        to={isAuthenticated ? '/vocabulary' : '/login'}
                        className="hero-primary-btn"
                    >
                        {isAuthenticated
                            ? 'Continue Learning'
                            : 'Create Your Account'}
                    </Link>

                </div>

            </section>


            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-mon">
                    ⌘ 菊 ⌘
                </div>

                <p>
                    日本語能力試験対策 · JLPT Study Tool · 一期一会
                </p>

                <p className="footer-small">
                    The road of language is long, yet starts with one step.
                </p>
            </footer>

        </div>
    );
}