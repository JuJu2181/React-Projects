import React from "react";
import AirBNBLogo from "../assets/images/airbnb-logo.png";

export default function Navbar() { 
    return (
        <nav>
            <img src={ AirBNBLogo} alt="Air BNB Logo" className="nav-logo"/>
        </nav>
    );
}