import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section style={{ padding: "5rem 0", textAlign: "center" }}>
      <div className="wrap">
        <div className="eyebrow">404</div>
        <h1 style={{ fontSize: "2rem", margin: "0.5rem 0 1rem" }}>Page not found</h1>
        <p style={{ color: "var(--ink-soft)" }}>
          <Link className="btn btn-primary" to="/">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
