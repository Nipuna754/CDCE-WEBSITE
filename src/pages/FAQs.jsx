import PageHero from "../components/PageHero";
import { faqs } from "../data/content";
import "../styles/inner-pages.css";

export default function FAQs() {
  return (
    <>
      <PageHero eyebrow="Help" title="Frequently asked questions">
        Common questions about applying, studying, and using CDCE's systems.
      </PageHero>

      <section className="content-section">
        <div className="wrap">
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item card" key={f.q}>
                <summary>{f.q}</summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
