import React, { useEffect } from "react";
import "./test.css";
import sampleData from "./sampleData";
import Title from "./components/Title";
import Media from "./components/Media";
import { useState } from "react";

// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updateMousePosition = (event) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };
//     window.addEventListener("mousemove", updateMousePosition);

//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return mousePosition;
// };

export default function TextImage() {
  const [activeIndex, setActiveIndex] = useState(-1);
  // const { x, y } = useMousePosition();
  // console.log(x, y);
  return (
    <div className="page-wrapper">
      <div className="project-list">
        {sampleData.map(({ title }, index) => (
          <Title
            key={index}
            title={title}
            setActiveIndex={setActiveIndex}
            index={index}
          />
        ))}
        <div className="project-media">
          {sampleData.map(({ mediaUrl }, index) => {
            const isActive = index === activeIndex;
            // const xPos = isActive ? x : 0;
            // const yPos = isActive ? y : 0;
            return (
              <Media
                key={index}
                url={mediaUrl}
                active={isActive}
                // x={xPos}
                // y={yPos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
