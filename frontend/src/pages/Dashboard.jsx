import React from "react";
import Layout from "../components/Layout";
import FeaturedScholarships from "../components/FeaturedScholarships";
import "../components/Dashboard.css"; // Create this for main/dashboard styles

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard-content">
        <aside className="dashboard-profile-card">
          <div className="profile-avatar">
            <span className="profile-avatar-icon">👤</span>
            <span className="profile-avatar-badge">✔️</span>
          </div>
          <h2 className="profile-name">Nancy</h2>
          <p className="profile-email">nancy03@example.com</p>
          <span className="profile-complete">Profile Complete</span>
          <div className="profile-info">
            <div>
              <span>Profile Status</span>
              <span className="profile-status">Complete</span>
            </div>
            <div>
              <span>Applications</span>
              <span className="profile-applications">0 Active</span>
            </div>
            <div>
              <span>Success Rate</span>
              <span className="profile-success">--</span>
            </div>
          </div>
        </aside>

        {/* Main Dashboard */}
        <main className="dashboard-main">
          <h1 className="dashboard-welcome">
            Welcome back, Nancy! <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="dashboard-subtitle">
            Ready to discover new scholarship opportunities? Let's find the perfect match for you.
          </p>

          {/* Metrics Cards */}
          <div className="dashboard-metrics">
            <div className="metric-card metric-purple">
              <div className="metric-title">Total Scholarships</div>
              <div className="metric-value">247</div>
              <div className="metric-desc">Available scholarships</div>
            </div>
            <div className="metric-card metric-green">
              <div className="metric-title">Eligible For</div>
              <div className="metric-value">23</div>
              <div className="metric-desc">Based on your profile</div>
            </div>
            <div className="metric-card metric-yellow">
              <div className="metric-title">Applications</div>
              <div className="metric-value">0</div>
              <div className="metric-desc">Currently active</div>
            </div>
            <div className="metric-card metric-white">
              <div className="metric-title">Success Rate</div>
              <div className="metric-value">--</div>
              <div className="metric-desc">To be calculated</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="dashboard-actions">
            <button className="dashboard-btn dashboard-btn-purple">
              🔍 Browse Scholarships
            </button>
            <button className="dashboard-btn dashboard-btn-outline">
              ➕ Quick Apply
            </button>
          </div>

          {/* Featured Scholarships */}
          <FeaturedScholarships />
        </main>
      </div>
    </Layout>
  );
}