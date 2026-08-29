import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, externalSystems } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="utility">
        <div className="wrap">
          <div className="utility-links">
            <a href={externalSystems.uop} target="_blank" rel="noreferrer">
              University of Peradeniya
            </a>
            <a href={externalSystems.webmail} target="_blank" rel="noreferrer">
              Webmail
            </a>
            <a href={externalSystems.studentMis} target="_blank" rel="noreferrer">
              Student login
            </a>
          </div>
          <div className="utility-links">
            <a href="#">Sinhala</a>
            <a href="#">Tamil</a>
            <a href="#" style={{ color: "var(--ink)" }}>
              English
            </a>
          </div>
        </div>
      </div>

      <header className="site">
        <div className="wrap site-head">
          <NavLink to="/" className="brand">
            <img className="crest" src="/images/crest.png" alt="CDCE crest" />
            <div className="brand-text">
              <div className="name">Centre for Distance and Continuing Education</div>
              <div className="sub">University of Peradeniya</div>
            </div>
          </NavLink>

          <div className="head-actions">
            <button className="icon-btn" aria-label="Search">
              ⌕
            </button>
            <button
              className="icon-btn menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : "≡"}
            </button>
          </div>
        </div>

        <div className="nav-bar">
          <nav className="main wrap">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mobile-nav-wrap" data-open={open}>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
