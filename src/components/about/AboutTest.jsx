import React, { useEffect } from "react";
import "./test.css";
import { motion } from "framer-motion";
import Services from "./Services";

const Abouttest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="about2">
        <div className="back">
          <div className="container2">
            <span>À Propos de Nous</span>
            <h1>Experts en Acier Inoxydable & Innovation</h1>
          </div>
          <img
            src="/images/about_banner.jpeg"
            alt="Cristal Inox"
            className="img2"
          />
        </div>
        <div className="container2 flex mtop">
          <div className="left row">
            <div className="heading">
              <h1>Votre Partenaire en Inox</h1>
              <p>Qualité, durabilité et expertise au service de vos projets</p>
            </div>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Chez <strong>Cristal Inox</strong>, nous sommes spécialisés dans
              la conception et la fabrication de structures en acier inoxydable,
              alliant design et robustesse. Grâce à notre savoir-faire unique,
              nous répondons aux besoins des secteurs de l'architecture, du
              médical et de l'industrie.
            </motion.p>

            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Nous mettons en avant des solutions sur mesure adaptées aux
              exigences les plus strictes, garantissant qualité, résistance et
              finitions haut de gamme.
            </motion.p>

            <button className="btn2">Découvrir Nos Services</button>
          </div>
          <div className="right row">
            <img src="/images/logo1.png" alt="Nos réalisations en inox" />
          </div>
        </div>

        <motion.div
  className="about-prq"
  initial={{ opacity: 0, clipPath: "inset(0% 50% 0% 50%)" }}
  whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <h3>Pourquoi choisir Cristal Inox ?</h3>
  <p>
    ✔️ Matériaux de qualité premium
    <br />
    ✔️ Fabrication sur mesure et finitions impeccables
    <br />
    ✔️ Solutions innovantes pour l'industrie et le design
    <br />
    ✔️ Engagement envers la durabilité et la performance
  </p>
</motion.div>

      </section>
      <Services />
    </>
  );
};

export default Abouttest;
