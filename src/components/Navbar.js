import React, { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  // Your original dark mode logic
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // This effect checks window size to switch between mobile and desktop views
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      // Close menu if resizing to desktop
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevents page scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobileView) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isMobileView]);


  // --- ALL STYLES FOR THE MOBILE VIEW ARE DEFINED HERE ---

  const mobileNavbarStyle = {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-end', // Pushes hamburger to the right
    alignItems: 'center',
    position: 'relative',
    zIndex: 1000,
  };

  const hamburgerButtonStyle = {
    zIndex: 1001,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    width: '30px',
    height: '24px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const lineStyle = {
    display: 'block',
    width: '100%',
    height: '3px',
    backgroundColor: darkMode ? '#f1f1f1' : '#333',
    borderRadius: '3px',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  };
  
  // Styles for the lines when the menu is open (to form an 'X')
  const line1Open = { ...lineStyle, transform: 'translateY(10.5px) rotate(45deg)' };
  const line2Open = { ...lineStyle, opacity: 0 };
  const line3Open = { ...lineStyle, transform: 'translateY(-10.5px) rotate(-45deg)' };

  const mobileMenuContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    backgroundColor: darkMode ? 'rgba(18, 18, 18, 0.98)' : 'rgba(255, 255, 255, 0.98)',
    transition: 'transform 0.3s ease-in-out',
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)', // Slides in from the right
  };

  const mobileUlStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '1.5rem',
  };

  const mobileLinkStyle = {
    color: darkMode ? '#f1f1f1' : '#333',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };


  // --- RENDER LOGIC ---

  if (isMobileView) {
    // --- RENDER MOBILE VIEW ---
    return (
      <nav style={mobileNavbarStyle}>
        <button style={hamburgerButtonStyle} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          <span style={isMenuOpen ? line1Open : lineStyle}></span>
          <span style={isMenuOpen ? line2Open : lineStyle}></span>
          <span style={isMenuOpen ? line3Open : lineStyle}></span>
        </button>

        <div style={mobileMenuContainerStyle}>
          <ul style={mobileUlStyle}>
            <li onClick={() => setIsMenuOpen(false)}><a href="#hero" style={mobileLinkStyle}>Home</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#about" style={mobileLinkStyle}>About</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#skills" style={mobileLinkStyle}>Skills</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#projects" style={mobileLinkStyle}>Projects</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#resume" style={mobileLinkStyle}>Resume</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#contact" style={mobileLinkStyle}>Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
    );
  } else {
    // --- RENDER DESKTOP VIEW ---
    // This is your original code. It will use your existing CSS file for styling.
    return (
      <nav className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </nav>
    );
  }
}

export default Navbar;