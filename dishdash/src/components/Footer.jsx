import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer>

  

    <div className="footer_main" id="Footer">
      
      <div ckassName="footer_tag">
        <h2>Quick Link</h2>
        <p>Home</p>
        <p>About</p>
        <p>Menu</p>
        <p>Gallary</p>
        <p>Order</p>
      </div>
      
      <div className="footer_tag">
        <h2>Contact</h2>
        <p>+63 905 098 1370</p>
        <p>+63 975 626 9604</p>
        <p>presciouspajo19@gmail.com</p>
        <p>butlay.hazelkate@gmail.com</p>
      </div>

      <div className="footer_tag">
        <h2>Follows</h2>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>

    <p className="end">Design by <span><i className="fa-solid fa-face-grin"></i> Dish Dash Web Developer Team.</span></p>
  </footer>
);

export default Footer;
