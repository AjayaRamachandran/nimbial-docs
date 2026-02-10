import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { File, Menu } from "lucide-react";
import ReactMarkdown from "react-markdown";
import "./content.css";
import Outline from "./Outline.jsx";

const pages = {
  symphony: [
    {
      "Downloading Symphony": [
        { "Download on Windows": 1 },
        { "Download on MacOS": 2 },
      ],
    },
    {
      "Project Manager": [
        { "Create Projects": 3 },
        { "Conversion Formats": 5 },
      ],
    },
    {
      Editor: [{ "Keyboard Shortcuts": 4 }],
    },
  ],
  nimbial: [],
};

function Content({ page, id }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) setSelectedFile(id);
  }, []);

  useEffect(() => {
    if (!selectedFile) return;

    fetch(`/pages/page_${page}_${selectedFile}.md`)
      .then((res) => res.text())
      .then((text) => {
        if (text.trim().startsWith("<")) {
          setMarkdown("**Error:** Page not found.");
        } else {
          setMarkdown(text);
        }
      })
      .catch(() => setMarkdown("**Error:** Page not found."));
  }, [selectedFile]);

  const sections = pages[page] || [];

  return (
    <div className="content-container">
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu size={20} />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
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
                        selectedFile == fileId ? "active" : ""
                      }`}
                      onClick={() => {
                        setSelectedFile(fileId);
                        setSidebarOpen(false);
                        navigate(`/${page}/${fileId}/`);
                      }}
                    >
                      <File
                        size={12}
                        strokeWidth={3}
                        style={{ marginRight: "7px", opacity: "0.3" }}
                      />
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Markdown */}
      <div className="markdown-container">
        {selectedFile ? (
          <div className="markdown">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        ) : (
          <div className="placeholder">
            Select an item to view its content.
          </div>
        )}
      </div>

      <Outline markdown={markdown} />
    </div>
  );
}

export default Content;
