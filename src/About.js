import "./about.css";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const maincontrol = useAnimation();

  useEffect(() => {
    if (isInView){
      maincontrol.start("visible")
    }
  }, [isInView, maincontrol]);
  return (
    <>
      <motion.div
        ref={ref}
        className="container"
        variants={{
          hidden: { opacity: 0, scale: 0.7 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={maincontrol}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div id="headline">About Me</div>
        <div id="content">
          Hi, I’m Tejash Kumar, currently pursuing my B.Tech in Computer Science
          Engineering (AI/ML) at Salt Lake, Sector V, Kolkata. I’m passionate
          about coding and love exploring new technologies, especially in the
          fields of Artificial Intelligence and Machine Learning. This portfolio
          marks just the beginning of my journey—I’m constantly learning,
          building, and adding new projects along the way. Stay tuned, because
          there’s a lot more to come!
        </div>
      </motion.div>
    </>
  );
}
