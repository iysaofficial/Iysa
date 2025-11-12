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

// Import Data
// import EventPosterDetail from "../../data/event/EventPosterDetail.json";
import EventPosterDetail from "../../data/eventaffiliasi/EventPosterDetailAffiliasi.json"

function EventPoster6() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event6.map((EventPosterDetail6) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <div className="text-start mb-5">
                    <a className="btn btn-primary" href="/AllEventPage">
                      <i className="fas fa-arrow-left"></i> Previous Page
                    </a>
                  </div>
                  <img src={EventPosterDetail6.image} alt=""></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail6.title}</h1>
                    <p>
                    Hi young Scientist 🎉

                    </p>
                    <br></br>
                    <p>
                    Korea International Women's Invention Exposition 2025 is back 🎉
                    </p>
                    <br></br>
                    <p>Will be held in a hybrid manner in Korea on May 22-24, 2025🔥👏</p>
                    <br></br>
                    <p>Let's register for KIWIE 2025, when else can you compete but can also travel 😍, you can register via this link👇</p>
                    <ul>
                      <li>
                        <strong>📍Registration Deadline:</strong> April 25, 2025
                      </li>
                      <li>
                        <strong>📍Payment Deadline: </strong> April 30, 2025
                      </li>
                      <li>
                        <strong>📍Event Date: </strong> 
                        May 22 - 24, 2025
                      </li>
                      <li>
                        <strong>📍Venue: </strong> Hall 10A, Exhibition Center 2, KINTEX
                      </li>
                    </ul>
                    <br></br>
                    <p>registration now 🤩‼️‼️</p>
                    <p>
                      📱Register via:
                      <a href="https://bit.ly/REGISTRATION-KIWIE-2025" target="_blank" rel="noreferrer" >
                        &nbsp;https://bit.ly/REGISTRATION-KIWIE-2025
                      </a>
                    </p>
                    <br></br>
                    <p></p>
                    <p>
                     
                    </p>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail6.LinkRegist}
                      target="-blank"
                    >
                      Registration Form
                    </a>
                    <br></br>
                    <br />
                    <p className="hastag">{EventPosterDetail6.Hastag}</p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <button className="btn btn-primary shadow mt-2" href="#">
                      About The Event
                    </button>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail6.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail6.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail6.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail6.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail6.EventCategory}</p>
                    <br />
                    <div className="event-share">
                      <h4 className="fw-bolder">Share With Friends</h4>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        title="Share this page on Facebook"
                        target="_blank" rel="noreferrer" 
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
                        target="_blank" rel="noreferrer" 
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
                        target="_blank" rel="noreferrer" 
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
                        target="_blank" rel="noreferrer" 
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
                          <img src={EventPosterDetail6.ImageVeneu} alt="event venue"></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail6.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail6.NameLocation}
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

export default EventPoster6;
