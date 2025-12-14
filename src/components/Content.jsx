import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {File} from 'lucide-react';
import ReactMarkdown from "react-markdown";
import "./content.css";
import Outline from "./Outline.jsx";

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

function Content({ page, id }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setSelectedFile(id);
      // console.log(id);
    }
  }, []);

  useEffect(() => {
    let tempText = ''
    if (selectedFile) {
      fetch(`/pages/page_${page}_${selectedFile}.md`)
        .then((res) => res.text())
        .then((text) => {
          if (text.trim().startsWith('<')) {
            setMarkdown("**Error:** Page not found.");
          } else {
            setMarkdown(text);
          }
        })
        .catch(() => setMarkdown("**Error:** Page not found."));
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
                        selectedFile == fileId ? "active" : ""
                      }`}
                      onClick={() => {setSelectedFile(fileId); navigate(`/${page}/${fileId}/`)}}
                    >
                      <File size={12} strokeWidth={3} style={{marginRight: '7px', opacity: '0.3'}}/>
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
      <div className="markdown-container scrollable">
        {selectedFile ? (
          <div className="markdown">
            <ReactMarkdown
              components={{
                h1: ({ node, children }) => {
                  const text = children;
                  const id = String(text)
                    .toLowerCase()
                    .replace(/[^\w]+/g, "-");
                  return <h1 id={id}>{children}</h1>;
                },
                h2: ({ node, children }) => {
                  const text = children;
                  const id = String(text)
                    .toLowerCase()
                    .replace(/[^\w]+/g, "-");
                  return <h2 id={id}>{children}</h2>;
                },
                h3: ({ node, children }) => {
                  const text = children;
                  const id = String(text)
                    .toLowerCase()
                    .replace(/[^\w]+/g, "-");
                  return <h3 id={id}>{children}</h3>;
                },
                h4: ({ node, children }) => {
                  const text = children;
                  const id = String(text)
                    .toLowerCase()
                    .replace(/[^\w]+/g, "-");
                  return <h4 id={id}>{children}</h4>;
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="placeholder">Select an item to view its content.</div>
        )}
      </div>
      <Outline markdown={markdown} />
    </div>
  );
}

export default Content;
