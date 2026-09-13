import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { degreeProgrammes, diplomaProgrammes, certificateProgrammes, externalSystems } from "../data/content";
import "../styles/programmes.css";

function ProgrammeSection({ title, count, items }) {
  return (
    <Reveal as="section" className="prog-section">
      <div className="wrap">
        <div className="sec-head">
          <h2>{title}</h2>
          <span className="count-badge">{count}</span>
        </div>
        <div className="prog-grid">
          {items.map((p) => (
            <div className="prog-card" key={p.slug}>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <div className="pill-row">
                <span className="pill">{p.duration}</span>
                <span className="pill">{p.medium}</span>
                {p.fee && <span className="pill fee">{p.fee}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Programmes() {
  return (
    <>
      <PageHero eyebrow="Study at CDCE" title="Academic programmes">
        Accredited external degrees, professional diplomas and short certificate courses — designed for working
        learners across Sri Lanka, taught in Sinhala, Tamil and English.
      </PageHero>

      <ProgrammeSection title="Degree programmes" count={degreeProgrammes.length} items={degreeProgrammes} />
      <ProgrammeSection title="Diploma programmes" count={diplomaProgrammes.length} items={diplomaProgrammes} />
      <ProgrammeSection title="Certificate programmes" count={certificateProgrammes.length} items={certificateProgrammes} />

      <Reveal className="cta-band">
        <div>
          <h2>Ready to apply?</h2>
          <p>New intake applications close 30 August 2026 — apply online in a few minutes.</p>
        </div>
        <a className="btn btn-gold" href={externalSystems.applyOnline} target="_blank" rel="noreferrer">
          Apply online for 2026
        </a>
      </Reveal>
    </>
  );
}
