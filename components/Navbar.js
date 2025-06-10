"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll handlers
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        background: "var(--blog-primary)",
        color: "#fff",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.5rem",
          letterSpacing: 1,
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        HAKXCORE
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a
          href="#"
          style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Home
        </a>
        <a
          href="#"
          style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("blog-section");
          }}
        >
          Blog
        </a>
        <a
          href="#"
          style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("footer");
          }}
        >
          Contact
        </a>
        <button
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: "none",
            border: "2px solid #fff",
            borderRadius: "50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            fontSize: 18,
          }}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
