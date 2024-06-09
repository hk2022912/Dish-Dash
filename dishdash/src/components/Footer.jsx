import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGrin } from '@fortawesome/free-solid-svg-icons'; // Import faGrin from the correct package

const Footer = () => {
  return (
    <footer>
      <div className="footer_main" id="Footer"> 
        <div className="footer_tag">
          <h2>Quick Link</h2>
          <a href="#Home"><p>Home</p></a>
          <a href="#About"><p>About</p></a>
          <a href="#Menu"><p>Menu</p></a>
          </div>

        <div className="footer_tag">
          <h2>Contact</h2>
          <p>+63 000 000 0000</p>
          <p>+63 975 626 9604</p>
          <p>Dishdash@gmail.com</p>
        </div>
        <div className="footer_tag">
          <h2>Follows</h2>

          <span><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
          </span>
          <span><a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          </span>
          <span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          </span>
          
        </div>
      </div>
      <p className="end">Design by <span><FontAwesomeIcon icon={faGrin} /> Dish Dash Web Developer Team.</span> </p>
    </footer>
  );
};

export default Footer;
