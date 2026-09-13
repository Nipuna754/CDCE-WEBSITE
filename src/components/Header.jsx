import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks, externalSystems } from "../data/content";
import SearchModal from "./SearchModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const [mobileNavHeight, setMobileNavHeight] = useState(0);

  useEffect(() => {
    if (!mobileNavRef.current) return;
    setMobileNavHeight(open ? mobileNavRef.current.scrollHeight : 0);
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

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
            <button className="icon-btn search-btn" aria-label="Search" title="Search (⌘K)" onClick={() => setSearchOpen(true)}>
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
          <div className="wrap nav-bar-row">
            <nav className="main">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <a className="btn btn-gold nav-cta" href={externalSystems.applyOnline} target="_blank" rel="noreferrer">
              Apply now
            </a>
          </div>
        </div>

        <div className="mobile-nav-wrap" style={{ maxHeight: mobileNavHeight }}>
          <nav className="mobile-nav" ref={mobileNavRef}>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
