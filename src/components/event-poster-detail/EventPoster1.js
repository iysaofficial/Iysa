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
import EventPosterDetail from "../../data/event/EventPosterDetail.json";

function EventPoster1() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event1.map((EventPosterDetail1) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <img src={EventPosterDetail1.image}></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5 mx-auto">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail1.title}</h1>
                    <p>There's something new...🔥</p>
                    <p>IYSA has another event in Jakarta...</p>
                    <p>
                      JISF 2024, IYSA's new event in collaboration with
                      @i3l_official, is being held online & offline
                    </p>

                    <p>
                      "Jakarta International Science Fair"
                    </p>
                    <p>
                    Come on, let's go to Jakarta and join this event...👏
                    </p>
                    {/* <p>Get the guide book in registration link‼️</p>
                    <p>See you in Bogor, Indonesia 🙋‍♀️🙋‍♂️</p> */}
                    <br></br>

                    <p>Save the date ‼️</p>
                    <ul>
                      <li>
                        <strong>📍 Registration Deadline:</strong> June
                        27th, 2024
                      </li>
                      <li>
                        <strong>📍 Payment Deadline:</strong>July 2nd,
                        2023
                      </li>
                      <li>
                        <strong>📍 Event Date:</strong> Event Date : July 27th - 31st,
                        2024
                      </li>
                      {/* <li>
                        <strong>Place:</strong> Institut Pertanian
                        Bogor, IPB Campus Dramaga
                      </li> */}
                    </ul>
                    {/* <p className="mt-5">{EventPosterDetail1.paragraf5}</p> */}
                    <br></br>
                    <p>
                      So wait no more, Make sure you and your team to
                      join this event!
                    </p>
                    <p>
                      📱Register via:
                      <a href="https://jisf.or.id/" target="_blank" >
                        jisf.or.id
                      </a>
                    </p>
                    <p>See you in Jakarta, Indonesia🙋‍♂️</p>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail1.LinkRegist}
                      target="-blank"
                    >
                      Registration Form
                    </a>
                    <br />
                    <p className="hastag">{EventPosterDetail1.Hastag}</p>
                    <br></br>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <a className="btn btn-primary shadow mt-2">
                      About The Event
                    </a>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail1.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail1.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail1.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail1.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail1.EventCategory}</p>
                    <br />
                    <div className="event-share">
                      <h4 className="fw-bolder">Share With Friends</h4>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        title="Share this page on Facebook"
                        target="_blank"
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
                          <img src={EventPosterDetail1.ImageVeneu}></img>
                        </div>
                        <div className="event-venue-right col-lg-8 col-12 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail1.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail1.NameLocation}
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

export default EventPoster1;
