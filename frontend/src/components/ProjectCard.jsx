// File: frontend/src/components/ProjectCard.jsx
import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-status">
                Status: {project.status}
            </div>
            <div className="project-members">
                Members: {project.members.length}
            </div>
        </div>
    );
};

export default ProjectCard;
