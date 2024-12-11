import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>Vehicle Detection and Tracking System</h3>
          <p>
            Developed a system for accurate vehicle detection and tracking to enhance traffic management and urban planning.
          </p>
        </div>
        <div className="project-card">
          <h3>Blood Bank Management System</h3>
          <p>
            Created a web-based system to track blood inventory in real-time, ensuring critical supplies are available when needed.
          </p>
        </div>
        <div className="project-card">
          <h3>TeleVaidhya</h3>
          <p>
            Designed a healthcare platform that predicts diseases and recommends medications based on user input.
          </p>
        </div>
        <div className="project-card">
          <h3>CureNest</h3>
          <p>
            Developed a web-based platform for remote healthcare, suggesting home remedies based on user-reported symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
