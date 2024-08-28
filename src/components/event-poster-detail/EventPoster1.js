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
                    <p>Lomba Invensi dan PTK 2024 👏</p>
                    <p>Kategori Guru dan Dosen</p>
                    <br></br>
                    <p>
                      Tahun ini merupakan kali ke-2 penyelenggaraan Lomba
                      Invensi & PTK dalam rangka Hari Guru Nasional.
                    </p>

                    <p>
                      IYSA bekerja sama dengan Indonesia International Institute
                      for Life-Sciences (i3L) @i3l_official, dan event ini akan
                      berlangsung pada bulan November 2024.
                    </p>
                    <br></br>

                    <p>Save the date ‼️</p>
                    <ul>
                      <li>
                        <strong>📍 Batas Registrasi :</strong> 16 Oktober, 2024
                      </li>
                      <li>
                        <strong>📍 Batas Pengumpulan Full Paper :</strong> 23
                        Oktober, 2024
                      </li>
                      <li>
                        <strong>📍 Pengumuman Finalis :</strong> 4 November,
                        2024
                      </li>
                      <li>
                        <strong>📍 Tanggal Acara :</strong> 25 November, 2024
                      </li>
                    </ul>
                    <br></br>
                    <p>
                      Bapak Ibu Guru dan Dosen di Indonesia yuk ketemu sama
                      minsa di event ini...🎉
                    </p>
                    <p>Jangan lupa daftar ya disini 👇</p>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail1.LinkRegist}
                      target="-blank"
                    >
                      Formulir Registrasi
                    </a>
                    <p>Lihat Guide Book nya disini 👇</p>
                    <a
                      className="btn btn-primary mb-4"
                      href="https://drive.google.com/file/d/1TED9ZY9GmXRfyhGtRmrhAzMnJGm2G4Nt/view?usp=sharing"
                      target="-blank"
                    >
                      Guide Book
                    </a>
                    <br></br>
                    <p>See you in Jakarta, Indonesia🙋‍♂️</p>
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
                          <img src={EventPosterDetail1.ImageVeneu} alt="veneu"></img>
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
