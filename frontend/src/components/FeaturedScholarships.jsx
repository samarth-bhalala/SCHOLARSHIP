import React from "react";
import "./FeaturedScholarships.css";

export default function FeaturedScholarships() {
  return (
    <section className="dashboard-featured">
      <h2 className="featured-title">
        <span role="img" aria-label="award">🏆</span> Featured Scholarships
      </h2>
      <p className="featured-desc">Handpicked opportunities that match your profile</p>
      <div className="featured-scholarships-list">
        {/* Scholarship Card 1 */}
        <div className="scholarship-card">
          <div className="scholarship-header">
            <span className="scholarship-title">Excellence in STEM Scholarship</span>
            <span className="scholarship-badge">New</span>
          </div>
          <div className="scholarship-desc">
            Supporting outstanding students pursuing degrees in Science, Technology, Engineering, and Mathematics.
          </div>
          <div className="scholarship-info">
            <span className="scholarship-money">$ 5,000</span>
            <span>
              <span className="scholarship-icon">📅</span> April 15, 2024
            </span>
            <span>
              <span className="scholarship-icon">👥</span> 156 applicants
            </span>
            <span>
              <span className="scholarship-icon">📍</span> United States
            </span>
            <span className="scholarship-warning">
              <span className="scholarship-icon">⏰</span> 3 days left
            </span>
          </div>
          <div className="scholarship-tags">
            <span>STEM</span>
            <span>Undergraduate</span>
            <span>Merit-based</span>
          </div>
          <button className="scholarship-apply">Apply Now</button>
        </div>
        {/* Scholarship Card 2 */}
        <div className="scholarship-card">
          <div className="scholarship-header">
            <span className="scholarship-title">Future Leaders Grant</span>
            <span className="scholarship-badge">New</span>
          </div>
          <div className="scholarship-desc">
            Empowering the next generation of leaders across all disciplines and backgrounds.
          </div>
          <div className="scholarship-info">
            <span className="scholarship-money">$ 3,500</span>
            <span>
              <span className="scholarship-icon">📅</span> May 1, 2024
            </span>
            <span>
              <span className="scholarship-icon">👥</span> 89 applicants
            </span>
            <span>
              <span className="scholarship-icon">📍</span> Global
            </span>
            <span className="scholarship-warning">
              <span className="scholarship-icon">⏰</span> 3 days left
            </span>
          </div>
          <div className="scholarship-tags">
            <span>Leadership</span>
            <span>Global</span>
            <span>Need-based</span>
          </div>
          <button className="scholarship-apply">Apply Now</button>
        </div>
        {/* Scholarship Card 3 */}
        <div className="scholarship-card">
          <div className="scholarship-header">
            <span className="scholarship-title">Innovation in Technology Award</span>
            <span className="scholarship-badge">New</span>
          </div>
          <div className="scholarship-desc">
            Recognizing innovative thinking and breakthrough ideas in technology and computer science.
          </div>
          <div className="scholarship-info">
            <span className="scholarship-money">$ 7,500</span>
            <span>
              <span className="scholarship-icon">📅</span> March 30, 2024
            </span>
            <span>
              <span className="scholarship-icon">👥</span> 203 applicants
            </span>
            <span>
              <span className="scholarship-icon">📍</span> North America
            </span>
            <span className="scholarship-warning">
              <span className="scholarship-icon">⏰</span> 3 days left
            </span>
          </div>
          <div className="scholarship-tags">
            <span>Technology</span>
            <span>Innovation</span>
            <span>Graduate</span>
          </div>
          <button className="scholarship-apply">Apply Now</button>
        </div>
      </div>
    </section>
  );
}
