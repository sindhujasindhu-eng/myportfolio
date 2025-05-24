// src/Components/Blog.js
import React from 'react';

const Blog = () => {
  const upcomingPosts = [
    {
      title: "Mastering Django ORM: Advanced Techniques",
      date: "September 2023",
      excerpt: "Exploring complex query optimizations and database performance tuning in Django...",
      tags: ["Django", "Python", "Database"],
      readTime: "8 min read"
    },
    {
      title: "React Hooks Deep Dive",
      date: "October 2023",
      excerpt: "Understanding the nuances of useEffect and custom hook patterns...",
      tags: ["React", "JavaScript", "Frontend"],
      readTime: "6 min read"
    },
    {
      title: "Building Scalable CSS Architecture",
      date: "November 2023",
      excerpt: "Strategies for maintaining large-scale CSS codebases with modern methodologies...",
      tags: ["CSS", "Architecture", "BEM"],
      readTime: "10 min read"
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="section-title animate-slide-up">From The Blog</h2>
        
        <div className="posts-grid">
          {upcomingPosts.map((post, index) => (
            <article 
              className="post-card"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-content">
                <div className="post-header">
                  <span className="post-date">{post.date}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-tags">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="post-cta">
                  <span className="cta-text">Read More</span>
                  <div className="cta-underline"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="coming-soon">
          <div className="pulse-container">
            <div className="pulse-dot"></div>
            <span className="pulse-text">More Articles Coming Soon</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          padding: 6rem 2rem;
          background: linear-gradient(45deg, #fafafa 0%, #f0f4f8 100%);
          position: relative;
          overflow: hidden;
        }

        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          color: #2c3e50;
          opacity: 0;
          animation: slideUp 0.8s ease forwards;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .post-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          transform: translateY(0);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
          opacity: 0;
          animation: cardEntrance 0.6s ease-out forwards;
          position: relative;
          overflow: hidden;
        }

        .post-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, rgba(52, 152, 219, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .post-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .post-card:hover::before {
          opacity: 1;
        }

        .post-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.2rem;
          font-size: 0.9rem;
          color: #7f8c8d;
        }

        .post-title {
          color: #2c3e50;
          margin-bottom: 1rem;
          font-size: 1.4rem;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .post-excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .post-tags {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: rgba(52, 152, 219, 0.1);
          color: #3498db;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .tag:hover {
          background: #3498db;
          color: white;
          transform: scale(1.05);
        }

        .post-cta {
          display: inline-flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
        }

        .cta-text {
          color: #3498db;
          font-weight: 500;
          transition: transform 0.3s ease;
        }

        .cta-underline {
          height: 2px;
          width: 0%;
          background: #3498db;
          transition: all 0.3s ease;
        }

        .post-cta:hover .cta-text {
          transform: translateX(5px);
        }

        .post-cta:hover .cta-underline {
          width: 100%;
        }

        .coming-soon {
          text-align: center;
          margin-top: 4rem;
        }

        .pulse-container {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          border-radius: 30px;
          background: rgba(52, 152, 219, 0.1);
          position: relative;
        }

        .pulse-dot {
          width: 12px;
          height: 12px;
          background: #2ecc71;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .pulse-text {
          color: #2c3e50;
          font-weight: 500;
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

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(46, 204, 113, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
          }
        }

        @media (max-width: 768px) {
          .posts-grid {
            grid-template-columns: 1fr;
          }
          
          .post-card {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;