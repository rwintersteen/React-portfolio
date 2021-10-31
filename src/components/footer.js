import React from 'react'; 
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="icon-list">
            <a className="faInstagram app-lin social-media-list" href="https://www.instagram.com/rakkelly/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>

            <a className="faLinkedin app-lin social-media-list" href="https://www.linkedin.com/in/rachael-wintersteen-708140197/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>

            <a className="faGithub app-lin social-media-list" href="https://github.com/rwintersteen" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>

        </div>
    )
} 

export default Footer;