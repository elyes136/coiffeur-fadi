import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <NavLink
          to="/"
          className="logo-link"
          aria-label="Logo de Coiffeur Fadi"
        >
          <span className="logo-text">Coiffeur Fadi</span>
        </NavLink>
      </div>

      {/* Burger */}
      <button className="burger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* ONE unified menu */}
      <nav
        className={`nav-links ${open ? "active" : ""}`}
        aria-label="Navigation principale"
      >
        <NavLink
          to="/"
          end
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/services"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Tarifs
        </NavLink>

        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) => (isActive ? "nav-link" : "nav-link")}
        >
          Réservation
        </NavLink>
        <NavLink
          to="/#horaires"
          onClick={() => setOpen(false)}
          className={({ isActive }) => (isActive ? "nav-link" : "nav-link")}
        >
          Nos Horaires
        </NavLink>

        <NavLink
          to="/#contact"
          onClick={() => setOpen(false)}
          className={({ isActive }) => (isActive ? "nav-link" : "nav-link")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
