import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileText, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import resume  from "../assets/anish_shilpakar_resume.pdf"

export default function Body() { 
    return (
        <div className="card-body">
            <h2 className="name"> Anish Shilpakar</h2>
            <span className="title">Data Engineer</span>
            <a href="https://twitter.com/anish_shilpakar" className="username">@anish_shilpakar</a>
            <div className="btn-container">

                    <a href="mailto:anishshilpakar8@gmail.com" className="btn email-btn">
                    <FontAwesomeIcon icon={ faEnvelope}className="email-icon"/>
                    Email
                    </a>
                <a href={ resume } download="anish_shilpakar_resume" className="btn linked-btn">
                    <FontAwesomeIcon icon={faFileText} className="resume-icon"/>
                        Resume
                    </a>
            </div>
            <div className="about">
                <h2 className="content-title"> About Me</h2>
                <p className="content-desc">
                I am a passionate Computer Engineer from Bhaktapur, Nepal, with over three years of experience in Data and AI. As an AWS Community Builder and Certified Solutions Architect, I design scalable cloud-based data solutions using AWS and Azure, leveraging Python, SQL, and Kubernetes for intelligent, data-driven innovation.
                </p>
            </div>
            <div className="skill">
                <h2 className="content-title">Skills</h2>
                <p className="content-desc">
                Skilled in Python (ML/DL), AWS, SQL, Docker, Kubernetes and Airflow. Experienced in React, Node, and PHP. Proficient in English, Nepali, Newari, and Hindi.
                </p>
            </div>
        </div>
    );
}
