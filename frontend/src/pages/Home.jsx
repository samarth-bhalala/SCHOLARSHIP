import React from "react";
import { Link } from "react-router-dom";
import "../components/Home.css"; // Update with your styling path

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Header */}
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="fw-bold fs-4 text-primary me-2">🎓 Scholar</span>
            <span className="text-muted fs-6">Scholarship Portal</span>
          </div>

          <div className="d-flex align-items-center gap-4">
            <Link className="text-dark text-decoration-none" to="/">Home</Link>
            <Link className="text-dark text-decoration-none" to="/AboutUs">About Us</Link>
            <Link className="text-dark text-decoration-none" to="/faqs">FAQs</Link>
            <Link className="text-dark text-decoration-none" to="/register">Register Institute</Link>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Link to="/login" className="btn btn-outline-primary">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container text-center py-5">
        <h1 className="display-5 fw-bold mb-3">
          Discover Your Path to <span className="text-primary">Educational Excellence</span>
        </h1>
        <p className="lead mb-4 text-muted">
          Connect with thousands of scholarship opportunities tailored to your profile.
          Start your journey towards achieving your academic dreams today.
        </p>
        <div className="d-flex justify-content-center gap-3 mb-5">
          <button className="btn btn-lg btn-primary">🚀 Get Started</button>
          <button className="btn btn-lg btn-outline-primary">📖 Learn More</button>
        </div>

        {/* Stats */}
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <h4 className="fw-bold">10,000+</h4>
            <p className="text-muted">Scholarships Available</p>
          </div>
          <div className="col-md-4">
            <h4 className="fw-bold">5,000+</h4>
            <p className="text-muted">Students Helped</p>
          </div>
          <div className="col-md-4">
            <h4 className="fw-bold">$50M+</h4>
            <p className="text-muted">Awarded in Scholarships</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-3">
        <p className="mb-0 text-muted">© {new Date().getFullYear()} Scholar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

    
