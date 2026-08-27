export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}
