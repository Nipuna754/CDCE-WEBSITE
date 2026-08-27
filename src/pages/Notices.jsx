import PageHero from "../components/PageHero";
import { notices } from "../data/content";
import "../styles/inner-pages.css";

export default function Notices() {
  return (
    <>
      <PageHero eyebrow="Notices" title="Notices and announcements">
        Official notices from the Centre — examination timetables, application deadlines, and administrative
        announcements, most recent first.
      </PageHero>

      <section className="content-section">
        <div className="wrap">
          <div className="notice-full-list">
            {notices.map((n) => (
              <article className="notice-full-card card" key={n.title}>
                <div className="meta-row">
                  <span className="date">
                    {new Date(n.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
                  </span>
                  <span className="tag">{n.tag}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
