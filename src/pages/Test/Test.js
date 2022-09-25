import React from "react";
import "./test.css";
import sampleData from "./sampleData";
import Title from "./components/Title";
import Media from "./components/Media";
import { useState } from "react";
export default function Test() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="page-wrapper">
      <div className="project-list">
        {sampleData.map(({ title }, index) => (
          <Title title={title} setActiveIndex={setActiveIndex} index={index} />
        ))}
        <div className="project-media">
          {sampleData.map(({ mediaUrl }, index) => {
            const isActive = index === activeIndex;

            return <Media url={mediaUrl} active={isActive} />;
          })}
        </div>
      </div>
    </div>
  );
}
