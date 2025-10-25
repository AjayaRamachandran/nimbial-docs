import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./content.css";

const pages = {
  'symphony' : [
    {
      "Downloading Symphony": [
        { "Download on Windows": 1 },
        { "Download on MacOS": 2 },
      ],
    },
    {
      "Project Manager": [{ "Create Projects": 3 }],
    },
    {
      "Editor": [{ "Keyboard Shortcuts": 4 }],
    },
  ],
  'nimbial' : [],
};

function Content({ page }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (selectedFile) {
      fetch(`/pages/page_${selectedFile}.md`)
        .then((res) => res.text())
        .then(setMarkdown)
        .catch(() => setMarkdown("Error loading file."));
    }
  }, [selectedFile]);

  const sections = pages[page] || [];

  return (
    <div className="content-container">
      {/* Sidebar */}
      <div className="sidebar">
        {sections.map((section, idx) => {
          const [sectionTitle, items] = Object.entries(section)[0];
          return (
            <div key={idx} className="section">
              <h3 className="section-title">{sectionTitle}</h3>
              <ul className="section-items">
                {items.map((item, i) => {
                  const [label, fileId] = Object.entries(item)[0];
                  return (
                    <li
                      key={i}
                      className={`item ${
                        selectedFile === fileId ? "active" : ""
                      }`}
                      onClick={() => setSelectedFile(fileId)}
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Markdown content */}
      <div className="markdown-container">
        {selectedFile ? (
          <div className="markdown">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        ) : (
          <div className="placeholder">Select an item to view its content.</div>
        )}
      </div>
    </div>
  );
}

export default Content;
