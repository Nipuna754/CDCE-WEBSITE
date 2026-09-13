import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { downloadCategories } from "../data/content";
import "../styles/inner-pages.css";

export default function Downloads() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Downloads">
        Forms, handbooks, past papers and administrative documents, organized by category.
      </PageHero>

      <Reveal as="section" className="content-section">
        <div className="wrap">
          <div className="downloads-grid stagger">
            {downloadCategories.map((cat) => (
              <div className="download-cat card" key={cat.title}>
                <h3>{cat.title}</h3>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
