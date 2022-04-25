import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() { 
    return (
    <nav>
        <FontAwesomeIcon icon={faEarthAmerica} className="nav-icon"/>
        <a href="#" className="nav-title"> JuJu's Travel Journal</a>
    </nav>
    );
}