import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import CardImage  from "../assets/images/img1.jpg"

export default function Card(props) { 
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "sold out";
    } else if (props.item.location === "Online") { 
        badgeText = "online";
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{ badgeText}</div>}
            {/* <img src={require('../assets/images/img1.jpg')} className="card-img" /> */}
            <img src={require(`../assets/images/${props.item.coverImg}`)} className="card-img" />
            <div className="card-stats">
                <FontAwesomeIcon icon={faStar} className="card-star" />
                <span>{ props.item.stats.rating}</span>
                <span className="gray">({ props.item.stats.reviewCount}) .</span>
                <span className="gray">{ props.item.location}</span>
            </div>
            <p>{ props.item.title}</p>
            <p><span className="bold">From ${ props.item.price}</span> /person</p>
        </div>
    );
}