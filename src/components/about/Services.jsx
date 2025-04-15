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
      icon:help,

      title: "Conception et conseil personnalisé",
      description:
        "Accompagnement des clients dès la phase de conception pour choisir les meilleures solutions en inox.",
    },
    {
      id: 2,
      icon:work,

      title: "Fabrication sur commande et sur mesure",
      description:
        "Production d’éléments inox selon les exigences du client avec un contrôle qualité strict.",
    },
    {
      id: 3,
      icon:Delivery,
      title: "Livraison et installation",
      description:
        "Transport sécurisé des produits jusqu’au site du client avec un emballage soigné pour éviter tout dommage.",
    },
  ];

  return (
    <div className="services">
      <h1 className="title_service">Nos Services</h1>

      <div className="body_service">
        <div className="container-service">
          {services.map((service, index) => (
            <motion.div
              className="box-service"
              key={service.id}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.9, delay: index * 0.3 }} 
              viewport={{ once: true }}  >
              {/* <div className="icon-service">{service.id}</div> */}
              <Lottie animationData={service.icon} 
              style={{ fill: "white" }}
              className="icon-service" />

              <div className="content-service">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#">Lire plus</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
