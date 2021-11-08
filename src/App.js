import "./styles.css";
import { motion } from "framer-motion";
import { ReactComponent as HeartBtn } from "./heart.svg";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(false);
  const reload = () => setState(!state);

  const appStyle = {
    width: "375px",
    height: "812px",
    position: "relative",
    background: "black"
  };
  const heartPathStyle = {
    position: "absolute",
    top: "calc(50vh - 140px)",
    left: "-14px",
    width: "100vw",
    fill: "none",
    stroke: "red",
    strokeWidth: "12",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "994",
    strokeDashoffset: "994"
  };
  const buttonsStyle = {
    position: "absolute",
    top: "calc(50vh - 40vw)",
    left: "10vw",
    width: "80vw",
    height: "80vw"
  };
  const buttonStyle = {
    width: "calc(50% - 8px)",
    height: "calc(50% - 8px)",
    position: "absolute",
    display: "flex"
  };
  const buttonStyle1 = {
    top: "calc(50% - (50% - 8px) / 2)",
    left: 0,
    transform: "rotate(-90deg)"
  };
  const buttonStyle2 = {
    top: "calc(50% - (50% - 8px) / 2)",
    right: 0,
    transform: "rotate(90deg)"
  };
  const buttonStyle3 = {
    top: 0,
    right: "calc(50% - (50% - 8px) / 2)",
    transform: "rotate(0deg)"
  };
  const buttonStyle4 = {
    bottom: 0,
    right: "calc(50% - (50% - 8px) / 2)",
    transform: "rotate(180deg)"
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  const BtnTip = ({ style, variants }) => {
    return (
      <motion.div style={style} variants={variants}>
        <HeartBtn />
      </motion.div>
    );
  };
  const Buttons = () => {
    return (
      <motion.div
        style={buttonsStyle}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <BtnTip style={{ ...buttonStyle, ...buttonStyle3 }} variants={item} />
        <BtnTip style={{ ...buttonStyle, ...buttonStyle2 }} variants={item} />
        <BtnTip style={{ ...buttonStyle, ...buttonStyle4 }} variants={item} />
        <BtnTip style={{ ...buttonStyle, ...buttonStyle1 }} variants={item} />
      </motion.div>
    );
  };
  return (
    <div style={appStyle} onClick={reload}>
      <svg
        style={heartPathStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 448 168"
      >
        <motion.path
          animate={{
            pathLength: [0, 0.5, 1],
            pathOffset: [0, 0.2, 1],
            opacity: [1, 0.75, 0]
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M2.6 131.2c100.6-43 161.8 92 275.2-34 15.2-17 36.7-37.3 36.2-55.8C312-22 209.6.1 238.8 56.2c33.5-53-68.2-81.2-72.4-14.8-1.2 19.5 16.1 37.7 34.2 55.8 139.8 139.8 168.1-21.7 245.2 39"
        />
      </svg>
      <Buttons />
    </div>
  );
}
