// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faCalendarDays,
  } from "@fortawesome/free-solid-svg-icons";

// Import Data
import DataEvent from "../../data/event/EventPosterDetail.json";

const AllEventPoster = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parseEventDate = (dateStr) => {
    const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/g, '$1');
    let d = new Date(cleaned);
    if (!isNaN(d.getTime())) return d;
    const yearMatch = cleaned.match(/(\d{4})/);
    const year = yearMatch ? yearMatch[1] : new Date().getFullYear();
    const monthDayMatches = cleaned.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d+/gi);
    if (monthDayMatches) {
      const lastMatch = monthDayMatches[monthDayMatches.length - 1];
      d = new Date(`${lastMatch}, ${year}`);
      if (!isNaN(d.getTime())) return d;
    }
    return new Date(0);
  };

  const upcomingEvents = DataEvent.events.filter(event => {
    const registEndDate = new Date(event.RegistEndDate.replace(/(\d+)(st|nd|rd|th)/, '$1'));
    const eventDate = parseEventDate(event.DateAdTime);
    const isUpcoming = registEndDate >= today || eventDate >= today;
    return isUpcoming && event.EventCategory === "IYSA Event";
  });

  const hoverEffect = `
    .featured-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }
    .featured-item {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  `;

  return (
    <section id="All-Event-properties" className="AllEventPoster">
      <style>{hoverEffect}</style>
      <div className="container">
        <div className="featured-section-top">
          <div className="text-center">
            <h1 className="section-heading text-dark ">Our IYSA Events</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="featured-section-bottom  ">
          {upcomingEvents.map((eventt) => {
            return (
              <a href={`/Event/${eventt.id}`} key={eventt.id} className="featured-item shadow">
                <div className="featured-item-image">
                  <img src={eventt.image} alt="Featured" className="featured-img" />
                </div>
                <div className="content-wrapper" style={{ padding: '15px' }}>
                  <h3 className="text-dark" style={{ marginBottom: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>{eventt.title}</h3>
                  <p className="" style={{ marginBottom: '15px', color: '#555' }}>{eventt.EventType}</p>
                  <div className="deatils-short" style={{ display: 'block' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="featured-icon"
                        style={{ marginRight: '10px', color: '#007bff' }}
                      />
                      <p className="text-dark" style={{ margin: 0 }}>{eventt.Location}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="featured-icon"
                        style={{ marginRight: '10px', color: '#007bff' }}
                      />
                      <p className="text-dark" style={{ margin: 0 }}>{eventt.DateAdTime}</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AllEventPoster;
