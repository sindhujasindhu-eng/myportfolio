// src/Components/Projects.js
import React from 'react';

const projects = [
  {
    title: "Home Construction Company Website",
    description: "Designed and developed a responsive web platform for a home construction company.",
    techStack: ["React", "Django", "PostgreSQL", "AWS"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Car Spare Parts E-Commerce Platform",
    description: "Developed a user-friendly online platform for browsing and purchasing car spare parts.",
    techStack: ["Python", "Django REST", "React", "Redux"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "Created a responsive personal portfolio website using React to showcase my skills and projects.",
    techStack: ["React", "CSS3", "Framer Motion", "Git"],
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card"
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-inner">
                <div className="project-number">0{index + 1}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.demoLink} 
                    className="link-button demo-link"
                    aria-label="View project demo"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="link-button code-link"
                    aria-label="View project code"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 4rem 2rem;
          background: linear-gradient(45deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #2c3e50;
          position: relative;
          animation: slideUp 0.8s ease;
          padding:30px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }

        .project-card {
          background: white;
          border-radius: 15px;
          padding: 1.5rem;
          transform: translateY(0);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          animation: cardEntrance 0.6s ease-out;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #3498db, #2ecc71);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-number {
          font-size: 2rem;
          font-weight: bold;
          color: rgba(52, 152, 219, 0.1);
          position: absolute;
          right: 1rem;
          top: 1rem;
          transition: all 0.3s ease;
        }

        .project-card:hover .project-number {
          color: rgba(52, 152, 219, 0.2);
          transform: scale(1.1);
        }

        .project-title {
          color: #2c3e50;
          margin-bottom: 1rem;
          font-size: 1.4rem;
          transition: color 0.3s ease;
        }

        .project-description {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-pill {
          background: rgba(52, 152, 219, 0.1);
          color: #3498db;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .link-button {
          padding: 0.6rem 1.2rem;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .demo-link {
          background: #3498db;
          color: white;
        }

        .code-link {
          border: 2px solid #3498db;
          color: #3498db;
          background: transparent;
        }

        .demo-link:hover {
          background: #2980b9;
          transform: translateY(-2px);
        }

        .code-link:hover {
          background: rgba(52, 152, 219, 0.1);
          transform: translateY(-2px);
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-card {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;