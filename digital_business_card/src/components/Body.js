import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileText, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import resume  from "../assets/anish_shilpakar_resume.pdf"

export default function Body() { 
    return (
        <div className="card-body">
            <h2 className="name"> Anish Shilpakar</h2>
            <span className="title">Software Engineer</span>
            <a href="https://twitter.com/anish_shilpakar" className="username">@anish_shilpakar</a>
            <div className="btn-container">

                    <a href="mailto:anishshilpakar8@gmail.com" className="btn email-btn">
                    <FontAwesomeIcon icon={ faEnvelope}/>
                    Email
                    </a>
                <a href={ resume } download="anish_shilpakar_resume" className="btn linked-btn">
                    <FontAwesomeIcon icon={faFileText}/>
                        Resume
                    </a>
            </div>
            <div className="about">
                <h2 className="content-title"> About</h2>
                <p className="content-desc">I am an enthusiastic learner highly interested in full stack web development and Artificial intelligence. I am comfortable to work in teams and like working on projects.</p>
            </div>
            <div className="skill">
                <h2 className="content-title">Skills</h2>
                <p className="content-desc">Good programming knowledge of Python, JS, PHP, GIT, C, C++, HTML, CSS. Other Skills like time management, quick learning, communication skills, research skills.</p>
            </div>
        </div>
    );
}
