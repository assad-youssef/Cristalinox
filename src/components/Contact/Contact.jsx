import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Lottie from "lottie-react";
import gmail from "../../assets/gmail.json";
import phone from "../../assets/phone.json";
import maps from "../../assets/maps.json";
import FAQ from "./Faqs";
import QrLinks from "./CodeQR";
import NewsLetter from "./Newsletter";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cristal inox  | Adresse et plan d'access"; 
    
  }, []);

  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9813s7b",
        "template_dp8qcab",
        form.current,
        "uv-KwgdGWcnpCrbQM"
      )
      .then(
        () => {
          setMessage({ text: "Message envoyé avec succès !", type: "success" });
          form.current.reset();

          setTimeout(() => setMessage(null), 2000);
        },
        (error) => {
          setMessage({ text: "Erreur lors de l'envoi !", type: "error" });

          setTimeout(() => setMessage(null), 2000);
        }
      );
  };

  return (
    <>
      <motion.div className="contact_body" initial="hidden" animate="visible">
        <section className="contact_section">
          <div className="contactForm">
            <motion.form ref={form} onSubmit={sendEmail}>
              <h1 className="sub-heading">Nous contacter</h1>
              <p className="para para2">N'hésitez pas à nous contacter.</p>
              <input
                type="text"
                name="user_name"
                className="input"
                placeholder="Votre nom"
                required
              />
              <input
                type="email"
                name="user_email"
                className="input"
                placeholder="Votre email"
                required
              />
              <input
                type="text"
                name="subject"
                className="input"
                placeholder="Sujet"
                required
              />
              <textarea
                name="message"
                className="input"
                cols="30"
                rows="5"
                placeholder="Votre message..."
                required
              ></textarea>
              <motion.input
                type="submit"
                className="input submit"
                value="Envoyer le message"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </motion.form>
            {message && (
              <div className={`alert ${message.type}`}>{message.text}</div>
            )}
            <motion.div className="map-container">
              <div className="mapBg"></div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.870613518232!2d-7.452359590042773!3d33.55673787323632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63544b9850703%3A0xfe37e6634e59f4e1!2sCristalinox!5e0!3m2!1sfr!2sma!4v1741535497597!5m2!1sfr!2sma"
                  width="700"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            <div className="contactMethod">
              {[
                {
                  data: maps,
                  title: "Localisation",
                  text: "Casablanca, Tit Mellil",
                },
                { data: gmail, title: "Email", text: "contact@cristalinox.ma" },
                {
                  data: phone,
                  title: "Téléphone",
                  text: "+212661236987",
                  link: "tel:+212661236987",
                },
              ].map((item, index) => (
                <motion.div
                  className="method"
                  key={index}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="lottie-container">
                    <Lottie animationData={item.data} className="lottie-icon" />
                  </div>
                  <article className="text">
                    <h1 className="sub-heading">{item.title}</h1>
                    {item.link ? (
                      <a href={item.link} className="para">
                        {item.text}
                      </a>
                    ) : (
                      <p className="para">{item.text}</p>
                    )}
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
      <QrLinks />
      <FAQ />
      <NewsLetter />
    </>
  );
}

export default Contact;
