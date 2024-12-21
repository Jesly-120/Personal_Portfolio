import React, { useState } from 'react';
import './project.css'; // Optional for styling
import project1 from "../../images/p1.png" 
import project2 from "../../images/p2.png" 
import project3 from "../../images/p3.jpg" 


const projectsData = [
  {
    title: 'Music Shop',
    description: '"A modern and responsive music shop website, offering a seamless browsing experience for instruments and music accessories".',
    technologies: ['HTML','CSS'],
    image: project1
  },
  {
    title: 'Portfolio',
    description: '"A dynamic portfolio website built with ReactJS, showcasing projects and skills with an interactive and responsive design."',
    technologies: ['ReactJS'],
    image: project2
  },
  {
    title: 'Cloning website using kalilinux',
    description: '"A website clone project executed using Kali Linux, demonstrating skills in web penetration testing and ethical hacking techniques."',
    technologies: ['Kali Linux'],
    image: project3
  },
  // Add more projects as needed
];

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };

  return (
    <div className="project-card" onClick={handleClick}>
     
      {isExpanded ? (
        <div className="project-hover">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
        </div>
      ) : (
        <img src={project.image} alt={project.title} className="project-image" />
      )}
    </div>
  );
};

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <br></br>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;