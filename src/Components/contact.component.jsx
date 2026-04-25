const Contact = () => {
  return (
    <section
      className="contact
    "
      data-reveal
      style={{ "--reveal-delay": "70ms" }}
    >
      <div className="contact-container">
        <div
          className="contact-header"
          data-reveal
          style={{ "--reveal-delay": "120ms" }}
        >
          <h2 className="contact-title">Contactez-nous</h2>
        </div>
        <form className="contact-form">
          <div
            className="form-group"
            data-reveal
            style={{ "--reveal-delay": "170ms" }}
          >
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div
            className="form-group"
            data-reveal
            style={{ "--reveal-delay": "220ms" }}
          >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div
            className="form-group"
            data-reveal
            style={{ "--reveal-delay": "250ms" }}
          >
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="06 00 00 00 00"
            />
          </div>
          <div
            className="form-group"
            data-reveal
            style={{ "--reveal-delay": "270ms" }}
          >
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="cta-button">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
