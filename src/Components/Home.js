// src/Components/Home.js
import React from 'react';
import sinduimage from '../assets/sindu.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content animate-slide-left">
          <h1 className="animate-pop">Sindhuja B. 👩‍💻</h1>
          <h2 className="animate-pop" style={{ animationDelay: '0.2s' }}>Python Developer</h2>
          <p className="animate-pop" style={{ animationDelay: '0.4s' }}>
            Passionate Python developer with expertise in Full Stack Web Development using Django, React, HTML, CSS, JavaScript, and MySQL.
          </p>

          <div className="cta-buttons">
            <Link to="/about" className="cta-button primary animate-hover">
              Go to About
              <span className="button-shine"></span>
            </Link>
            <Link to="/Project" className="cta-button secondary animate-hover">
              View Projects
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-image animate-slide-right">
          <div className="image-wrapper">
            <img src={sinduimage} alt="Sindhuja B." className="profile-image" />
            <div className="image-border"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home {
          padding: 4rem 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .hero {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        h2 {
          font-size: 2rem;
          color: #3498db;
          margin-bottom: 1.5rem;
        }

        p {
          font-size: 1.1rem;
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .cta-button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: inherit;
          text-align: center;
        }

        .primary {
          background: #3498db;
          color: white;
        }

        .primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.3) 50%,
            rgba(255,255,255,0) 100%
          );
          transition: left 0.6s ease;
        }

        .primary:hover .button-shine {
          left: 100%;
        }

        .secondary {
          background: transparent;
          color: #3498db;
          border: 2px solid #3498db;
        }

        .secondary:hover {
          background: rgba(52, 152, 219, 0.1);
          transform: translateY(-3px);
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .secondary:hover .arrow {
          transform: translateX(5px);
        }

        .hero-image {
          flex: 1;
          max-width: 500px;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .image-wrapper {
          position: relative;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          position: relative;
          z-index: 1;
          animation: float 4s ease-in-out infinite;
        }

        .image-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-radius: 50%;
          animation: borderRotate 8s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes borderRotate {
          100% { 
            border-image: linear-gradient(45deg, #3498db, #2ecc71) 1;
            transform: rotate(360deg);
          }
        }

        @keyframes animate-slide-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes animate-slide-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slide-left {
          animation: animate-slide-left 0.8s ease-out;
        }

        .animate-slide-right {
          animation: animate-slide-right 0.8s ease-out;
        }

        .animate-pop {
          animation: animate-pop 0.6s ease-out;
        }

        .animate-hover:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .cta-buttons {
            justify-content: center;
          }

          .hero-image {
            max-width: 300px;
          }

          h1 {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          .image-wrapper {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;