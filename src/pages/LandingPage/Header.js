import React, { useState, useRef, useEffect } from "react";

import "./header.css";
import AnimatedText from "../utils/AnimatedText";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import caterpiller from "../../images/caterpillar.jpg";
export default function Header() {
  // const [distance, setDistance] = useState(0);

  // const { scrollYProgress, scrollY } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  //   bounce: 0.25,
  // });

  // useEffect(() => {
  //   return scrollY.onChange((latest) => {
  //     // console.log("Page scroll: ", latest);
  //     setDistance(latest);
  //   });
  // }, []);

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

  return (
    <div className="header">
      <div className="nav-bar">
        <Link to={"/menu"}>collection</Link>
        <Link>cart</Link>
      </div>
      <motion.div
        className="title"
        initial="hidden"
        // animate="visible"
        animate={"visible"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <img src={caterpiller} alt="caterpiller" className="caterpiller" />
      {/* <div className="bottom-bar">
        <motion.div className="line" style={{ scaleX: scaleX }} />
      </div> */}
    </div>
  );
}
