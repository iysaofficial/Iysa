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

function EventPoster21() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event21.map((EventPosterDetail21) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <div className="text-start mb-5">
                    <a className="btn btn-primary" href="/AllEventPage">
                      <FontAwesomeIcon icon={faArrowLeft} /> Previous Page{" "}
                    </a>{" "}
                  </div>
                  <img src={EventPosterDetail21.image} alt="foto"></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail21.title}</h1>
                    <br></br>
                    <p>NSIF 2024 💥 Event Nasional ke-1</p>
                    <br></br>
                    <p>
                      National Science and Invention Fair Merupakan event
                      nasional IYSA yang akan diselenggarakan di Bali secara
                      daring dan luring 🤗🥳
                    </p>
                    <p>
                      NSIF 2024 akan berlangsung pada bulan November 2024, jangn
                      lupa catat tanggal nya ya👇🏻
                    </p>
                    <br></br>
                    <br></br>
                    <ul>
                      <li>
                        <strong>📌 Registration Deadline : </strong> 3 Oktober
                        2024
                      </li>
                      <li>
                        <strong>📌 Payment & Submission Deadline : </strong>8
                        Oktober 2024
                      </li>
                      <li>
                        <strong>📌 Event Date : </strong> 5 - 10 November 2024
                      </li>
                    </ul>
                    <p>Kalian bisa daftat melalui:</p>
                    <br></br>
                    <p>
                      website :
                      <a href="www.nsif.or.id" target="_blank" rel="noreferrer" >
                        nsif.or.id
                      </a>
                    </p>
                    <p>Registration link: </p>
                    <br></br>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail21.LinkRegist}
                      target="-blank"
                    >
                      Registration Here
                    </a>
                    <p>
                      Yuk buat kalian pelajar di seluruh Indonesia, daftar
                      kompetisi ini ya 🤗
                    </p>
                    <br></br>
                    <br />
                    <p className="hastag">{EventPosterDetail21.Hastag}</p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <p className="btn btn-primary shadow mt-2">
                      About The Event
                    </p>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail21.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail21.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail21.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail21.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail21.EventCategory}</p>
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
                          style={{ color: "#21b9df" }}
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
                        style={{ color: "#1214e8" }}
                      />
                      <span className="ms-2">Venue</span>
                    </h1>
                    {showContent && (
                      <div className="row event-venue">
                        <div className="event-venue-left col-6">
                          <img src={EventPosterDetail21.ImageVeneu} alt="foto"></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-6 fw-bolder"
                            href={EventPosterDetail21.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1214e8" }}
                            />
                            {EventPosterDetail21.NameLocation}
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

export default EventPoster21;
