import React from "react";
import "./Cards.css";
import CardItem from "./CardItems";
import { motion } from "framer-motion";
function Cards() {
  return (
    <div className="cards">
      <h1>Découvrez ces destinations INCROYABLES !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <motion.li
              className="cards__item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CardItem
                src="images/modern-staircase.jfif"
                text="Escaliers en acier inoxydable sur mesure pour des intérieurs modernes"
                label="Décoration intérieure"
                path="/catalogue"
              />
            </motion.li>
            <motion.li
              className="cards__item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <CardItem
                src="images/industrial-piping.jfif"
                text="Solutions de tuyauterie industrielle de haute qualité pour votre entreprise"
                label="Tuyauterie"
                path="/catalogue"
              />
            </motion.li>
            <motion.li
              className="cards__item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
              viewport={{ once: true }}
            >
              <CardItem
                src="images/metal-gate.jfif"
                text="Portails en métal élégants et durables adaptés à vos besoins"
                label="Métallerie"
                path="/catalogue"
              />
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
