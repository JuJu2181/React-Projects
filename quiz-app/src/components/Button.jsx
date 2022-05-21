import React from "react";
import { Link } from "react-router-dom";
function Button(props) {
    return (
        <Link to={props.path} className="btn-link">
            <div className="btn">{props.text}</div>
        </Link>
    );
}

export default Button;
