import React, { useEffect, useState } from "react";
import "./outline.css";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const Outline = ({ markdown }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!markdown) return;

    const lines = markdown.split("\n");
    const parsed = [];

    lines.forEach((line) => {
      const match = line.match(/^(#{1,4})\s+(.*)/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = slugify(text);
        parsed.push({ level, text, id });
      }
    });

    setHeadings(parsed);
  }, [markdown]);

  useEffect(() => {
    // Inject IDs into rendered headings
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) {
        const candidate = document.querySelector(
          `[data-heading-id="${id}"]`
        );
        if (candidate) candidate.id = id;
      }
    });
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="outline-container">
      <div className="outline">
        {headings.map((h, idx) => (
          <div
            key={idx}
            className={`outline-item level-${h.level}`}
            onClick={() => {
              const el = document.getElementById(h.id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            <span className="outline-line" />
            <span className="outline-text">{h.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outline;
