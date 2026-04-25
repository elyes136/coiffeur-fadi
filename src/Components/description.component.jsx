import imageCoiffeur from "../assets/images/salon.jpg";
import "../assets/style/description.css";
import { NavLink } from "react-router-dom";
const Description = () => {
  return (
    <section className="page" data-reveal>
      <section
        className="description"
        data-reveal
        style={{ "--reveal-delay": "70ms" }}
      >
        <div
          className="description-content"
          data-reveal
          style={{ "--reveal-delay": "120ms" }}
        >
          <div
            className="description-text"
            data-reveal
            style={{ "--reveal-delay": "170ms" }}
          >
            <h1>Bienvenue chez Salon Fadi</h1>
            <p>
              Découvrez l'art de la coiffure avec Fadi, votre expert en style
              capillaire. Que vous cherchiez une coupe tendance, une coloration
              vibrante ou un soin capillaire personnalisé, Fadi est là pour
              sublimer votre look. Avec des années d'expérience et une passion
              pour la beauté, il vous offre une expérience de coiffure
              exceptionnelle dans un cadre chaleureux et accueillant. Prenez
              rendez-vous dès aujourd'hui et laissez Fadi révéler votre beauté
              naturelle.
            </p>
            <div className="cta-buttons">
              <button className="cta-button">Prendre rendez-vous</button>
              <NavLink className="cta-button secondary" to="/services">
                Voir nos services
              </NavLink>
            </div>
          </div>
          <div className="description-separator" aria-hidden="true" />
          <div
            className="description-image"
            data-reveal
            style={{ "--reveal-delay": "150ms" }}
          >
            <img src={imageCoiffeur} alt="Portrait de Fadi" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Description;
