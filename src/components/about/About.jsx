import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Abouts.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">
      <section className="section">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>À Propos de Nous</h2>
        </motion.div>
      </section>

      <section className="section">
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Chez <strong>Cristal Inox</strong>, nous sommes passionnés par
          l’excellence de la chaudronnerie en acier inoxydable. Fondée sur un
          savoir-faire artisanal et une volonté d'innovation, notre entreprise
          s'engage à fournir des solutions sur mesure pour les secteurs de la
          décoration, du médical et de la tuyauterie industrielle.
        </motion.p>
      </section>

      <section className="section">
        <motion.div
          className="about-section"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {" "}
          <h3>Notre Engagement</h3>
          <p>
            Nous croyons que l'acier inoxydable est bien plus qu'un simple
            matériau : c'est une promesse de durabilité, d'élégance et de
            performance. Chaque projet que nous réalisons est conçu avec une
            attention méticuleuse aux détails.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="about-section one"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h3>Pourquoi Choisir Cristal Inox ?</h3>
          <ul>
            <li>Savoir-faire artisanal et expertise technique</li>
            <li> Matériaux haut de gamme et finitions impeccables</li>
            <li>
              Accompagnement personnalisé de la conception à l'installation
            </li>
            <li>
              Innovation et respect des normes de qualité les plus strictes
            </li>
          </ul>
        </motion.div>
      </section>

      <section className="section">
        <motion.div
          className="about-section two"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3>Nos Services</h3>
          <ul>
            <li>
              Décoration intérieure et extérieure : Escaliers, garde-corps,
              mobilier design en inox.
            </li>
            <li>
              Tuyauterie industrielle : Solutions robustes et performantes
              adaptées aux environnements exigeants.
            </li>
            <li>
              Médical et alimentaire : Conception d'équipements respectant les
              normes d'hygiène les plus strictes.
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
