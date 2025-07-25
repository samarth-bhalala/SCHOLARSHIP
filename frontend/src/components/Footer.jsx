import React from "react";
import "./Footer.css"; // Create this file for footer-specific styles

export default function Footer() {
  return (
    <footer className="dashboard-footer">
      <p>© {new Date().getFullYear()} Scholar. All rights reserved.</p>
    </footer>
  );
}
