import PageHero from "../components/PageHero";
import { boardOfManagement } from "../data/content";
import "../styles/inner-pages.css";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About CDCE" title="Centre for Distance and Continuing Education">
        Established 9 April 2007, building on a legacy that began in 1964 when the University of Peradeniya became
        the first institution in Sri Lanka to offer external degrees.
      </PageHero>

      <section className="content-section">
        <div className="wrap two-col">
          <div>
            <h2>Vision &amp; mission</h2>
            <p>
              CDCE exists to provide equal opportunities for all aspiring to further their career goals through
              Open and Distance Learning (ODL). The Centre conducts degree programmes in Sinhala, Tamil and English,
              reaching learners of all ethnic groups from every part of the country.
            </p>
          </div>
          <div>
            <h2>History</h2>
            <p>
              The University of Peradeniya pioneered external degrees in Sri Lanka in 1964. The Centre for Distance
              and Continuing Education was formally established in 2007 to formalize and expand this tradition of
              open access to university-level education for working adults and learners outside the conventional
              campus system.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="wrap">
          <h2>Director's message</h2>
          <div className="card quote-card">
            <p>
              "CDCE remains committed to opening the doors of higher education to every Sri Lankan learner, regardless
              of location or circumstance. Our programmes are built for people balancing work, family and study — and
              every part of this Centre exists to support that balance."
            </p>
            <span className="quote-attr">— Director, CDCE (message pending final copy)</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="wrap">
          <h2>Board of Management</h2>
          <div className="card" style={{ padding: "0.5rem 1.5rem" }}>
            <ul className="plain-list">
              {boardOfManagement.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
