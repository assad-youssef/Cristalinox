import React, { useState } from "react";
import "./Newsletter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mblglaan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setMessage("Merci ! Vous êtes inscrit à notre newsletter.");
      setEmail("");
    } else {
      setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <div className="newsletter-text">
          <h2>Inscrivez-vous à notre newsletter</h2>
          <p>Recevez nos actualités directement dans votre boîte mail chaque mois !</p>
        </div>
        <form className="newsletter-form" onSubmit={handleEmail}>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">S'inscrire</button>
        </form>
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
};

export default NewsLetter;
