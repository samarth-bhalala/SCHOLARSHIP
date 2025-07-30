import React from 'react';
import '../components/AboutUs.css'; // Create this file for About Us styles

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Empowering students through a seamless scholarship management experience.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to simplify scholarship processes for students and institutions by providing a
            transparent and user-friendly platform.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To ensure that no deserving student misses out on education due to financial constraints.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Easy application process</li>
            <li>Secure and reliable system</li>
            <li>Quick processing and feedback</li>
            <li>Supportive team always ready to help</li>
          </ul>
        </div>
      </div>

      <div className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="Team Member" />
            <h4>Nancy</h4>
            <p>Backend Developer</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="Team Member" />
            <h4>Priya</h4>
            <p>Frontend Developer</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="Team Member" />
            <h4>Aryan</h4>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
