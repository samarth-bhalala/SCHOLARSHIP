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
        <a href="/Dashboard">DASHBOARD</a>
        <a href="/search">SEARCH & APPLY</a>
        <a href="/profile">PROFILE</a>
        <a href="/settings">SETTINGS</a>
        <a href="/feedback">FEEDBACK</a>
        <a href="/logout">LOGOUT</a>
      </div>
    </nav>
  );
}
