import React, { useState, useRef, useEffect } from "react";

import "./header.css";
import AnimatedText from "./AnimatedText";
import { motion, useScroll, useSpring } from "framer-motion";
export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    bounce: 0.25,
  });

  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API

  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: " BUGS" },
    // {
    //   type: "heading2",
    //   text: "Animating responsive text!",
    // },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <div className="header">
      <div className="nav-bar">
        <div>menu</div>
        <div>cart</div>
      </div>
      <motion.div
        className="title"
        initial="hidden"
        // animate="visible"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>

      <div className="bottom-bar">
        <motion.div className="line" style={{ scaleX: scaleX }} />
      </div>
    </div>
  );
}
