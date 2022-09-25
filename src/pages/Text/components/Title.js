import React from "react";
import "../test.css";
export default ({ title, setActiveIndex, index }) => (
  <div
    className="project-item"
    onMouseEnter={() => setActiveIndex(index)}
    onMouseLeave={() => setActiveIndex(-1)}
  >
    <div className="project-title">
      <span>{title}</span>
    </div>
  </div>
);
