import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function cursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={50}
        outerSize={80}
        innerStyle={{ backgroundColor: "white", mixBlendMode: "difference" }}
        outerAlpha={0.2}
        innerScale={0.7}
        trailingSpeed={40}
        outerScale={1.3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}
