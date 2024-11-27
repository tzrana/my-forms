import React from 'react';

// Sample data for projects
const projects = [
  {
    id: 1,
    name: "Project One",
    description: "This is a description of the first project. It could be a website or a mobile app.",
    link: "https://example.com/project-one"
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is a description of the second project. A description goes here.",
    link: "https://example.com/project-two"
  },
  {
    id: 3,
    name: "Project Three",
    description: "This is a description of the third project. More details about the project here.",
    link: "https://example.com/project-three"
  },
  {
    id: 4,
    name: "Project Four",
    description: "This is a description of the fourth project. It's another great project.",
    link: "https://example.com/project-four"
  }
];

const Project = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My Projects</h1>
      <ul style={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id} style={styles.projectCard}>
            <h3 style={styles.projectTitle}>{project.name}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f7fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  projectList: {
    listStyleType: 'none',
    padding: '0',
  },
  projectCard: {
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  projectCardHover: {
    transform: 'scale(1.03)',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: '10px',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#718096',
    marginBottom: '15px',
  },
  projectLink: {
    fontSize: '1rem',
    color: '#3182ce',
    textDecoration: 'none',
    fontWeight: '500',
    borderBottom: '1px solid #3182ce',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
  },
  projectLinkHover: {
    color: '#63b3ed',
    borderBottom: '1px solid #63b3ed',
  },
};

export default Project;
