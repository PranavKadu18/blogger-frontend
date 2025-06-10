import BlogCard from "@/components/BlogCard";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "How SSO is Changing Security",
    excerpt:
      "Explore the impact of Single Sign-On on modern cybersecurity and user experience.",
    author: "Jane Doe",
    date: "May 10, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Blockchain for Business",
    excerpt:
      "How blockchain technology is revolutionizing business security and transparency.",
    author: "John Smith",
    date: "May 8, 2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Red Team vs Blue Team: Explained",
    excerpt:
      "A deep dive into the world of cybersecurity defense and attack simulations.",
    author: "Alice Lee",
    date: "May 5, 2024",
  },
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #2eb2ff 0%, #6f86d6 100%)",
        color: "#fff",
        padding: "4rem 0 2rem 0",
        paddingTop: "80px",
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
        id="blog-section"
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
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
