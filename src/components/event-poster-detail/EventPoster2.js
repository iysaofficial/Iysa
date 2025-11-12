// Import CSS
import "../../css/event/eventPoster.css";

// Import FontAwesome
import React, { useState } from "react";
import {
  faLocationDot,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquarePinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Import Data
import EventPosterDetail from "../../data/event/EventPosterDetail.json";

function EventPoster2() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event2.map((EventPosterDetail2) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <div className="text-start mb-5">
                    <a className="btn btn-primary" href="/AllEventPage">
                      <FontAwesomeIcon icon={faArrowLeft} /> Previous Page{" "}
                    </a>{" "}
                  </div>
                  <img src={EventPosterDetail2.image} alt="poster1"></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail2.title}</h1>
                    <p>🌟 Calling All Young Muslim Innovators!</p>
                    <p>
                      Get ready for the 4th International Young Moslem Inventor
                      Award (IYMIA) 2026 🚀
                    </p>
                    <p>
                      Showcase your brilliant ideas and inventions to the world!
                      🌍 This is your chance to compete, connect, and
                      collaborate with young Muslim inventors from across the
                      globe. Let’s shape the future together through innovation!
                      💡✨
                    </p>
                    <br></br>
                    <p>Save the date! 👇🏻</p>
                    <ul>
                      <li>
                        <strong>📍Registration Deadline : </strong> December
                        7th, 2026
                      </li>
                      <li>
                        <strong>📍Payment & Submission Deadline : </strong>{" "}
                        December 11th, 2026
                      </li>
                      <li>
                        <strong>📍Event Date : </strong> January 7th - 9th
                        (online) 16th - 18th (offline), 2026
                      </li>
                    </ul>

                    <p>
                      So wait no more, Make sure you and your team join this
                      event!
                    </p>
                    <p>Register via:</p>
                    <p>
                      website : <p>iymia.or.id</p>
                    </p>

                    <p>Register now 👇🏻</p>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail2.LinkRegist}
                      target="-blank"
                    >
                      Registration Here
                    </a>
                    <br />
                    {/* <p>See you in Bogor, Indonesia 🙋‍♀️🙋‍♂️</p> */}
                    <br></br>
                    <p className="hastag">{EventPosterDetail2.Hastag}</p>
                  </div>

                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <button className="btn btn-primary shadow mt-2" href="#">
                      About The Event
                    </button>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail2.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail2.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail2.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail2.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail2.EventCategory}</p>
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
                  <div className="event-venue-wrapper ">
                    <h1
                      className="fw-bolder col-12 text-start ms-4"
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
                        <div className="event-venue-left col-3">
                          <img
                            src={EventPosterDetail2.ImageVeneu}
                            alt="Veneu"
                          ></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail2.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail2.NameLocation}
                          </a>
                          <br />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
        {/*  */}
      </div>
    </section>
  );
}

export default EventPoster2;
