import { Link } from "react-router-dom";
import { contact, externalSystems } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site">
      <div className="wrap foot-grid">
        <div className="foot-col">
          <div className="foot-brand">
            <img className="crest" style={{ width: 34, height: 34 }} src="/images/crest.png" alt="CDCE crest" />
            <div className="name">CDCE, University of Peradeniya</div>
          </div>
          <p>{contact.address}</p>
          <p>
            {contact.phones[1]} · {contact.emails[0]}
          </p>
          <div className="foot-social">
            <a href="https://www.facebook.com/cdceuop" target="_blank" rel="noreferrer" aria-label="Facebook">
              f
            </a>
            <a
              href="https://www.youtube.com/channel/UCXWfo4jpnxW_pQ_R-Cm0RTQ/videos"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              ▶
            </a>
            <a href="https://twitter.com/cdceuop" target="_blank" rel="noreferrer" aria-label="X / Twitter">
              x
            </a>
          </div>
        </div>
        <div className="foot-col">
          <h5>Study</h5>
          <Link to="/programmes">Degree programmes</Link>
          <Link to="/programmes">Diploma programmes</Link>
          <Link to="/programmes">Certificate programmes</Link>
          <Link to="/admissions">Admissions</Link>
        </div>
        <div className="foot-col">
          <h5>Resources</h5>
          <Link to="/notices">Notices and announcements</Link>
          <Link to="/examinations">Examinations</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="foot-col">
          <h5>Student services</h5>
          <a href={externalSystems.studentMis} target="_blank" rel="noreferrer">
            Student MIS ↗
          </a>
          <a href={externalSystems.lmsBba} target="_blank" rel="noreferrer">
            BBA LMS ↗
          </a>
          <a href={externalSystems.lmsDiploma} target="_blank" rel="noreferrer">
            Diploma LMS ↗
          </a>
          <a href={externalSystems.uop} target="_blank" rel="noreferrer">
            University of Peradeniya ↗
          </a>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {year} Centre for Distance and Continuing Education, University of Peradeniya. All rights reserved.</span>
        <span>
          <Link to="/faqs">Accessibility</Link> · <Link to="/contact">Privacy</Link>
        </span>
      </div>
    </footer>
  );
}
