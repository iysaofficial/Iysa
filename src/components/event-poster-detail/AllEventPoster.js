// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faCalendarDays,
  } from "@fortawesome/free-solid-svg-icons";

// Import Data
import DataEvent from "../../data/event/EventPosterDetail.json";


const AllEventPoster = ({ maxItems }) => {
  const eventsToShow = maxItems ? DataEvent.events.slice(-maxItems) : DataEvent.events;

  return (
    <section id="All-Event-properties" className="AllEventPoster">
      <div className="container">
        <div className="featured-section-top">
          <div className="text-center">
            <h1 className="section-heading text-dark ">Our IYSA Events</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="featured-section-bottom  ">
          {eventsToShow.map((eventt) => {
            return (
              <a href={`/Event/${eventt.id}`} key={eventt.id} className="featured-item shadow">
                <div className="featured-item-image">
                  <img src={eventt.image} alt="Featured" className="featured-img" />
                </div>
                <div className="content-wrapper">
                  <div key={eventt.id}></div>
                  <h3 className="text-dark">{eventt.title}</h3>
                  <p className="">{eventt.EventType}</p>
                  <div className="deatils-short">
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="featured-icon"
                      />
                      <p className="text-dark">{eventt.Location}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="featured-icon"
                      />
                      <p className="text-dark">{eventt.DateAdTime}</p>
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