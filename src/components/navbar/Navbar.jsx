import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Cristal Inox
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              À propos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/catalogue" className="nav-links" onClick={closeMobileMenu}>
              Catalogue
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links btn--outline" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
