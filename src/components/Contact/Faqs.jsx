import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Faqs.css";
const faqs = [
    {
      question: "Qu'est-ce que Cristal Inox ?",
      answer:
        "Cristal Inox est une entreprise spécialisée dans la chaudronnerie inoxydable. Nous proposons des services de fabrication et de transformation d'inox pour divers secteurs comme la décoration, le médical et le tuyautage industriel. Notre mission est d'offrir des solutions sur mesure avec une qualité irréprochable, adaptées aux besoins spécifiques de nos clients."
    },
    {
      question: "Quels types de produits fabriquez-vous ?",
      answer:
        "Nous fabriquons une large gamme de produits en inox, allant des équipements industriels aux éléments de décoration. Cela inclut des garde-corps, des plans de travail, des cuves, des structures métalliques et bien plus encore. Chaque pièce est conçue avec précision et souci du détail pour garantir une finition impeccable."
    },
    {
      question: "Pourquoi choisir l'inox pour vos projets ?",
      answer:
        "L'inox est un matériau exceptionnel grâce à sa résistance à la corrosion, sa durabilité et son esthétique moderne. Il est idéal pour des applications dans des environnements exigeants comme l'industrie alimentaire, la médecine ou l'architecture. Chez Cristal Inox, nous utilisons de l'inox de haute qualité pour assurer la longévité et la fiabilité de nos réalisations."
    },
    {
      question: "Proposez-vous des services sur mesure ?",
      answer:
        "Oui, nous sommes spécialisés dans la fabrication sur mesure. Nous travaillons en étroite collaboration avec nos clients pour concevoir et réaliser des pièces uniques qui répondent parfaitement à leurs besoins. Que ce soit pour un projet architectural, industriel ou domestique, nous nous adaptons à vos exigences avec professionnalisme et expertise."
    },
    {
      question: "Comment demander un devis ?",
      answer:
        "Vous pouvez nous contacter directement via notre site web, par téléphone ou par e-mail. Nous étudierons votre demande avec attention et vous proposerons une solution adaptée à votre budget et à vos exigences. Notre équipe est toujours disponible pour vous conseiller et vous accompagner dans la réalisation de votre projet."
    },
    {
      question: "Quels sont vos délais de fabrication ?",
      answer:
        "Nos délais varient en fonction de la complexité du projet et de la charge de travail en cours. En général, un projet standard peut être réalisé en quelques semaines. Nous nous engageons à respecter des délais raisonnables tout en garantissant un travail de haute qualité. Pour obtenir une estimation précise, contactez-nous avec les détails de votre projet."
    },
    {
      question: "Travaillez-vous avec des professionnels et des particuliers ?",
      answer:
        "Oui, nous collaborons aussi bien avec des entreprises qu'avec des particuliers. Que vous soyez un architecte, un industriel ou un particulier souhaitant un aménagement en inox sur mesure, nous avons l'expertise nécessaire pour répondre à vos attentes. Notre équipe est à votre écoute pour vous conseiller et concrétiser votre projet."
    }
  ];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Foire Aux Questions - Cristal Inox💡</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "➖" : "➕"}</span>
            </button>
            {openIndex === index && (
              <motion.p
                className="faq-answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
