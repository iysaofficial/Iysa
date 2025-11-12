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

function EventPoster13() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event13.map((EventPosterDetail13) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <div className="text-start mb-5">
                    <a className="btn btn-primary" href="/AllEventPage">
                      <FontAwesomeIcon icon={faArrowLeft} /> Previous Page{" "}
                    </a>{" "}
                  </div>
                  <img src={EventPosterDetail13.image} alt="poster"></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail13.title}</h1>
                    <br></br>
                    <p>
                      Calling all young changemakers!
                    </p>
                    <br></br>
                    <p>Hybrid Competition 💥</p>
                    <br></br>
                    <p>
                      Get ready for the 5th WYIIA – World Youth Invention and Innovation Award! 🎉
                    </p>
                    <br></br>
                    <p>
                      Organized by IYSA, in collaboration with the East Java Provincial Education Office and the Student Achievement Center (SAC), this event aims to empower the next generation of global innovators.
                    </p>
                    <br></br>
                    <ul>
                      <li>
                        <strong>📌 Place : </strong> 📍 Surabaya, Indonesia
                      </li>
                      <li>
                        <strong>📌 Registration Deadline : </strong> September 3rd, 2025
                      </li>
                      <li>
                        <strong>📌 Payment & Submission Deadline : </strong>{" "}
                        September 10th, 2025
                      </li>
                      <li>
                        <strong>📌 Event Date : </strong>October 7th - 10th, 2025 for Online <br/> October 15th - 18th, 2025 for Offline
                      </li>
                    </ul>
                    <p>
                      So wait no more, Make sure you and your team join this
                      event!
                    </p>
                    <br></br>
                    <p>
                      📱Register via:
                      <a
                        href="https://www.wyiia.or.id/"
                        target="_blank"
                        rel="noreferrer"
                      >
                         wyiia.or.id
                      </a>
                    </p>
                    <p>Registration Here:</p>
                    <br></br>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail13.LinkRegist}
                      target="-blank"
                    >
                      Registration Form
                    </a>
                    <p>See you 🙋‍♀️🙋‍♂️</p>
                    <br></br>
                    <br />
                    <p className="hastag">{EventPosterDetail13.Hastag}</p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <button className="btn btn-primary shadow mt-2" href="#">
                      About The Event
                    </button>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail13.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail13.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail13.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail13.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail13.EventCategory}</p>
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
                            src={EventPosterDetail13.ImageVeneu}
                            alt="veneu"
                          ></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail13.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail13.NameLocation}
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

export default EventPoster13;
