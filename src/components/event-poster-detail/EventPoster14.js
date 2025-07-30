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

function EventPoster14() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event14.map((EventPosterDetail14) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <div className="text-start mb-5">
                    <a className="btn btn-primary" href="/AllEventPage">
                      <FontAwesomeIcon icon={faArrowLeft} /> Previous Page{" "}
                    </a>{" "}
                  </div>
                  <img src={EventPosterDetail14.image} alt="poster"></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail14.title}</h1>
                    <br></br>
                    <p>Haloo, Young Scientist!</p>
                    <p>Pendaftaran NYIIA ke-2 (National Youth Invention and Innovation Award) resmi DIBUKA! 🚀</p>
                    <br></br>
                    <p>
                      Tahun ini, IYSA bekerja sama dengan Dinas Pendidikan Provinsi Jawa Timur (Disdik Jatim) dan Student Achievement Center (SAC) Jawa Timur.
                    </p>
                    <p>
                      Kolaborasi keren ini hadir untuk mendukung generasi muda Indonesia dalam menciptakan inovasi nyata dan berdampak! 💡🌱
                    </p>
                    <p>
                     Kamu siswa atau mahasiswa yang punya ide keren di bidang sains, teknologi, lingkungan, sosial, atau lainnya?
                    </p>
                    <p>
                      Segera daftarkan tim kamu dan unjuk gigi di panggung nasional!
                    </p>
                    <br></br>
                    <ul>
                      <li>
                        <strong>📌 Batas Pendaftaran : </strong> 3 September, 2025
                      </li>
                      <li>
                        <strong>📌 Batas waktu pembayaran dan pengumpulan berkas : </strong> 10 September, 2025
                      </li>
                      <li>
                        <strong>📌 Pelaksaan Event : </strong> 7 - 10 Oktober, 2025 (Online), 15 - 18 Oktober, 2025 (Offline)
                      </li>
                    </ul>
                    <br></br>
                    <p>
                      Visit the website 👇:<br/>
                      <a href="http://nyiia.or.id/" target="_blank" rel="noreferrer"  >
                        nyiia.or.id
                      </a>
                    </p>
                    <p>Registrasi Disini:</p>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail14.LinkRegist}
                      target="-blank"
                    >
                      Formulir Registrasi
                    </a>
                    {/* <p>See you 🙋‍♀️🙋‍♂️</p> */}
                    <br></br>
                    <br />
                    <p className="hastag">{EventPosterDetail14.Hastag}</p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <a className="btn btn-primary shadow mt-2">
                      About The Event
                    </a>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail14.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail14.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail14.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail14.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail14.EventCategory}</p>
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
                          style={{ color: "#d40909" }}
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
                        <div className="event-venue-left col-4">
                          <img
                            src={EventPosterDetail14.ImageVeneu}
                            alt="veneu"
                          ></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-4 fw-bolder"
                            href={EventPosterDetail14.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail14.NameLocation}
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

export default EventPoster14;
