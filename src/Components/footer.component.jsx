import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaLocationArrow,
} from "react-icons/fa";
import "../assets/style/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">Fadi Studio</h2>
          <p className="footer-text">
            Salon de coiffure moderne et élégant à votre service.
          </p>
        </div>

        {/* Address */}
        <div className="footer-section">
          <div className="footer-address-header">
            <h3>Adresse</h3>
            <a
              href="https://maps.app.goo.gl/tDGYMy8H5FRT4WzM6"
              target="_blank"
              rel="noreferrer"
              className="location-link"
            >
              <FaLocationArrow className="location-icon" />
            </a>
          </div>
          <p>
            Salon Fadi Coiffure Femme
            <a
              href="https://maps.app.goo.gl/tDGYMy8H5FRT4WzM6"
              target="_blank"
              rel="noreferrer"
              className="address-container"
            >
              <br />
              163 Rue Pierre Mauroy
              <br />
              59800, Lille
            </a>
          </p>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h3>Suivez-nous</h3>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/coiffure_femme_fadi"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@fadifarrash"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok />
            </a>

            <a
              href="https://wa.me/33600000000"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fadi Studio. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
