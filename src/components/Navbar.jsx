import { useState, useEffect } from 'react';
import appLogo from '../assets/app-logo2.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#" className="navbar-logo" style={{ padding: '0' }}>
        <img src={appLogo} alt="Mingley" style={{ padding: '0px'}} />
      </a>

      <button
        className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={() => setMenuOpen(false)}>Top Features</a>
        <a href="#screens" onClick={() => setMenuOpen(false)}>Awesome Screens</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
        <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
      </div>
    </nav>
  );
}
