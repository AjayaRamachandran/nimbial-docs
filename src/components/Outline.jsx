import React, { useEffect, useState } from "react";
import "./outline.css";

const Outline = ({ markdown }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!markdown) {
      setHeadings([]);
      return;
    }

    const frameId = requestAnimationFrame(() => {
      const nodes = document.querySelectorAll(
        ".markdown h1, .markdown h2, .markdown h3, .markdown h4"
      );

      const parsed = Array.from(nodes)
        .map((node) => ({
          level: Number(node.tagName.slice(1)),
          text: node.textContent?.trim() || "",
          id: node.id,
        }))
        .filter((heading) => heading.id);

      setHeadings(parsed);
    });

    return () => cancelAnimationFrame(frameId);
  }, [markdown]);

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
