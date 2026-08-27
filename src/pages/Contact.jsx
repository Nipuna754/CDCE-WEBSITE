import PageHero from "../components/PageHero";
import { contact } from "../data/content";
import "../styles/inner-pages.css";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact CDCE">
        Reach the Centre directly — this page replaces the old contact popup with a real, linkable page.
      </PageHero>

      <section className="content-section">
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
      </section>
    </>
  );
}
