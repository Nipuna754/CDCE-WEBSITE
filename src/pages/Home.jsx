import { Link } from "react-router-dom";
import {
  notices,
  events,
  news,
  externalSystems,
  degreeProgrammes,
  diplomaProgrammes,
  certificateProgrammes,
} from "../data/content";
import "../styles/home.css";

const tickerItems = [
  ...degreeProgrammes.map((p) => p.name.replace(/\s*—.*/, "")),
  ...diplomaProgrammes.map((p) => p.name),
  ...certificateProgrammes.map((p) => p.name),
];

const quickLinks = [
  {
    to: "/programmes",
    category: "Study",
    title: "Academic programmes",
    desc: "Degrees, diplomas and certificates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M4 5.5c2.5-1.3 5.5-1.3 8 0v13c-2.5-1.3-5.5-1.3-8 0v-13Z" />
        <path d="M20 5.5c-2.5-1.3-5.5-1.3-8 0v13c2.5-1.3 5.5-1.3 8 0v-13Z" />
      </svg>
    ),
  },
  {
    to: externalSystems.applyOnline,
    external: true,
    category: "Admissions",
    title: "Apply now",
    desc: "Current intake, open until 30 Aug",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M4 20l1-4L16 5l3 3L8 19l-4 1Z" />
        <path d="M14 7l3 3" />
      </svg>
    ),
  },
  {
    to: "/notices",
    category: "Announcements",
    title: "Notices",
    desc: "Exam schedules and announcements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M6 16v-4.5a6 6 0 0 1 12 0V16l1.5 2.5h-15L6 16Z" />
        <path d="M10 19.5a2 2 0 0 0 4 0" />
      </svg>
    ),
  },
  {
    to: "/examinations",
    category: "Academics",
    title: "Examinations",
    desc: "Timetables, results, procedures",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
        <path d="M4 10h16M8 3.5v3M16 3.5v3" />
      </svg>
    ),
  },
  {
    to: "/downloads",
    category: "Resources",
    title: "Downloads",
    desc: "Forms, handbooks, past papers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M12 4v11m0 0-4-4m4 4 4-4" />
        <path d="M4.5 18.5v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1" />
      </svg>
    ),
  },
  {
    to: externalSystems.studentMis,
    external: true,
    category: "Student services",
    title: "Student MIS",
    desc: "Registration and student records",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="8.5" r="3.3" />
        <path d="M5 20c1.2-4 4-5.8 7-5.8s5.8 1.8 7 5.8" />
      </svg>
    ),
  },
  {
    to: externalSystems.lmsBba,
    external: true,
    category: "E-learning",
    title: "LMS",
    desc: "Course materials and coursework",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="3.5" y="4.5" width="17" height="12" rx="1.5" />
        <path d="M9 20h6M12 16.5V20" />
        <path d="M10.5 8.3v4.4l3.8-2.2-3.8-2.2Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    to: "/faqs",
    category: "Help",
    title: "FAQs",
    desc: "Common questions, answered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="8.3" />
        <path d="M9.6 9.3a2.4 2.4 0 1 1 3.6 2.1c-.8.5-1.2 1-1.2 2" />
        <path d="M12 16.7v.1" />
      </svg>
    ),
  },
];

function QuickCard({ item }) {
  const content = (
    <>
      <div className="ico">{item.icon}</div>
      <div className="cat">{item.category}</div>
      <div className="ttl">{item.title}</div>
      <div className="dsc">{item.desc}</div>
    </>
  );
  const className = `quick-card${item.external ? " external" : ""}`;
  return item.external ? (
    <a className={className} href={item.to} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <Link className={className} to={item.to}>
      {content}
    </Link>
  );
}

