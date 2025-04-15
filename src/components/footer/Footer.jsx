import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-sectionabout">
            <Link to="/" className="logo-footer">
              <img src="/images/logo3.png"  alt="Cristal Inox Logo" />
            </Link>
            <p>
              Passionnés par l’excellence de la chaudronnerie en acier
              inoxydable. Fondée sur un savoir-faire artisanal et une volonté
              d'innovation, notre entreprise s'engage à fournir des solutions
              sur mesure pour les secteurs de la décoration, du médical et de la
              tuyauterie industrielle.
            </p>
          </div>

          <div className="footer-section links">
            <ul>
              <li>
                <Link to="/about">À propos</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/FAQ">FAQ's</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <ul>
              <li>
                <Link to="" target="_blank">
                  <i className="fa-solid fa-phone"></i> +212 661471841
                </Link>
              </li>
              <li>
                <Link to="mailto:cristal.inox@yahoo.fr" target="_blank">
                  <i className="fa-solid fa-envelope"></i> cristal.inox@yahoo.fr
                </Link>
              </li>

              <li>
                <i className="fa-solid fa-location-dot"></i> Maroc, Casablanca
              </li>
            </ul>
          </div>

          <div className="footer-section social">
            <ul className="social-links">
              <li>
                <Link
                  to="https://web.facebook.com/aziz.assad.969"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/aziz-assad-ba737052/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/assad_inox/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/212661471841" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-bottom">
          &copy; 2025 || Tous droits réservés par Cristal Inox
        </p>
      </div>
    </footer>
  );
}

export default Footer;
