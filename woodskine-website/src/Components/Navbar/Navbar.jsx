import React, { useState, useEffect } from 'react';
import './Navbar.css';

const announcements = [
  "Free shipping in Switzerland",
  "Invoice payment, Twint or credit card",
  "Free returns within 30 days"
];

function Navbar() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Loop announcements every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-main-wrapper">
      {/* 1. Dynamic Announcement Ticker Bar */}
      <div className="announcement-bar">
        <button className="announcement-arrow left">←</button>
        <div className="announcement-text-container">
          {announcements.map((text, index) => (
            index === currentTextIndex && (
              <span key={index} className="announcement-msg">
                {text}
              </span>
            )
          ))}
        </div>
        <button className="announcement-arrow right">→</button>
      </div>

      {/* 2. Primary Navigation Bar Area */}
      <nav className="navbar-container">
        {/* Left Side: Navigation Links Menu */}
        <div className="nav-links-left">
          <a href="#shop" className="nav-item">Shop</a>
          <a href="#handbags" className="nav-item">Handbags</a>
          <a href="#about" className="nav-item">About</a>
        </div>

        {/* Center: Brand Monogram Identity Logo */}
        <div className="nav-brand-logo">
          WOODSKINE
        </div>

        {/* Right Side: Interactive Utility Action Icon Links */}
        <div className="nav-utilities-right">
          {/* Language Selector Node Dropdown Toggle */}
          <div className="nav-lang-selector">
            <span>English</span>
            <span className="dropdown-caret">▾</span>
          </div>

          {/* Action Icons Panel */}
          <div className="utility-icons-wrapper">
            <button className="util-btn mail-icon" aria-label="Newsletter signup">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </button>
            <button className="util-btn search-icon" aria-label="Search items">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </button>
            <button className="util-btn user-icon" aria-label="User account dashboard login">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            <button className="util-btn bag-icon" aria-label="Shopping checkout cart review">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>
              <span className="cart-badge-counter">0</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;