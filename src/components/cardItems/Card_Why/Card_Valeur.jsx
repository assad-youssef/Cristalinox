import React from "react";
import "./Valeurs.css";
function Card_Valeur(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className={`flip-card-front ${props.nameClass}`}>
          <p className="title">{props.title}</p>
        </div>
        <div className="flip-card-back">
          {/* <p className="title">BACK</p> */}
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card_Valeur;
