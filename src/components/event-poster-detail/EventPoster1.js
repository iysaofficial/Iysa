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
                  <div className="text-start mb-5">
                    <a className="btn btn-primary" href="/AllEventPage">
                      <FontAwesomeIcon icon={faArrowLeft} /> Previous Page{" "}
                    </a>{" "}
                  </div>
                  <img src={EventPosterDetail1.image} alt="poster"></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5 mx-auto">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail1.title}</h1>
                    <p>1st BISF 2025 Bali International Science Fair</p>
                    <p>
                      Bali is a foreign tourist destination in Indonesia, with
                      its culture Bali is able to attract foreign interest to
                      come there.
                    </p>
                    <br></br>
                    <p>
                      IYSA for the first time in collaboration with Warmadewa
                      University Denpasar, held the Bali International Science
                      Fair 2025, this event is expected to continue to grow in
                      providing potential for young researchers around the
                      world.
                    </p>

                    {/* <p>
                      This event will take place in January 2025, will be
                      conducted online and offline at the Institut Pertanian
                      Bogor 👏🏻👏🏻
                    </p> */}
                    <br></br>

                    <p>Save the date ‼️</p>
                    <ul>
                      <li>
                        <strong>📍Registration Deadline : </strong> May 14, 2025
                      </li>
                      <li>
                        <strong>📍Payment & Submission Deadline : </strong> May
                        20, 2025
                      </li>
                      <li>
                        <strong>📍Event Date : </strong> June 19 - 23, 2025
                      </li>
                      {/* <li>
                        <strong>📍Pengumuman Finalis 10 besar : </strong> 28
                        Februari 2025
                      </li>
                      <li>
                        <strong>📍Penjurian Daring : </strong> 10 Maret 2025
                      </li>
                      <li>
                        <strong>📍Pengumuman Pemenang : </strong> 12 Maret 2025
                      </li> */}
                    </ul>
                    <br></br>
                    <p>Registration Link:!!</p>
                    <p>📱Come on, register now 👇🏻</p>
                    <p>
                      website :
                      <a
                        href="https://www.bisf.or.id/ "
                        target="_blank"
                        rel="noreferrer"
                      >
                        bisf.or.id
                      </a>
                    </p>

                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail1.LinkRegist}
                      target="-blank"
                    >
                      Click Here
                    </a>
                    <br></br>
                    {/* <p>See you in Semarang, Indonesia🙋‍♂️</p> */}
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
                          <img
                            src={EventPosterDetail1.ImageVeneu}
                            alt="veneu"
                          ></img>
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
