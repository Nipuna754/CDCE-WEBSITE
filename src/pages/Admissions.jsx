import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { externalSystems } from "../data/content";
import "../styles/inner-pages.css";

export default function Admissions() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="How to apply">
        Applications for the 2026 intake are open across degree, diploma and certificate programmes. Follow the
        steps below to apply online.
      </PageHero>

      <Reveal as="section" className="content-section">
        <div className="wrap">
          <h2>Application steps</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="step-date">Step 1</div>
              <h4>Check eligibility</h4>
              <p>Review the admission requirements for your chosen programme below before applying.</p>
            </div>
            <div className="timeline-item">
              <div className="step-date">Step 2</div>
              <h4>Apply online</h4>
              <p>Complete the application form through the Apply Online portal and upload scanned certificates.</p>
            </div>
            <div className="timeline-item">
              <div className="step-date">Step 3</div>
              <h4>Pay the application fee</h4>
              <p>Fees vary by programme — see the Programmes page for exact amounts where published.</p>
            </div>
            <div className="timeline-item">
              <div className="step-date">Step 4</div>
              <h4>Await confirmation</h4>
              <p>Selected applicants are notified by email and through the Notices page.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="content-section alt">
        <div className="wrap">
          <h2>Admission requirements</h2>
          <div className="req-grid stagger">
            <div className="req-card card">
              <h4>Degree programmes</h4>
              <p>G.C.E. (A/L) with three passes, or an equivalent qualification approved by the Senate.</p>
            </div>
            <div className="req-card card">
              <h4>Diploma programmes</h4>
              <p>Varies by diploma — typically G.C.E. (A/L) or (O/L) plus relevant experience. See each programme.</p>
            </div>
            <div className="req-card card">
              <h4>Certificate courses</h4>
              <p>Open entry for most certificate courses; some require a related prior certificate or O/L pass.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="content-section">
        <div className="wrap">
          <h2>Important dates — 2026 intake</h2>
          <div className="card" style={{ padding: "0.5rem 1.5rem" }}>
            <ul className="plain-list">
              <li>Applications open — 1 June 2026</li>
              <li>Applications close — 30 August 2026</li>
              <li>Orientation — 14 September 2026</li>
              <li>Classes begin — 1 October 2026</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="cta-band reveal-zoom">
        <div>
          <h2>Ready to apply?</h2>
          <p>Applications close 30 August 2026 — apply online in a few minutes.</p>
        </div>
        <a className="btn btn-gold" href={externalSystems.applyOnline} target="_blank" rel="noreferrer">
          Apply online for 2026
        </a>
      </Reveal>
    </>
  );
}
