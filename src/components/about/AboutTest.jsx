import React, { useEffect } from "react";
import "./test.css";
import { motion } from "framer-motion";
import Services from "./Services";

const Abouttest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cristal inox  | À propos de nous";
  }, []);
  return (
    <>
      <section className="about2">
        <div className="back">
          <div className="container2">
            <span>À Propos de Nous</span>
            <h1>
              Experts en Acier Inoxydable à Casablanca – Design & Industrie
            </h1>
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
              <p>
                Qualité, durabilité et expertise pour vos projets décoratifs et
                industriels
              </p>
            </div>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Chez <strong>Cristal Inox</strong>, basé à Casablanca, nous sommes
              spécialisés dans la **conception et fabrication de structures en
              acier inoxydable** pour la décoration, l’industrie, le médical et
              le secteur alimentaire. Nous combinons **design contemporain**,
              robustesse et savoir-faire artisanal pour donner vie à vos projets
              sur mesure.
            </motion.p>

            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Nos réalisations respectent les normes les plus strictes. Chaque
              pièce est pensée pour offrir une **résistance optimale**, une
              **finition irréprochable**, et une **intégration parfaite** dans
              son environnement, qu’il soit décoratif ou industriel.
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
          ✔️ Acier inoxydable premium et finitions haut de gamme  
            <br />
            ✔️ Fabrication 100% sur mesure selon vos plans  
            <br />
            ✔️ Solutions décoratives et industrielles innovantes  
            <br />
            ✔️Résistance, durabilité et conformité aux normes
          </p>
        </motion.div>
      </section>
      <Services />
    </>
  );
};

export default Abouttest;
