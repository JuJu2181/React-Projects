import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Tile(props) { 
    console.log(props);
    return (
        <div className="tile">
            <img src={ props.item.imageUrl} alt="tile image" className="tile-img" />
            <section className="tile-content">
                <div className="tile-header">
                    <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                    <span className="location-name">{ props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="view-btn">View on Google Maps</a>
                </div>
                <h1 className="tile-title">{ props.item.title}</h1>
                <h4 className="tile-date">{props.item.startDate} - { props.item.endDate}</h4>
                <p className="tile-desc">{ props.item.description}</p>
            </section>
        </div>
    );
}

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"