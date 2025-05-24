// src/Components/About.js
import React from 'react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "AngularJS"] },
    { category: "Backend", items: ["Python", "Django", "Django REST Framework"] },
    { category: "Database", items: ["MySQL", "PostgreSQL", "SQLite"] },
    { category: "Tools", items: ["Git", "Docker", "CI/CD Pipelines"] }
  ];

  const interests = [
    "Building RESTful APIs",
    "Data Visualization",
    "Cloud-native Development",
    "Database Optimization",
    "Machine Learning",
    "UI/UX Design"
  ];

  return (
    <section className="about-section">
      <div className="card">
        <h2 className="section-title">About Me</h2>
        <p className="animated-text">
          I am a passionate Python Developer with expertise in Full Stack Web Development, 
          leveraging technologies like Django, React, and modern web stacks. With a strong 
          foundation in mathematics from my M.Sc at NGM College and practical experience 
          through my internship at Appin Technology, I bring a unique blend of analytical 
          thinking and technical expertise to create efficient web solutions.
        </p>

        <div className="content-group">
          <h3 className="subsection-title">Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={skill.category}
                className="skill-category animate-pop"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4>{skill.category}</h4>
                <div className="skills-list">
                  {skill.items.map((item, i) => (
                    <span 
                      key={item}
                      className="skill-item"
                      style={{ animationDelay: `${i * 0.1 + index * 0.2}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-group">
          <h3 className="subsection-title">Interests</h3>
          <div className="interests-container">
            {interests.map((interest, index) => (
              <div 
                key={interest}
                className="interest-item animate-pop"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>

        <div className="content-group">
          <h3 className="subsection-title">Education</h3>
          <p className="education-item animate-pop">
            M.Sc in Mathematics - NGM College (2019-2021)
          </p>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }

        .card {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          max-width: 800px;
          margin: 0 auto;
          animation: fadeIn 1s ease-out;
        }

        .section-title {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2.5em;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background: #3498db;
          margin: 0.5rem auto;
          transition: width 0.3s ease;
        }

        .section-title:hover::after {
          width: 120px;
        }

        .subsection-title {
          color: #34495e;
          margin: 2rem 0 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #ecf0f1;
          transition: all 0.3s ease;
        }

        .subsection-title:hover {
          color: #3498db;
          border-color: #3498db;
        }

        .animated-text {
          line-height: 1.8;
          color: #7f8c8d;
          margin-bottom: 2rem;
          animation: slideUp 0.8s ease;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .skill-category {
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
        }

        .skill-category h4 {
          color: #3498db;
          margin-bottom: 0.5rem;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-item {
          background: white;
          color: #2c3e50;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: #3498db;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        }

        .interests-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .interest-item {
          background: rgba(52, 152, 219, 0.1);
          color: #3498db;
          padding: 0.5rem 1.2rem;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .interest-item:hover {
          background: #3498db;
          color: white;
          transform: translateY(-3px);
        }

        .education-item {
          font-weight: 500;
          color: #2c3e50;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-pop {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-pop {
          animation: animate-pop 0.6s ease-out forwards;
        }

        @media (max-width: 768px) {
          .card {
            padding: 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .subsection-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;