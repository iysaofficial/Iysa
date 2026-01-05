// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDays} from "@fortawesome/free-solid-svg-icons";

// Import Data JSON
import EventPosterData from "../../data/event/EventPosterDetail.json";

const Event = () => {
  const limitedData = EventPosterData.events.slice(-5); // membatasi data hingga 6

  return (
    <section id="featured-properties">
      <div className="container">
        <div className="featured-section-top text-center">
          <div className="text-center">
            <h1 className="section-heading">Our IYSA Events<div className='underline'><span></span></div></h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="featured-section-bottom ">
          {limitedData.map((event) => {
            return (
              <a href={`/Event/${event.id}`} key={event.id} className="featured-item shadow ">
                <div className="featured-item-image">
                  <img src={event.image} alt="Featured" className="featured-img" />
                </div>
                <div className="content-wrapper">
                  <div key={event.id}></div>
                  <h3 className="text-dark">{event.title}</h3>
                  <p className="">{event.EventType}</p>
                  <div className="deatils-short">
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="featured-icon"
                      />
                      <p className="text-dark">{event.Location}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="featured-icon"
                      />
                      <p className="text-dark">{event.DateAdTime}</p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <br />
        <a href="/AllEventPage" className="btn">Load More</a>
      </div>

    </section>
  );
};
export default Event;
