import React from 'react';

import Background from '../components/Background';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import QuizMode from '../components/QuizMode';

export default function Quiz() {
    return (
        <>
            <Background />

            <div id="app">

                <Navbar />

                <Header />

                <main aria-label="JLPT Quiz">

                    <div className="learning-page-intro">
                        <h2>✏️ クイズ · Quiz</h2>

                        <p>
                            Test your Japanese vocabulary knowledge
                            and improve your JLPT preparation.
                        </p>
                    </div>

                    <QuizMode />

                </main>

                {/* Footer */}
                <footer
                    className="site-footer"
                    role="contentinfo"
                >
                    <div
                        className="footer-mon"
                        aria-hidden="true"
                    >
                        ⌘ 菊 ⌘
                    </div>

                    <p className="footer-text">
                        日本語能力試験対策 · JLPT Study Tool · 一期一会
                    </p>

                    <p
                        className="footer-text"
                        style={{
                            marginTop: '6px',
                            fontSize: '11px',
                            opacity: 0.7,
                        }}
                    >
                        語学の道は遠く、されど一歩から ·
                        The road of language is long, yet starts with one step
                    </p>
                </footer>

            </div>
        </>
    );
}