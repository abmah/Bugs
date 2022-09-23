import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function cursor() {
  return (
    <>
      <AnimatedCursor
        innerStyle={{
          width: "50px",
          height: "50px",
          mixBlendMode: "difference",
          backgroundColor: "white",
        }}
        outerStyle={{
          width: 0,
          height: 0,
        }}
      />
    </>
  );
}