function formatDay(dateStr) {
  const d = new Date(dateStr);
  return { day: d.getDate(), month: d.toLocaleString("en", { month: "short" }) };
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-main fade-up">
            <div className="hero-tag">
              <span className="dot" /> Admissions open · closes 30 August 2026
            </div>
            <h1 className="hero-headline">
              <span>Distance Learning</span>
              <em>Without Limits</em>
              <span>Since 1964</span>
            </h1>
            <p>
              Degree, diploma and certificate programmes taught in Sinhala, Tamil and English — open to learners
              across Sri Lanka since 2007.
            </p>
            <div className="hero-cta">
              <a className="btn btn-gold" href={externalSystems.applyOnline} target="_blank" rel="noreferrer">
                Apply now
              </a>
              <Link className="btn btn-ghost-invert" to="/programmes">
                Explore programmes
              </Link>
            </div>
            <div className="hero-highlights">
              <span>UGC-recognised external degrees</span>
              <span>Interactive LMS &amp; online MIS</span>
              <span>Admissions open · 2026</span>
            </div>
          </div>
          <div className="hero-side fade-up-delay-1">
            <div className="notice-card">
              <div className="head-row">
                <h3>Latest notices</h3>
                <Link to="/notices">All notices →</Link>
              </div>
              {notices.slice(0, 3).map((n) => (
                <div className="notice-item" key={n.title}>
                  <span className="date">
                    {new Date(n.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                  </span>
                  <Link className="t" to="/notices">
                    {n.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((name, i) => (
            <span className="ticker-item" key={i}>
              {name} <span className="spark">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="commitment">
        <div className="wrap commitment-grid">
          <div className="commitment-item">
            <div className="ci-num">01</div>
            <h3>Equal opportunity</h3>
            <p>We open the doors of higher education to every aspiring learner, regardless of geography or background.</p>
          </div>
          <div className="commitment-item">
            <div className="ci-num">02</div>
            <h3>Trilingual reach</h3>
            <p>Programmes delivered in Sinhala, Tamil and English, so that learning belongs to every community.</p>
          </div>
          <div className="commitment-item">
            <div className="ci-num">03</div>
            <h3>Lifelong learning</h3>
            <p>From external degrees to professional diplomas and short courses, we support continuing education at every stage.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats-grid">
          <div className="stat-item">
            <div className="stat-num">1964</div>
            <div className="stat-label">External degrees since</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2007</div>
            <div className="stat-label">CDCE established</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">9</div>
            <div className="stat-label">Academic programmes</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3</div>
            <div className="stat-label">Languages of study</div>
          </div>
        </div>
      </section>

      <section className="quick">
        <div className="wrap">
          <div className="section-head">
            <h2>Quick access</h2>
          </div>
          <div className="quick-grid">
            {quickLinks.map((item) => (
              <QuickCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="split wrap">
        <div>
          <div className="section-head">
            <h2>Notices and announcements</h2>
            <Link className="see-all" to="/notices">
              Browse all →
            </Link>
          </div>
          <div className="list-card card">
            {notices.map((n) => {
              const { day, month } = formatDay(n.date);
              return (
                <div className="list-row" key={n.title}>
                  <div className="datebox">
                    <div className="d">{day}</div>
                    <div className="m">{month}</div>
                  </div>
                  <div className="body">
                    <span className="tag">{n.tag}</span>
                    <h4>
                      <Link to="/notices">{n.title}</Link>
                    </h4>
                    <p>{n.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="section-head">
            <h2>Upcoming events</h2>
            <Link className="see-all" to="/news-events">
              Calendar →
            </Link>
          </div>
          <div className="list-card card">
            {events.map((e) => (
              <div className="event-row" key={e.title}>
                <div className="datebox">
                  <div className="m">{e.month}</div>
                  <div className="d">{e.day}</div>
                </div>
                <div className="body">
                  <h4>{e.title}</h4>
                  <p>{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="study">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ color: "var(--on-brand)", opacity: 0.85 }}>
                Study with CDCE
              </div>
              <h2>Choose your path to a recognised qualification</h2>
            </div>
          </div>
          <div className="study-grid">
            <Link to="/programmes" className="study-card">
              <div className="lvl">Degrees</div>
              <h3>Bachelor's degrees</h3>
              <p>External BA &amp; BBA degrees delivered in three languages.</p>
              <div className="study-card-foot">
                <span className="count">2</span>
                <span className="cta-link">Programmes →</span>
              </div>
            </Link>
            <Link to="/programmes" className="study-card">
              <div className="lvl">Diplomas</div>
              <h3>Professional diplomas</h3>
              <p>Diplomas spanning management, library science, IT and lab technology.</p>
              <div className="study-card-foot">
                <span className="count">5</span>
                <span className="cta-link">Programmes →</span>
              </div>
            </Link>
            <Link to="/programmes" className="study-card">
              <div className="lvl">Certificates</div>
              <h3>Short certificates</h3>
              <p>Short skill-building certificate and language courses.</p>
              <div className="study-card-foot">
                <span className="count">2</span>
                <span className="cta-link">Programmes →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="wrap">
          <div className="section-head">
            <h2>News and highlights</h2>
            <Link className="see-all" to="/news-events">
              More news →
            </Link>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <Link className="news-card card" to="/news-events" key={item.title}>
                <img className="news-thumb" src={item.image} alt="" />
                <div className="news-body">
                  <span className="date">
                    {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
