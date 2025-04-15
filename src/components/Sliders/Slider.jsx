import React from "react";
import "./Slider.css";

function Slider() {
  const images = [
    "images/p1.jpeg",
    "images/p2.jpeg",
    "images/p3.jpeg",
    "images/p4.jpeg",
    "images/p5.jpeg",
    "images/p6.jpeg",
    "images/p7.jpeg",
  ];

  return (
    <div className="Slider_page">
      <div className="banner">
        <div className="slider" style={{ "--quantity": images.length }}>
          {images.map((imgSrc, index) => (
            <div
              key={index}
              className="item_slider"
              style={{ "--position": index + 1 }}
            >
              <img src={imgSrc} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="Cristal Inox">Cristal Inox</h1>
          <div className="author">
            <p>
              Solutions **inox de haute qualité** pour les secteurs de la{" "}
              <b>décoration, médical et tuyauterie</b>.
            </p>
            <p>
              Découvrez nos derniers projets et innovations dans la fabrication
              d'acier inoxydable.
            </p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
