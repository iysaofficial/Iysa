// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDays} from "@fortawesome/free-solid-svg-icons";

// Import Data JSON
import EventPosterData from "../../data/event/EventPoster.json";

const Event = () => {
  const limitedData = EventPosterData.event.slice(0, 6); // membatasi data hingga 6
  return (
    <section id="featured-properties">
      <div className="container">
        <div className="featured-section-top text-center">
          <div className="text-center">
            <h1 className="section-heading">Our Event<div className='underline'><span></span></div></h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="featured-section-bottom ">
          {limitedData.map((EventPosterData) => {
            return (
              <a href={EventPosterData.link} className="featured-item shadow ">
                <div className="featured-item-image">
                  <img src={EventPosterData.image} alt="Featured" className="featured-img" />
                </div>
                <div className="content-wrapper">
                  <div key={EventPosterData.id}></div>
                  <h3 className="text-dark">{EventPosterData.title}</h3>
                  <p className="">{EventPosterData.level}</p>
                  <div className="deatils-short">
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="featured-icon"
                      />
                      <p className="text-dark">{EventPosterData.location}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="featured-icon"
                      />
                      <p className="text-dark">{EventPosterData.date}</p>
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
