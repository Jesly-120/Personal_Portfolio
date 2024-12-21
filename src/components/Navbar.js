import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import ContactForm from '../components/ContactForm/ContactForm';

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);  // Close menu when a link is clicked
  };

  return (
    <div className='header'>
      <div className='header_left'>
        <h1>Portfo<span>lio</span></h1>
      </div>

      <div className={`header_right ${menuOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
          <h4>Home</h4>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
          <h4>About</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
          <h4>Projects</h4>
        </Link>
        <Link to="foot" smooth={true} duration={500} onClick={closeMenu}>
          <h4>Contact</h4>
        </Link>

        <h4 className='header__rightButton' onClick={() => { setModalIsOpen(true); closeMenu(); }}>
          Contact Me
        </h4>
      </div>

      {/* Hamburger icon for mobile/tablet view */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>

      <ContactForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default Navbar;
