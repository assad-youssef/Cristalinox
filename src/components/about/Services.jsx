import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import Lottie from "lottie-react";
import Delivery from "../../assets/Delivery.json";
import help from "../../assets/help.json";
import work from "../../assets/work.json";

function Services() {
  const services = [
    {
      id: 1,
      icon: help,
      title: "Conception et conseil personnalisé",
      description:
        "Conseils techniques et esthétiques dès la conception pour garantir une solution inox optimale, adaptée à chaque projet décoratif ou industriel."
    },
    {
      id: 2,
      icon: work,
      title: "Fabrication sur mesure",
      description:
        "Production sur commande d’éléments en acier inoxydable, avec précision artisanale et contrôles qualité rigoureux à chaque étape."
    },
    {
      id: 3,
      icon: Delivery,
      title: "Livraison et installation professionnelle",
      description:
        "Transport sécurisé jusqu’au site client, avec installation sur place par nos experts pour un rendu final impeccable."
    }
    
  ];

  return (
    <div className="services">
      <h1 className="title_service">
        Services en Acier Inoxydable à Casablanca
      </h1>

      <div className="body_service">
        <div className="container-service">
          {services.map((service, index) => (
            <motion.div
              className="box-service"
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              {/* <div className="icon-service">{service.id}</div> */}
              <Lottie
                animationData={service.icon}
                style={{ fill: "white" }}
                className="icon-service"
              />

              <div className="content-service">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/services">En savoir plus</a>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
