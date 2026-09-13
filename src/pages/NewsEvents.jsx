import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { news, events } from "../data/content";
import "../styles/inner-pages.css";
import "../styles/home.css";

export default function NewsEvents() {
  return (
    <>
      <PageHero eyebrow="News & events" title="News and events">
        Recent activity, ceremonies, and what's coming up at CDCE.
      </PageHero>

      <Reveal as="section" className="content-section">
        <div className="wrap">
          <h2>Upcoming events</h2>
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
      </Reveal>

      <Reveal as="section" className="content-section alt">
        <div className="wrap">
          <h2>Recent news</h2>
          <div className="news-grid">
            {news.map((item) => (
              <div className="news-card card" key={item.title}>
                <img className="news-thumb" src={item.image} alt="" />
                <div className="news-body">
                  <span className="date">
                    {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
