import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page-404">
      <header className="top-header"></header>

      <div className="stars">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>

      <section className="error">
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Page Not Found</h1>
            <p className="message__text">
              We're sorry, the page you were looking for isn't found here. The
              link you followed may either be broken or no longer exists. Please
              try again, or return to the homepage.
            </p>
          </div>
          <Link to="/" >
          <button className="btn_404">
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Page404;
