// File: frontend/src/pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects');
            const data = await response.json();
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
        }
    };

    return (
        <div className="projects-page">
            <h1>Our Projects</h1>
            <div className="projects-grid">
                {loading ? (
                    <div>Loading projects...</div>
                ) : (
                    projects.map(project => (
                        <ProjectCard key={project._id} project={project} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Projects;
