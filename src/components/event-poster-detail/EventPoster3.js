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
import EventPosterDetail from "../../data/event/EventPosterDetail.json";

function EventPoster3() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event3.map((EventPosterDetail3) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <img src={EventPosterDetail3.image}></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail3.title}</h1>
                    <p>IICYMS 2024 🥳</p>
                    <p>
                      INTERNATIONAL INVENTION COMPETITION FOR YOUNG MOSLEM
                      SCIENTISTS
                    </p>
                    <br></br>
                    <p>
                      This year is the 4th year that IYSA hold the IICYMS event
                      in a hybrid competition (online and offline). And this
                      event have new categories 💥
                    </p>
                    <p>
                      In this year, IYSA collaborating with Universitas Komputer
                      Indonesia (UNIKOM) Bandung👏🏻👏🏻
                    </p>
                    <br></br>
                    {/* <p>
                      1Idea1World 2023 akan dilaksanakan secara online
                      dan offline yang bertempat di Istanbul Turki.
                    </p>
                    <p>
                      Yuk daftar sekarang juga, karena batas
                      pendaftaran hanya sampai 1 September 2023.
                    </p>
                    <br></br> */}
                    <p>Save the date 👇🏻</p>
                    <ul>
                      <li>
                        <strong>📍  Registration Deadline:</strong> July 8th, 2024
                      </li>
                      <li>
                        <strong>📍 Payment Deadline: </strong> July 14th, 2024
                      </li>
                      <li>
                        <strong>📍  Event Date: </strong> August 12th - 15th, 2024
                      </li>
                      <li>
                        <strong>📍 Venue :  </strong> Universitas Komputer Indonesia (UNIKOM) Bandung
                      </li>
                    </ul>
                    {/* <p className="mt-5">{EventPosterDetail3.paragraf5}</p> */}
                    <p>Register via: </p>
                    <a href="https://www.iicyms.or.id/IICYMS.html" target="_blank">
                      📲 iicym.or.id
                    </a>

                    <p>See you in Bandung,</p>
                    <p>West Java 🤗🥳</p>

                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail3.LinkRegist}
                      target="-blank"
                    >
                      Registration Form
                    </a>
                    <br />
                    <p className="hastag">{EventPosterDetail3.Hastag}</p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <a className="btn btn-primary shadow mt-2">
                      About The Event
                    </a>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail3.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail3.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail3.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail3.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail3.EventCategory}</p>
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
                          <img src={EventPosterDetail3.ImageVeneu}></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail3.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail3.NameLocation}
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

export default EventPoster3;
