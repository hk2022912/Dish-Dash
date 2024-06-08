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
          <h1><span>About</span> the page</h1>
          <h3>Annyeong!</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ratione reiciendis officiis cum blanditiis veniam quae, libero ipsam amet laborum error, nulla similique ullam praesentium quas, earum consequuntur voluptatum voluptate. Nullam vel turpis eu neque viverra feugiat sit amet ac magna.
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
