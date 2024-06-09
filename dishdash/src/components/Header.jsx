import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <section id="Home">
      <nav>
        <div className="logo">
          <a href="Homepage.html">
            <img src="img/logo-cat222.png" alt="Logo" />
          </a>
        </div>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#Footer">Contact</a></li>
        </ul>
      </nav>
      <div className="main">
        <div className="men_text">
          <h1>Get Fresh<span>Food</span><br />in an Easy Way</h1>
        </div>
        <div className="main_image">
          <img src="img/image1.png" alt="Main" />
        </div>
      </div>
      <p>
        Whether you're a seasoned chef or a culinary novice, our easy-to-follow recipes, expert tips, 
        and engaging content will inspire you to create delicious Korean dishes.
      </p>
      <div className="main_btn">
        <a href="#Menu">Check Menu</a>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </section>
  );
};

export default Header;
