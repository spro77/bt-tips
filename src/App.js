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
    left: "0",
    width: "375px",
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
    top: "calc(50% - 144px)",
    left: "calc(50% - 150px)",
    width: "300px",
    height: "300px"
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
        delayChildren: 0.75,
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5
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
        viewBox="0 -6 375 172"
      >
        <motion.path
          animate={{
            pathLength: [0, 1],
            pathOffset: [0, 1],
            opacity: [1, 0]
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0 136.2c112.5-39 111 89.5 224-38.2 15-17 38-35.5 38-56 0-64-111.5-38.9-75 14 37-52.8-75-78.5-75-14 0 20.5 21.6 36.8 38.5 56 111.8 127.2 111.3-.7 225 38.2"
        />
      </svg>
      <Buttons />
    </div>
  );
}