import React from "react";
import Header from "./Header";
import Footer from "./Footer"; // Optional, remove if you don't want a footer

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
