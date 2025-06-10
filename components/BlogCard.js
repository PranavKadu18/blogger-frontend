import React from "react";

const BlogCard = ({ image, title, excerpt, author, date }) => (
  <div
    style={{
      background: "#fff",
      color: "#222",
      borderRadius: 16,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      padding: 0,
      minWidth: 320,
      maxWidth: 400,
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      marginBottom: 24,
    }}
  >
    {image && (
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: 180, objectFit: "cover" }}
      />
    )}
    <div
      style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}
    >
      <h3 style={{ fontWeight: 700, fontSize: "1.25rem", marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontSize: "1rem", marginBottom: 12, flex: 1 }}>{excerpt}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 14,
          color: "#888",
        }}
      >
        <span style={{ marginRight: 8 }}>By {author}</span>|
        <span style={{ marginLeft: 8 }}>{date}</span>
      </div>
    </div>
  </div>
);

export default BlogCard;
