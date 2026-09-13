import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { notices } from "../data/content";
import "../styles/inner-pages.css";

const examNotices = notices.filter((n) => n.tag === "Examinations");

export default function Examinations() {
  return (
    <>
      <PageHero eyebrow="Examinations" title="Examinations">
        Timetables, results, and examination procedures for all CDCE degree, diploma and certificate programmes.
      </PageHero>

      <Reveal as="section" className="content-section">
        <div className="wrap two-col">
          <div>
            <h2>Timetables</h2>
            <div className="card" style={{ padding: "0.5rem 1.5rem" }}>
              <ul className="plain-list">
                {examNotices.map((n) => (
                  <li key={n.title}>{n.title}</li>
                ))}
                <li>BBA end-of-semester examination — schedule pending</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Results</h2>
            <p>
              Results are released programme by programme and announced under Notices. Once published, students can
              check their results through the Student MIS.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="content-section alt">
        <div className="wrap">
          <h2>Examination procedures</h2>
          <div className="req-grid">
            <div className="req-card card">
              <h4>Manual of procedures</h4>
              <p>Manual of Procedures for Conduct of Undergraduate Examinations — effective 29 October 2023.</p>
            </div>
            <div className="req-card card">
              <h4>Medical leave</h4>
              <p>Students absent for medical reasons must follow the published medical leave procedure.</p>
            </div>
            <div className="req-card card">
              <h4>Repeat examinations</h4>
              <p>Repeat exam applications are announced under Notices with a fixed closing date each cycle.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
