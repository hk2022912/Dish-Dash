import React from 'react';

const Menu = () => {
  return (
    <div className="menu" id="Menu">
      <h1><span>Menu</span></h1>
      <div className="menu_box">
        <div className="menu_card">
          <div className="menu_image">
            <img src="img/tteokbokki.jfif" alt="Tteokbokki" />
          </div>
          <div className="menu_info">
            <h2>Tteokbokki</h2>
            <p>
              Spicy stir-fried rice cakes, often served with fish cakes and a thick gochujang-based sauce, creating a popular street food snack in Korea.
            </p>
            <a href="Teokkboki.html" className="menu_btn">Check Recipes</a>
          </div>
        </div> 
        <div className="menu_card">
          <div className="menu_image">
            <img src="img/kimchi-jjigae-stew.webp" alt="Kimchi-jjigae" />
          </div>
          <div className="menu_info">
            <h2>Kimchi-jjigae</h2>
            <p>
              A beloved Korean stew made with kimchi, pork, tofu, and a flavorful anchovy stock, known for its hearty, spicy, and savory taste.
            </p>
            <a href="Kimchi Stew.html" className="menu_btn">Check Recipes</a>
          </div>
        </div>
        <div className="menu_card">
          <div className="menu_image">
            <img src="img/kimchi.jpg" alt="Kimchi" />
          </div>
          <div className="menu_info">
            <h2>Kimchi</h2>
            <p>
              A traditional Korean side dish made from fermented vegetables) seasoned with garlic, ginger, and red pepper flakes, resulting in a tangy and spicy flavor.
            </p>
            <a href="Kimchi.html" className="menu_btn">Check Recipes</a>
          </div>
        </div> 
        <div className="menu_card">
          <div className="menu_image">
            <img src="img/bibimbap.jfif" alt="Bibimbap" />
          </div>
          <div className="menu_info">
            <h2>Bibimbap</h2>
            <p>
              A Colorful Korean rice dish with veggies, marinated meat, and spicy gochujang sauce, often served in a sizzling stone bowl.
            </p>
            <a href="Bibimbap.html" className="menu_btn">Check Recipes</a>
          </div>
        </div> 
      </div> 
    </div>
  );
};

export default Menu;
