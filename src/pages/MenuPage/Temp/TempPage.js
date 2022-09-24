import React from "react";
import AnimatedText from "../../utils/AnimatedText";
import { motion } from "framer-motion";
import caterpiller from "../../../images/caterpillar.jpg";
import "./temp.css";
export default function TempPage() {
  const placeholderText = [{ type: "heading1", text: " BUGS" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="header-body">
      <div className="nav-bar-body">
        <div className="nav-hide-1">collection</div>
        <div className="nav-hide-2">cart</div>
      </div>
      <motion.div
        className="title-body"
        initial="visiable"
        animate={"hidden"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <img src={caterpiller} alt="caterpiller" className="caterpiller" />
    </div>
  );
}
