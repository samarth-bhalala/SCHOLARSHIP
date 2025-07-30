import React from "react";
import "../components/AboutUs.css";

export default function About() {
  return (
    <div className="about-root">
      {/* Header */}
      <nav className="about-navbar">
        <div className="about-navbar-left">
          <span className="about-logo">
            <span className="about-logo-icon">🎓</span>
            Scholar
          </span>
          <span className="about-portal">Scholarship Portal</span>
        </div>
        <div className="about-navbar-menu">
          <a href="#home">HOME</a>
          <a href="#" className="active">ABOUT</a>
          <a href="#faqs">FAQs</a>
        </div>
        <div className="about-auth-buttons">
          <button className="about-btn about-btn-outline">Login</button>
          <button className="about-btn about-btn-purple">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            About <span className="hero-highlight">Scholar</span>
          </h1>
          <p className="hero-subtitle">
            Empowering students worldwide to achieve their educational dreams through 
            accessible scholarship opportunities and intelligent matching technology.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-content">
        {/* Mission Section */}
        <section className="about-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Mission</h2>
              <div className="section-icon">🎯</div>
            </div>
            <div className="section-body">
              <p className="section-text">
                At Scholar, we believe that financial barriers should never prevent talented 
                students from pursuing their educational goals. Our mission is to democratize 
                access to scholarship opportunities by creating a comprehensive, intelligent 
                platform that connects students with funding sources that match their unique 
                profiles and aspirations.
              </p>
              <div className="mission-stats">
                <div className="mission-stat">
                  <span className="stat-number">50,000+</span>
                  <span className="stat-label">Students Served</span>
                </div>
                <div className="mission-stat">
                  <span className="stat-number">$100M+</span>
                  <span className="stat-label">Scholarships Awarded</span>
                </div>
                <div className="mission-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Partner Organizations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-section story-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Story</h2>
              <div className="section-icon">📖</div>
            </div>
            <div className="section-body">
              <p className="section-text">
                Scholar was founded in 2020 by a team of educators, technologists, and former 
                scholarship recipients who understood firsthand the challenges students face 
                when searching for financial aid. What started as a simple database has evolved 
                into a sophisticated platform that uses artificial intelligence to match students 
                with relevant opportunities.
              </p>
              <p className="section-text">
                Our founders experienced the frustration of spending countless hours searching 
                through scattered scholarship databases, only to find opportunities that didn't 
                match their profiles. They envisioned a world where this process could be 
                streamlined, personalized, and more successful for everyone involved.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Values</h2>
              <div className="section-icon">⭐</div>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-desc">
                  We strive for excellence in everything we do, from our technology 
                  to our customer service, ensuring the best possible experience for our users.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-desc">
                  We maintain the highest standards of honesty and transparency in all 
                  our interactions with students, partners, and stakeholders.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🌍</div>
                <h3 className="value-title">Accessibility</h3>
                <p className="value-desc">
                  We believe education should be accessible to all, regardless of 
                  background, and work to remove barriers to scholarship opportunities.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-desc">
                  We continuously innovate and improve our platform to better serve 
                  students and make the scholarship search process more effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section team-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Meet Our Team</h2>
              <div className="section-icon">👥</div>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-avatar">👨‍💼</div>
                <h3 className="team-name">David Chen</h3>
                <p className="team-role">CEO & Co-Founder</p>
                <p className="team-bio">
                  Former scholarship recipient with 10+ years in EdTech. 
                  Passionate about democratizing education access.
                </p>
              </div>
              
              <div className="team-card">
                <div className="team-avatar">👩‍💻</div>
                <h3 className="team-name">Sarah Johnson</h3>
                <p className="team-role">CTO & Co-Founder</p>
                <p className="team-bio">
                  AI specialist with expertise in matching algorithms. 
                  Previously at Google and Stanford Research.
                </p>
              </div>
              
              <div className="team-card">
                <div className="team-avatar">👨‍🎓</div>
                <h3 className="team-name">Michael Rodriguez</h3>
                <p className="team-role">Head of Partnerships</p>
                <p className="team-bio">
                  20+ years in higher education and scholarship administration. 
                  Building bridges between students and funders.
                </p>
              </div>
              
              <div className="team-card">
                <div className="team-avatar">👩‍🏫</div>
                <h3 className="team-name">Emily Wang</h3>
                <p className="team-role">Head of Student Success</p>
                <p className="team-bio">
                  Former college counselor dedicated to helping students 
                  navigate their educational journey successfully.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="about-section impact-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Our Impact</h2>
              <div className="section-icon">📈</div>
            </div>
            <div className="impact-content">
              <p className="section-text">
                Since our launch, Scholar has transformed the scholarship landscape by making 
                opportunities more accessible and applications more successful. Our impact 
                extends beyond individual students to entire communities and educational institutions.
              </p>
              <div className="impact-highlights">
                <div className="impact-item">
                  <span className="impact-icon">🏆</span>
                  <div className="impact-text">
                    <h4>Award-Winning Platform</h4>
                    <p>Recognized by EdTech Digest as "Best Student Financial Aid Solution" for two consecutive years.</p>
                  </div>
                </div>
                <div className="impact-item">
                  <span className="impact-icon">📊</span>
                  <div className="impact-text">
                    <h4>Higher Success Rates</h4>
                    <p>Our users achieve 3x higher success rates compared to traditional scholarship search methods.</p>
                  </div>
                </div>
                <div className="impact-item">
                  <span className="impact-icon">🌎</span>
                  <div className="impact-text">
                    <h4>Global Reach</h4>
                    <p>Serving students in over 50 countries with partnerships spanning 6 continents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Scholar. All rights reserved.</p>
      </footer>
    </div>
  );
}