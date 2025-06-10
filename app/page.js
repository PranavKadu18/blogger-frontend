import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #2eb2ff 0%, #6f86d6 100%)",
        color: "#fff",
        padding: "4rem 0 2rem 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: 16 }}>
          Securing Your Digital Future
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: 600, marginBottom: 32 }}>
          We are a leading cybersecurity company. Simplifying Access,
          Strengthening Security – Global Leaders in SSO and IAM.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "var(--blog-primary)",
            fontWeight: 700,
            padding: "0.75rem 2rem",
            borderRadius: 32,
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Get in Touch →
        </a>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "3rem auto 0 auto",
          padding: "0 2rem",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "2rem",
            marginBottom: 24,
            marginTop: 48,
          }}
        >
          Latest Blog Posts
        </h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {/* BlogCard components will go here */}
          <div
            style={{
              background: "#fff",
              color: "#222",
              borderRadius: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              padding: 24,
              minWidth: 320,
              flex: 1,
            }}
          >
            <h3
              style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: 8 }}
            >
              How SSO is Changing Security
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: 12 }}>
              Explore the impact of Single Sign-On on modern cybersecurity and
              user experience.
            </p>
            <a
              href="#"
              style={{
                color: "var(--blog-primary)",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Read More
            </a>
          </div>
          <div
            style={{
              background: "#fff",
              color: "#222",
              borderRadius: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              padding: 24,
              minWidth: 320,
              flex: 1,
            }}
          >
            <h3
              style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: 8 }}
            >
              Blockchain for Business
            </h3>
            <p style={{ fontSize: "1rem", marginBottom: 12 }}>
              How blockchain technology is revolutionizing business security and
              transparency.
            </p>
            <a
              href="#"
              style={{
                color: "var(--blog-primary)",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
