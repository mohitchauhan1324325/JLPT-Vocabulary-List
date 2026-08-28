import React from 'react';

import Background from '../components/Background';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import LevelNav from '../components/LevelNav';
import FlashcardMode from '../components/FlashcardMode';

export default function Flashcards() {
    return (
        <>
            <Background />

            <div id="app">

                <Navbar />

                <Header />

                <SearchBar />

                <LevelNav />

                <main aria-label="JLPT Flashcards">

                    <div className="learning-page-intro">
                        <h2>🃏 フラッシュカード · Flashcards</h2>

                        <p>
                            Review Japanese vocabulary and strengthen
                            your memory with flashcards.
                        </p>
                    </div>

                    <FlashcardMode />

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