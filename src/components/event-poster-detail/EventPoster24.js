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

function EventPoster24() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event24.map((EventPosterDetail24) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <div className="text-start mb-5">
                    <a className="btn btn-primary" href="/AllEventPage">
                      <FontAwesomeIcon icon={faArrowLeft} /> Previous Page{" "}
                    </a>{" "}
                  </div>
                  <img src={EventPosterDetail24.image} alt=""></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail24.title}</h1>
                    <br></br>
                    <p>New IYSA event in September🥳</p>
                    <br></br>
                    <p>
                      IYSA has another new hybrid event, which will be held in
                      Malang, East Java. Are you elementary, secondary and
                      university students in Malang? Come on, get ready to
                      register.
                    </p>
                    <p>
                      ISPC 2024 IYSA collaborates with the Universitas
                      Muhammadiyah Malang to organize an international event
                      called the International Science Project Competition💥
                    </p>
                    <br></br>
                    <br></br>
                    <ul>
                      <li>
                        <strong>📌 Registration Deadline : </strong> July 28th,
                        2024
                      </li>
                      <li>
                        <strong>📌 Payment & Submission Deadline : </strong>{" "}
                        August 2nd, 2024
                      </li>
                      <li>
                        <strong>📌 Event Date : </strong> August 30th -
                        September 2nd, 2024
                      </li>
                    </ul>
                    {/* <p>
                      So for all of you international and national students,
                      especially students on the nearest Java island, let's
                      register your team to take part in this offline event, 😉
                    </p> */}
                    <br></br>
                    <p>
                      website :
                      <a href="https://ispc.or.id/ " target="_blank" rel="noreferrer" >
                        ispc.or.id
                      </a>
                    </p>
                    {/* <p>Registration link: </p> */}
                    <br></br>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail24.LinkRegist}
                      target="-blank"
                    >
                      Registration Here
                    </a>
                    <p>See you in Malang, Indonesia🙋‍♀️🙋‍♂️</p>
                    <br></br>
                    <br />
                    <p className="hastag">{EventPosterDetail24.Hastag}</p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <button className="btn btn-primary shadow mt-2" href="#">
                      About The Event
                    </button>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail24.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail24.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail24.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail24.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail24.EventCategory}</p>
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
                          style={{ color: "#24b9df" }}
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
                          style={{ color: "#d60909" }}
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
                        style={{ color: "#1244e8" }}
                      />
                      <span className="ms-2">Venue</span>
                    </h1>
                    {showContent && (
                      <div className="row event-venue">
                        <div className="event-venue-left col-6">
                          <img src={EventPosterDetail24.ImageVeneu} alt="event venue"></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-6 fw-bolder"
                            href={EventPosterDetail24.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail24.NameLocation}
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

export default EventPoster24;
