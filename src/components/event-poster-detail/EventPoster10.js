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

function EventPoster10() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event10.map((EventPosterDetail10) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <img src={EventPosterDetail10.image}></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">
                      {EventPosterDetail10.title}
                    </h1>
                    <p>🌐IYBC 2024🌐</p>
                    <p>HYBRID COMPETITION</p>
                    <br></br>
                    <p>
                      Indonesian Young Scientist Association in
                      collaboration with Sekolah Vokasi Universitas
                      Diponegoro, Semarang🎉
                    </p>
                    <p>
                      Will hold an International event focussing on
                      the Business Category namely the International
                      Youth Business Competition (IYBC) 2024, which
                      will be held together with I3O 2024 👏🏻👏🏻
                    </p>
                    <br></br>
                    <p>Save the date! 👇🏻</p>
                    <br></br>
                    <ul>
                      <li>
                        <strong>📍Registration Deadline : </strong> May
                        19th, 2024
                      </li>
                      <li>
                        <strong>
                          📍Payment & Submission Deadline : </strong> May 24th, 2024
                      </li>
                      <li>
                        <strong>📍Event Date :</strong> June 25 - 28,
                        2024
                      </li>
                    </ul>
                    <br></br>
                    <p>
                      So wait no more, Make sure you and your team
                      join this event!
                    </p>
                    <br></br>
                    <p>
                      📱Register via:
                      <a href="https://iybc.or.id/" target="_blank" >
                        iybc.or.id
                      </a>
                    </p>
                    <br></br>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail10.LinkRegist}
                      target="-blank"
                    >
                      Registration Form
                    </a>
                    <br></br>
                    <p>Get the Guidebook on the Official IYBC Website ‼️</p>
                    {/* <p>
                      Kalian dapat melihat guide book pada link pendaftaran 📖
                    </p>
                    <br />
                    <p>
                      Yuk, tunggu apalagi bikin tim kamu berprestasi di ajang
                      internasional
                    </p> */}
                    <p className="hastag">
                      {EventPosterDetail10.Hastag}
                    </p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <a className="btn btn-primary shadow mt-2">
                      About The Event
                    </a>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail10.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">
                      Registration End Date
                    </h4>
                    <p>{EventPosterDetail10.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail10.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail10.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail10.EventCategory}</p>
                    <br />
                    <div className="event-share">
                      <h4 className="fw-bolder">
                        Share With Friends
                      </h4>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        rel="noreferrer noopener"
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
                        rel="noreferrer noopener"
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
                        rel="noreferrer noopener"
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
                        rel="noreferrer noopener"
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
                            src={EventPosterDetail10.ImageVeneu}
                          ></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail10.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: '#1164e8' }}
                            />
                            {EventPosterDetail10.NameLocation}
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

export default EventPoster10;
