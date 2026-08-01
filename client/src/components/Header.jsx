import React from 'react';

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-mon">
        <div className="mon-circle" title="Family Crest">語</div>
        <h1 className="site-title">
          JLPT 語彙リスト
          <span className="subtitle-jp">日本語能力試験・単語帳</span>
        </h1>
        <div className="mon-circle" title="Family Crest">彙</div>
      </div>

      <div className="header-divider">
        <div className="diamond"></div>
      </div>

      <p className="site-desc">
        Japanese Language Proficiency Test · Vocabulary Master List
      </p>
    </header>
  );
}
