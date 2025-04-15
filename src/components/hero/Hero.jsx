import React, { useState, useEffect } from "react";
import { Button } from "../navbar/Button";
import { motion } from "framer-motion";
import "./Hero.css";
import "../../App.css";

function Hero() {
  const [videoSource, setVideoSource] = useState(
    window.innerWidth > 900 ? "/vedios/vedio2.mp4" : "/vedios/vedio4.mp4"
  );
  const [isLooping, setIsLooping] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setVideoSource("/vedios/vedio2.mp4");
        setIsLooping(true);
      } else {
        setVideoSource("/vedios/vedio4.mp4");
        setIsLooping(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {}, [videoSource]);

  const handleVideoEnd = () => {
    if (isLooping) {
      setVideoSource((prev) =>
        prev === "/vedios/vedio2.mp4"
          ? "/vedios/vedio1.mp4"
          : "/vedios/vedio2.mp4"
      );
    }
  };

  return (
    <div className="hero-container">
      <video
        key={videoSource}
        src={videoSource}
        autoPlay
        muted
        onEnded={handleVideoEnd}
      />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        CRISTAL INOX
      </motion.h1>
      <motion.div
        className="hero-btns"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
          <Button
          link='contact'
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Demander un Devis
          </Button>
        <Button
        link='catalogue'
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Explorer nos projets
        </Button>
      </motion.div>
    </div>
  );
}

export default Hero;
