import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import EventPosterDetail from "../../data/event/EventPosterDetail.json";
import EventPosterImage from "./EventPosterImage";
import EventDetailsCard from "./EventDetailsCard";
import EventVenueCard from "./EventVenueCard";

function EventPoster() {
  const [showContent, setShowContent] = useState(false);
  const { id } = useParams();
  const eventId = parseInt(id, 10);
  const event = EventPosterDetail.events.find((e) => e.id === eventId);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <section className="event-detail-section">
      <div className="container">
        <div className="text-start mb-5 mt-5">
          <a className="btn btn-primary" href="/AllEventPage">
            <FontAwesomeIcon icon={faArrowLeft} /> Previous Page
          </a>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <EventPosterImage image={event.image} title={event.title} />
            <div className="event-description mt-4">
              <h1 className="fw-bolder">{event.title}</h1>
              <p>🌐 International Call for Young Innovators!</p>
              <p>
                The {event.title} is officially open for registration!
              </p>
              <p>
                💡 Join a prestigious global platform to present your
                groundbreaking ideas, meet fellow innovators, and bring
                your inventions to the world stage. 🌎
              </p>
              <p>Save the date ‼️</p>
              <ul>
                <li>
                  <strong>Registration Deadline : </strong>
                  {event.RegistEndDate}
                </li>
                <li>
                  <strong>Event Date : </strong> {event.DateAdTime}
                </li>
              </ul>
              <p>Registration Link:!!</p>
              <p>📱Come on, register now 👇🏻</p>
              <p>
                website : <span>{event.LinkRegist}</span>
              </p>
              <p className="hastag">{event.Hastag}</p>
            </div>
          </div>
          <div className="col-lg-5">
            <EventDetailsCard event={event} />
            <EventVenueCard
              event={event}
              showContent={showContent}
              toggleContent={toggleContent}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventPoster;
