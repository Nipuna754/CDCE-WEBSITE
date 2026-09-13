import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { contact } from "../data/content";
import "../styles/inner-pages.css";

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = values.subject.trim() || `Message from ${values.name}`;
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-confirm">
        <div className="form-confirm-icon">✓</div>
        <h3>Opening your email app</h3>
        <p>Your message to {contact.emails[0]} is ready to send from there. Didn't open? Email us directly instead.</p>
        <button className="btn btn-ghost" onClick={() => setSent(false)}>
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          type="text"
          value={values.name}
          onChange={update("name")}
          placeholder="Your full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
        />
        {errors.name && (
          <span className="form-error" id="cf-name-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          value={values.email}
          onChange={update("email")}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
        />
        {errors.email && (
          <span className="form-error" id="cf-email-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>
      <div className="form-row">
        <label htmlFor="cf-subject">Subject</label>
        <input id="cf-subject" type="text" value={values.subject} onChange={update("subject")} placeholder="What's this about?" />
      </div>
      <div className="form-row">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          rows="5"
          value={values.message}
          onChange={update("message")}
          placeholder="How can we help?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
        />
        {errors.message && (
          <span className="form-error" id="cf-message-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Send message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact CDCE">
        Reach the Centre directly — this page replaces the old contact popup with a real, linkable page.
      </PageHero>

      <Reveal as="section" className="content-section">
        <div className="wrap contact-grid">
          <div className="contact-card card">
            <div className="contact-row">
              <div className="ico">@</div>
              <div>
                <h4>Email</h4>
                <p>{contact.emails.join(", ")}</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="ico">☎</div>
              <div>
                <h4>Phone</h4>
                <p>
                  Operator: {contact.phones[0]} · General: {contact.phones[1]}
                </p>
                <p>Director's Office: {contact.directorPhone}</p>
                <p>Assistant Bursar: {contact.bursarPhone}</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="ico">✉</div>
              <div>
                <h4>Fax</h4>
                <p>{contact.fax}</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="ico">⌂</div>
              <div>
                <h4>Address</h4>
                <p>{contact.address}</p>
              </div>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              title="CDCE location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.582%2C7.252%2C80.612%2C7.268&layer=mapnik&marker=7.2599%2C80.5977"
              loading="lazy"
            />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="content-section alt">
        <div className="wrap">
          <div className="form-section-head">
            <div className="eyebrow">Send a message</div>
            <h2>We read everything</h2>
            <p>Fill this in and it opens a pre-filled email in your own mail app — nothing is sent from this page directly.</p>
          </div>
          <div className="card contact-form-card">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </>
  );
}
