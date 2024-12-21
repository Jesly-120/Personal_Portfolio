import React from 'react';
import gmail from "../../images/gmail.png";
import link from "../../images/link.png";
import git from "../../images/git.png";
import './footer.css';

const Footer = () => {
  return (
    <footer className='foot'>
      <div className='container'>
        <h3>Contact Me</h3>
        <div className='container_icon'>
          <div className='mail'>
            <a href="mailto:your-email@example.com">
              <img src={gmail} alt='Gmail Icon' />
            </a>
          </div>
          <div className='din'>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src={link} alt='LinkedIn Icon' />
            </a>
          </div>
          <div className='hub'>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <img src={git} alt='GitHub Icon' />
            </a>
          </div>
        </div>
      </div>
      <div className='copy'>
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
