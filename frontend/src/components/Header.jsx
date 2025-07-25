import React from "react";
import "./Header.css"; // Create this file for header-specific styles

export default function Header() {
  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar-left">
        <span className="dashboard-logo">
          <span className="dashboard-logo-icon">🎓</span>
          Scholar
        </span>
        <span className="dashboard-portal">Scholarship Portal</span>
      </div>
      <div className="dashboard-navbar-menu">
        <a href="#" className="active">DASHBOARD</a>
        <a href="#">SEARCH & APPLY</a>
        <a href="#">PROFILE</a>
        <a href="#">SETTINGS</a>
        <a href="#">FEEDBACK</a>
        <a href="#">LOGOUT</a>
      </div>
    </nav>
  );
}
