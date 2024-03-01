// Import CSS
import '../../css/event/eventPoster.css';

// Import FontAwesome
import React, { useState } from 'react';
import {
  faLocationDot,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquarePinterest,
} from '@fortawesome/free-brands-svg-icons';

// Import Data
import EventPosterDetail from '../../data/event/EventPosterDetail.json';

function EventPoster4() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event4.map((EventPosterDetail4) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <img src={EventPosterDetail4.image}></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">
                      {EventPosterDetail4.title}
                    </h1>
                    <p>Kompetisi Online di Malaysia🎉</p>
                    <p>
                      Malaysia Invention & Innovation Expo (MIIX) 2024
                    </p>
                    <br></br>
                    <p>
                      Buat kalian para pelajar di Indonesia, yuk
                      daftar kompetisi afiliasi IYSA yang satu ini 👇
                      Malaysia Invention & Innovation Expo
                    </p>
                    {/* <p>
                      Di bulan November IYSA punya event afiliasi
                      offline di Turki loh 👏🏻
                    </p> */}
                    <br></br>
                    <p>
                      Tidak hanya kategori sains saja, ada kategori
                      musik-piano juga 🥳
                    </p>
                    <ul>
                      <li>
                        <strong>📍 Registration Deadline:</strong> March 8, 2024
                      </li>
                      <li>
                        <strong>📍 Payment Deadline:</strong> April 5 - 10, 2024
                      </li>
                      {/* <li>
                        <strong>📍 Submission Deadline:</strong> January 12, 2024
                      </li> */}
                      <li>
                        <strong>📍 Event Date:</strong> April 5 - 10, 2024
                      </li>
                      {/* <li>
                        <strong>Place:</strong> Auditorium Imam Bardjo, Universitas Diponegoro Semarang
                      </li> */}
                    </ul>
                    <p>Link pendaftaran:</p>
                    <br></br>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail4.LinkRegist}
                      target="-blank"
                    >
                      Registration Form
                    </a>
                    <br></br>
                    <p>Sampai jumpa di Malaysia</p>
                    <br />
                    <p className="hastag">
                      {EventPosterDetail4.Hastag}
                    </p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <a className="btn btn-primary shadow mt-2">
                      About The Event
                    </a>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail4.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">
                      Registration End Date
                    </h4>
                    <p>{EventPosterDetail4.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail4.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail4.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail4.EventCategory}</p>
                    <br />
                    <div className="event-share">
                      <h4 className="fw-bolder">
                        Share With Friends
                      </h4>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        title="Share this page on Facebook"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faSquareFacebook}
                          style={{ color: '#1b56bb' }}
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
                          style={{ color: '#0b8ee0' }}
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
                          style={{ color: '#16b7df' }}
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
                          style={{ color: '#d30909' }}
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
                        style={{ color: '#1164e8' }}
                      />
                      <span className="ms-2">Venue</span>
                    </h1>
                    {showContent && (
                      <div className="row event-venue">
                        <div className="event-venue-left col-3">
                          <img
                            src={EventPosterDetail4.ImageVeneu}
                          ></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail4.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: '#1164e8' }}
                            />
                            {EventPosterDetail4.NameLocation}
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

export default EventPoster4;
