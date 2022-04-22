import React from "react";

export default function Body() { 
    return (
        <div className="card-body">
            <h2 className="name"> Anish Shilpakar</h2>
            <span className="title">Software Engineer</span>
            <p className="username"> @anish_shilpakar</p>
            <div className="btn-container">
                <button className="btn email-btn">
                    <i className="fa-solid fa-envelope"></i> Email</button>
                <button className="btn linked-btn">LinkedIn</button>
            </div>
        </div>
    );
}
