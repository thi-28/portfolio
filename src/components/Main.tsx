import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://prathi-personal-img.s3.us-east-1.amazonaws.com/headshot1.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/thi-28" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prathiksha-patil/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Prathiksha Patil</h1>
          <p>AI/ML Engineer | NLP & Responsible AI Specialist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/thi-28" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/prathiksha-patil/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;