import React from "react"
import ReactLogo from "../images/logo.png"

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img src={ ReactLogo } className="nav--logo_icon" alt="React logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}