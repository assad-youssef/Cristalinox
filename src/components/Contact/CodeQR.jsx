import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./QrLinks.css";

const QrLinks = () => {
  const links = [
    {
      name: "Facebook",
      url: "https://web.facebook.com/aziz.assad.969",
      color: "#3b5998",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/assad_inox/",
      color: "#E1306C",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aziz-assad-ba737052/",
      color: "#0077b5",
    },
    { name: "WhatsApp", url: "https://wa.me/212661471841", color: "#25D366" },
  ];

  return (
    <div className="qr-container">
      <h1>Retrouvez-nous sur les réseaux sociaux</h1>
      <div className="qr-grid">
        {links.map((link, index) => (
          <div
            className="qr-box"
            key={index}
            style={{ borderColor: link.color }}
          >
            <h2 style={{ color: link.color }}>{link.name}</h2>
            <QRCodeCanvas value={link.url} size={150} />
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="qr-link"
            >
              Voir le profil
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QrLinks;
