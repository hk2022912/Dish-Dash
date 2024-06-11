import React, { useEffect } from 'react';

const Intro = () => {
  useEffect(() => {
    let i = 0;
    const images = [
      'img/image1.png',
      'img/image2.png',
      'img/image3.png',
      'img/image4.png',
      'img/image5.png'
    ];
    const time = 2000;

    const changeImg = () => {
      document.slide.src = images[i];

      if (i < images.length - 1) {
        i++;
      } else {
        i = 0;
      }

      setTimeout(changeImg, time);
    };

    changeImg();
  }, []);

  return (
    <div className="intro" id="Intro">
      <div className="intro_main">
        <div className="intro_text">
          <h1><span>Explore</span>Beyond Tradition!</h1>
          <h3>신맛! Refreshing taste!</h3>
          <p>
          Join us on a gastronomic journey that celebrates the richness and diversity of Korean cuisine. Let your taste buds wander and your senses awaken as you uncover the vibrant tapestry of flavors that Korea has to offer!
          </p>
        </div>
        <div className="Slideshow">
          <div className="slide">
            <img name="slide" width="630" height="570" alt="Slideshow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
