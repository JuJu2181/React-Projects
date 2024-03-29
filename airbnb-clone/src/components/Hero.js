import React from "react";
import HeroImg from "../assets/images/photo-grid.png";

export default function Hero() { 
    return (
        <section className="hero">
            <img src={ HeroImg} alt="Photo Grid" className="hero-img" />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}