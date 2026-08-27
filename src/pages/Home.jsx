import { Link } from "react-router-dom";
import { notices, events, news, externalSystems } from "../data/content";
import "../styles/home.css";

const quickLinks = [
  {
    to: "/programmes",
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
          <div className="hero-main">
            <div className="hero-tag">
              <span className="dot" /> Admissions open · closes 30 August 2026
            </div>
            <h1>Distance and continuing education, on your schedule.</h1>
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
          </div>
          <div className="hero-side">
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
            <h2>Study with CDCE</h2>
          </div>
          <div className="study-grid">
            <Link to="/programmes" className="study-card tier-degree">
              <div>
                <div className="lvl">Degrees</div>
                <h3>External degree programmes</h3>
              </div>
              <div>
                <div className="count">
                  2 <span>programmes — BA, BBA</span>
                </div>
                <span className="cta-link">View degree programmes →</span>
              </div>
            </Link>
            <Link to="/programmes" className="study-card tier-diploma">
              <div>
                <div className="lvl">Diplomas</div>
                <h3>Professional diploma programmes</h3>
              </div>
              <div>
                <div className="count">
                  5 <span>diplomas</span>
                </div>
                <span className="cta-link">View diploma programmes →</span>
              </div>
            </Link>
            <Link to="/programmes" className="study-card tier-cert">
              <div>
                <div className="lvl">Certificates</div>
                <h3>Short certificate courses</h3>
              </div>
              <div>
                <div className="count">
                  2 <span>certificate courses</span>
                </div>
                <span className="cta-link">View certificate courses →</span>
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
