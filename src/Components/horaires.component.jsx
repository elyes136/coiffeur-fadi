import "../assets/style/horaires.css";

const Horaires = () => {
  return (
    <section
      id="horaires"
      className="horaires-page"
      data-reveal
      style={{ "--reveal-delay": "70ms" }}
    >
      <div
        className="horaires-container"
        data-reveal
        style={{ "--reveal-delay": "120ms" }}
      >
        <div
          className="horaires-header"
          dataa-reveal
          style={{ "--reveal-delay": "170ms" }}
        >
          <h2>Nos Horaires</h2>
        </div>
        <div className="horaires">
          <div
            className="horaire-row"
            data-reveal
            style={{ "--reveal-delay": "220ms" }}
          >
            <span className="day">Dimanche</span>
            <span className="time">Fermé</span>
          </div>

          <div
            className="horaire-row"
            data-reveal
            style={{ "--reveal-delay": "260ms" }}
          >
            <span className="day">Lundi</span>
            <span className="time">9h00 - 19h00</span>
          </div>

          <div
            className="horaire-row"
            data-reveal
            style={{ "--reveal-delay": "300ms" }}
          >
            <span className="day">Mardi</span>
            <span className="time">9h00 - 19h00</span>
          </div>

          <div
            className="horaire-row"
            data-reveal
            style={{ "--reveal-delay": "340ms" }}
          >
            <span className="day">Mercredi</span>
            <span className="time">9h00 - 19h00</span>
          </div>

          <div
            className="horaire-row"
            data-reveal
            style={{ "--reveal-delay": "380ms" }}
          >
            <span className="day">Jeudi</span>
            <span className="time">9h00 - 19h00</span>
          </div>

          <div
            className="horaire-row"
            data-reveal
            style={{ "--reveal-delay": "420ms" }}
          >
            <span className="day">Vendredi</span>
            <span className="time">9h00 - 19h00</span>
          </div>

          <div
            className="horaire-row"
            data-reveal
            style={{ "--reveal-delay": "460ms" }}
          >
            <span className="day">Samedi</span>
            <span className="time">10h00 - 18h00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horaires;
