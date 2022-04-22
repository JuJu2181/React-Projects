import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faHashnode, faInstagramSquare, faLinkedin, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

export default function Foot() { 
    return (
        <div className="card-footer">
            <a href="https://www.linkedin.com/in/anish-shilpakar13/">            <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/></a>
            <a href="https://github.com/JuJu2181">       <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" /></a>
            <a href="https://anish-shilpakar.com.np/">
                <FontAwesomeIcon icon={ faHashnode} className="footer-icon"/>
            </a>
            <a href="https://twitter.com/anish_shilpakar"><FontAwesomeIcon icon={faTwitterSquare} className="footer-icon"/></a>
            <a href="https://www.facebook.com/anish.shilpakar.JuJu13/">            <FontAwesomeIcon icon={faFacebookSquare} className="footer-icon" /></a>
        </div>
    );
}