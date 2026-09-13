import { useEffect, useRef, useState } from "react";
import PageHero from "../components/PageHero";
import { faqs } from "../data/content";
import "../styles/inner-pages.css";

function FaqItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    setMaxHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div className="faq-item card">
      <button className="faq-summary" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <svg
          className="faq-chevron"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="18"
          height="18"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="faq-collapse" style={{ maxHeight }}>
        <p className="faq-answer" ref={contentRef}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQs() {
  return (
    <>
      <PageHero eyebrow="Help" title="Frequently asked questions">
        Common questions about applying, studying, and using CDCE's systems.
      </PageHero>

      <section className="content-section">
        <div className="wrap">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
