import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
    return (
        <div className="team">
            <h1>Our<span>Team</span></h1>

            <div className="team_box">
                <div className="profile">
                    <img src="image/chef1.png" alt="Chef 1" />

                    <div className="info">
                        <h2 className="name">Prescious Pajo</h2>
                        <p className="bio">Web Developer</p>

                        <div className="team_icon">
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
                </div>

                <div className="profile">
                    <img src="image/chef2.png" alt="Chef 2" />

                    <div className="info">
                        <h2 className="name">Hazel Kate Butlay</h2>
                        <p className="bio">Web Developer</p>

                        <div className="team_icon">
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
                </div>
            </div>
        </div>
    );
}

export default Team;
