import React from "react";
import "../components/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-root">
      {/* Header */}
      <nav className="home-navbar">
        <div className="home-navbar-left">
          <span className="home-logo">
            <span className="home-logo-icon">🎓</span>
            Scholar
          </span>
          <span className="home-portal">Scholarship Portal</span>
        </div>
        <div className="home-navbar-menu">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="home-auth-buttons">
          <button className="home-btn home-btn-outline">Login</button>
          <button className="home-btn home-btn-purple">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Your Path to 
            <span className="hero-highlight"> Educational Excellence</span>
          </h1>
          <p className="hero-subtitle">
            Connect with thousands of scholarship opportunities tailored to your profile. 
            Start your journey towards achieving your academic dreams today.
          </p>
          <div className="hero-actions">
            <button className="home-btn home-btn-purple hero-btn-large">
              🚀 Get Started
            </button>
            <button className="home-btn home-btn-outline hero-btn-large">
              📖 Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Scholarships Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Students Helped</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$50M+</span>
              <span className="stat-label">Awarded in Scholarships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="features-container">
          <h2 className="features-title">Why Choose Scholar?</h2>
          <p className="features-subtitle">
            We make finding and applying for scholarships simple, efficient, and successful.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Smart Matching</h3>
              <p className="feature-desc">
                Our AI-powered system matches you with scholarships that fit your profile, 
                increasing your chances of success.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3 className="feature-title">Easy Applications</h3>
              <p className="feature-desc">
                Streamlined application process with guided steps and document management 
                to make applying hassle-free.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Track Progress</h3>
              <p className="feature-desc">
                Monitor your applications, deadlines, and success rates all in one 
                comprehensive dashboard.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Expert Support</h3>
              <p className="feature-desc">
                Get guidance from scholarship experts and successful students to 
                maximize your application potential.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3 className="feature-title">Real-time Alerts</h3>
              <p className="feature-desc">
                Never miss a deadline with our intelligent notification system that 
                keeps you informed of new opportunities.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Global Opportunities</h3>
              <p className="feature-desc">
                Access scholarships from universities and organizations worldwide, 
                expanding your educational horizons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of students who have found their perfect scholarship match.
          </p>
          <div className="cta-actions">
            <button className="home-btn home-btn-purple cta-btn-large">
              Create Free Account
            </button>
            <button className="home-btn home-btn-outline cta-btn-large">
              Browse Scholarships
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Scholar. All rights reserved.</p>
      </footer>
    </div>
  );
}