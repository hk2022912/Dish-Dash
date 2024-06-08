import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <a href="Homepage.html">
                    <img src="img/logo-cat222.png" alt="Logo image" />
                </a>
            </div>

            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Footer">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Header;
