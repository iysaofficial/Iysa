import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  faLocationDot,
  faPlus,
  faMinus,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquarePinterest,
} from "@fortawesome/free-brands-svg-icons";
import EventPosterDetail from "../../data/event/EventPosterDetail.json";

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
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper">
          <section>
            <div className="event-poster col-12 text-center">
              <div className="text-start mb-5">
                <a className="btn btn-primary" href="/AllEventPage">
                  <FontAwesomeIcon icon={faArrowLeft} /> Previous Page
                </a>
              </div>
              <img src={event.image} alt="poster" />
            </div>
            <br />
            <br />
            <div className="main-colom row col-12 mt-5 mb-5 mx-auto">
              <div className="colom-left col-md-8 mt-2">
                <h1 className="fw-bolder">{event.title}</h1>
                <p>🌐 International Call for Young Innovators!</p>
                <p>
                  The {event.title} is officially open for registration!
                </p>
                <br />
                <p>
                  💡 Join a prestigious global platform to present your
                  groundbreaking ideas, meet fellow innovators, and bring
                  your inventions to the world stage. 🌎
                </p>
                <br />
                <p>Save the date ‼️</p>
                <ul>
                  <li>
                    <strong>📍Registration Deadline : </strong>
                    {event.RegistEndDate}
                  </li>
                  <li>
                    <strong>📍Event Date : </strong> {event.DateAdTime}
                  </li>
                </ul>
                <br />
                <p>Registration Link:!!</p>
                <p>📱Come on, register now 👇🏻</p>
                <p>
                  website : <p>{event.LinkRegist}</p>
                </p>
                <a
                  className="btn btn-primary mb-4"
                  href={event.LinkRegist}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
                <br />
                <p className="hastag">{event.Hastag}</p>
                <br />
              </div>
              <div className="colom-right col-md-4 text-center text-md-start">
                <button className="btn btn-primary shadow mt-2">
                  About The Event
                </button>
                <br />
                <br />
                <h4 className="fw-bolder">Date and Time</h4>
                <p>{event.DateAdTime}</p>
                <br />
                <h4 className="fw-bolder">Registration End Date</h4>
                <p>{event.RegistEndDate}</p>
                <br />
                <h4 className="fw-bolder">Location</h4>
                <p>{event.Location}</p>
                <br />
                <h4 className="fw-bolder">Event Types</h4>
                <p>{event.EventType}</p>
                <br />
                <h4 className="fw-bolder">Event Category</h4>
                <p>{event.EventCategory}</p>
                <br />
                <div className="event-share">
                  <h4 className="fw-bolder">Share With Friends</h4>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    title="Share this page on Facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareFacebook}
                      style={{ color: "#1b56bb" }}
                      className="event-share-logo"
                    />
                  </a>
                  <a
                    href={`https://twitter.com/share?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    title="Share this page on Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareTwitter}
                      style={{ color: "#0b8ee0" }}
                      className="event-share-logo"
                    />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    title="Share this page on Linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: "#16b7df" }}
                      className="event-share-logo"
                    />
                  </a>
                  <a
                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    title="Share this page on Pinterest"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquarePinterest}
                      style={{ color: "#d30909" }}
                      className="event-share-logo"
                    />
                  </a>
                </div>
              </div>
              <div className="event-venue-wrapper">
                <h1
                  className="fw-bolder col-12 text-start"
                  onClick={toggleContent}
                >
                  <FontAwesomeIcon
                    icon={showContent ? faMinus : faPlus}
                    style={{ color: "#1164e8" }}
                  />
                  <span className="ms-2">Venue</span>
                </h1>
                {showContent && (
                  <div className="row event-venue">
                    <div className="event-venue-left col-lg-3 col-12">
                      <img src={event.ImageVeneu} alt="venue" />
                    </div>
                    <div className="event-venue-right col-lg-8 col-12 mt-auto mb-auto">
                      <a
                        className="ms-3 fw-bolder"
                        href={event.LinkGmaps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "#1164e8" }}
                        />
                        {event.NameLocation}
                      </a>
                      <br />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default EventPoster;
