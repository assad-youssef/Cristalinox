import React from "react";
import Card_Valeur from "./Card_Valeur";
import "./Valeurs.css"; 

function Valeurs() {
  return (
      <div className="cards">
        <h1 className="title-h1">Pourquoi Cristal Inox</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Card_Valeur
                title={"Qualité et Durabilité"}
                className="cards__item"
                text={
                  "Nous utilisons de l'acier inoxydable haut de gamme pour garantir des réalisations solides, esthétiques et durables dans le temps."
                }
                nameClass={"bronz"}
              />
              <Card_Valeur
                title={"Expertise et Savoir-Faire"}
                className="cards__item"
                text={
                  "Forts d’une expérience en chaudronnerie inox, nous concevons des solutions sur-mesure adaptées aux secteurs de la décoration, du médical et de la tuyauterie."
                }
              />
              <Card_Valeur
                title={"Innovation et Précision"}
                className="cards__item"
                text={
                  "Nous allions design et précision technique pour offrir des produits inox qui répondent aux exigences les plus élevées, du simple élément décoratif aux installations industrielles."
                }
              />
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Valeurs;
