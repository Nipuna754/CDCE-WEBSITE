import PageHero from "../components/PageHero";
import { externalSystems } from "../data/content";
import "../styles/inner-pages.css";

const services = [
  {
    title: "Student MIS",
    desc: "Registration, student records, and results — the CDCE Online Application & student information system.",
    href: externalSystems.studentMis,
  },
  {
    title: "BBA LMS",
    desc: "Course materials, coursework and communication for the BBA (External) programme.",
    href: externalSystems.lmsBba,
  },
  {
    title: "Diploma / Certificate LMS",
    desc: "e-Learning platform for diploma and certificate cohorts.",
    href: externalSystems.lmsDiploma,
  },
  {
    title: "University Webmail",
    desc: "Official university email for staff and students.",
    href: externalSystems.webmail,
  },
];

export default function StudentServices() {
  return (
    <>
      <PageHero eyebrow="Student services" title="Student services">
        CDCE's academic systems are run separately from this website. These links take you directly to the correct
        platform for each service.
      </PageHero>

      <section className="content-section">
        <div className="wrap">
          <div className="service-grid">
            {services.map((s) => (
              <a className="service-card card" href={s.href} target="_blank" rel="noreferrer" key={s.title}>
                <span className="badge-external">External system ↗</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
