// src/Components/Contact.js
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title animate-slide-up">Get in Touch</h2>
        
        <div className="contact-grid">
          {/* Contact Form Section */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                id="name" 
                required 
                className="form-input"
                placeholder=" "
              />
              <label htmlFor="name" className="form-label">Your Name</label>
            </div>

            <div className="input-group">
              <input 
                type="email" 
                id="email" 
                required 
                className="form-input"
                placeholder=" "
              />
              <label htmlFor="email" className="form-label">Email Address</label>
            </div>

            <div className="input-group">
              <input 
                type="text" 
                id="subject" 
                required 
                className="form-input"
                placeholder=" "
              />
              <label htmlFor="subject" className="form-label">Subject</label>
            </div>

            <div className="input-group">
              <textarea 
                id="message" 
                required 
                className="form-input textarea"
                placeholder=" "
                rows="4"
              ></textarea>
              <label htmlFor="message" className="form-label">Your Message</label>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <span className="button-overlay"></span>
            </button>
          </form>

          {/* Contact Information Section */}
          <div className="contact-info">
            <div className="info-card animate-slide-right">
              <div className="info-item">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:sindhujasindhu2001@gmail.com" className="contact-link">
                    sindhujasindhu2001@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+916383305446" className="contact-link">
                    +91 63833 05446
                  </a>
                </div>
              </div>

              <div className="info-item">
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <h3>Location</h3>
                  <p className="contact-text">Pollachi, Tamil Nadu, India</p>
                  <div className="map-container">
                    <iframe
                      title="Google Maps location of Pollachi, Tamil Nadu"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15683.804996262405!2d76.99445924590646!3d10.660892131693277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba839d117dea505%3A0xb3fd96d9c8642659!2sPollachi%2C%20Tamil%20Nadu%20642001!5e0!3m2!1sen!2sin!4v1748061217787!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{ border: "0", borderRadius: "15px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="social-links animate-slide-left">
              <a 
                href="https://linkedin.com/in/sindhuja-b"
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link linkedin"
              >
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://github.com/sindhuja-b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          color: #2c3e50;
          opacity: 0;
          animation: slideUp 0.8s ease forwards;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-form {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          animation: fadeIn 0.6s ease-out;
        }

        .input-group {
          position: relative;
          margin-bottom: 2rem;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        .form-label {
          position: absolute;
          left: 1rem;
          top: 1rem;
          padding: 0 0.25rem;
          background: white;
          color: #7f8c8d;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .form-input:focus ~ .form-label,
        .form-input:not(:placeholder-shown) ~ .form-label {
          top: -0.6rem;
          left: 0.8rem;
          font-size: 0.8rem;
          color: #3498db;
        }

        .textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          background: #3498db;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.2);
          transition: left 0.4s ease;
        }

        .submit-button:hover .button-overlay {
          left: 0;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .icon {
          width: 24px;
          height: 24px;
          fill: #3498db;
          flex-shrink: 0;
        }

        .contact-link, .contact-text {
          color: #2c3e50;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #3498db;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          transition: transform 0.3s ease;
        }

        .social-link.linkedin {
          background: #0077b5;
        }

        .social-link.github {
          background: #333;
        }

        .social-icon {
          width: 24px;
          height: 24px;
          fill: white;
        }

        .social-link:hover {
          transform: translateX(10px);
        }

        .map-container {
          margin-top: 2rem;
          padding: 1rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          animation: fadeIn 1s ease-out;
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

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-right {
          animation: slideRight 0.6s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideLeft 0.6s ease-out forwards;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-form {
            margin-bottom: 2rem;
          }
          
          .map-container iframe {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;