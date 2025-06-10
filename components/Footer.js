import React from "react";

const Footer = () => (
  <footer
    style={{
      background: "var(--blog-primary)",
      color: "#fff",
      padding: "2rem 0",
      marginTop: "2rem",
      borderTopLeftRadius: "1rem",
      borderTopRightRadius: "1rem",
      boxShadow: "0 -2px 8px rgba(0,0,0,0.04)",
    }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "2rem",
        padding: "0 2rem",
      }}
    >
      <div>
        <h3 style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: 8 }}>
          HAKXCORE
        </h3>
        <p style={{ maxWidth: 250 }}>
          We always seek new ways to create value for our clients.
        </p>
      </div>
      <div>
        <h4 style={{ fontWeight: 600, marginBottom: 8 }}>Services</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Single Sign-On</li>
          <li>Blockchain Development</li>
          <li>Red Team/Blue Team</li>
          <li>More...</li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontWeight: 600, marginBottom: 8 }}>Useful Links</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Careers</li>
          <li>Instant Help</li>
          <li>Feedback</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontWeight: 600, marginBottom: 8 }}>Contact</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Send Email</li>
          <li>Whatsapp</li>
          <li>Telegram</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: 24, opacity: 0.7 }}>
      &copy; {new Date().getFullYear()} HAKXCORE. All rights reserved.
    </div>
  </footer>
);

export default Footer;
