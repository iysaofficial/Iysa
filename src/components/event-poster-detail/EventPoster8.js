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
// import EventPosterDetail from "../../data/event/EventPosterDetail.json";
import EventPosterDetail from "../../data/eventaffiliasi/EventPosterDetailAffiliasi.json"

function EventPoster8() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event8.map((EventPosterDetail8) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <div className="text-start mb-5">
                    <a className="btn btn-primary" href="/AllEventPage">
                      <FontAwesomeIcon icon={faArrowLeft} /> Previous Page{" "}
                    </a>{" "}
                  </div>
                  <img src={EventPosterDetail8.image} alt="poster"></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail8.title}</h1>
                    <p>Kompetisi Offline Korea Selatan</p>
                    <p>World Invention Creativity Olympics (WICO) 2025🔥</p>
                    <br></br>
                    <p>
                      Kompetisi Internasional WICO akan kembali diadakan pada
                      tahun 2025, kalian yang ingin berwisata ke Korea dan
                      berkompetisi, yuk daftarkan tim kalian di WICO 2025
                    </p>
                    <br></br>
                    {/* <p>Ada event online afiliasi IYSA nih di Romania, International Innovation & Invention New Education Worldwide 
                      <br></br></p>
                    <br></br> */}
                    <p>Register Now!!</p>
                    <br></br>
                    <ul>
                      <li>
                        <strong>Registration Deadline :</strong> May 14th,
                        2025
                      </li>
                      <li>
                        <strong>Payment Deadline : </strong> May 21st - 28th, 2025
                      </li>
                      <li>
                        <strong>Event Date : </strong> July 17th - 18th,
                        2025
                      </li>
                    </ul>
                    <br></br>
                    <p>
                      📱yuk daftarkan tim kalian:
                      <a
                        href="https://bit.ly/Registration-WICO-2025"
                        target="_blank"
                        rel="noreferrer"
                      >
                        WICO Registration
                      </a>
                    </p>
                    <br></br>

                    {/* <br></br>
                    <p>So for all of you international and national students, especially students on the nearest Java island,<br></br> let’s register your team to take part in this offline event, 😉</p>
                    <br></br> */}
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail8.LinkRegist}
                      target="-blank"
                    >
                      Registration Form
                    </a>
                    <br></br>
                    {/* <p>See you in Yogyakarta, Indonesia guys, 🙋‍♀️🙋‍♂️</p> */}
                    <br />
                    {/* <p className="hastag">{EventPosterDetail8.Hastag}</p> */}
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <p className="btn btn-primary shadow mt-2">
                      About The Event
                    </p>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail8.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail8.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail8.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail8.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail8.EventCategory}</p>
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
                            src={EventPosterDetail8.ImageVeneu}
                            alt="poster"
                          ></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail8.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail8.NameLocation}
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

export default EventPoster8;
