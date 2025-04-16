import React from "react";
import "./Aide.css";
import { Link } from "react-router-dom";

const Aide = () => {
  return (
    <div className="aide-container">
      <div className="aide-card">
        <div className="aide-image">
          <img src="images/job.jpg" alt="Meeting" />
        </div>
        <div className="aide-info">
          <h2>Besoin d’aide <span className="highlight">?</span></h2>
          <h3>Contactez nous !</h3>
          <p><strong>Service client est à votre écoute !</strong></p>
          <ul>
            <li>📧 cristal.inox@yahoo.fr</li>
            <li>📞 +212 661 236 987</li>
          </ul>
          <h4>📍 Venez nous rendre visite !</h4>
          <p><strong>Adresse de notre boutique :</strong></p>
          <ul>
            <li>📌 HH42+M3 Titt Mellilen - Maroc</li>
            <li>📆 Du Lundi au samedi</li>
            <li>⏰ De 8h à 18h</li>
          </ul>
          <p>Notre équipe vous accueille avec le sourire ! 😊</p>
          <Link to="/contact" className="aide-button">contactez-nous !</Link>
        </div>
      </div>
    </div>
  );
};

export default Aide;