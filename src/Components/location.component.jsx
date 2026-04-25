const Location = () => {
  return (
    <section
      className="location"
      data-reveal
      style={{ "--reveal-delay": "70ms" }}
    >
      <h2
        className="location-title"
        data-reveal
        style={{ "--reveal-delay": "120ms" }}
      >
        Notre emplacement
      </h2>
      <div
        className="location-map"
        data-reveal
        style={{ "--reveal-delay": "170ms" }}
      >
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.6809617072186!2d3.06569677667801!3d50.633043271627564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5c28d2c16a3%3A0x37399e2296b3e2c6!2sSalon%20Fadi%20Coiffure%20Femme!5e0!3m2!1sfr!2sfr!4v1777109989630!5m2!1sfr!2sfr"
            title="Emplacement de Coiffeur Fadi sur Google Maps"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
