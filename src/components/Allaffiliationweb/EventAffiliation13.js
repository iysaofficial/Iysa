import { Container, Row, Col } from "react-bootstrap";

const EventAffiliation13 = () => {
  return (
    <div>
      <style>
          {`
            .section-title {
              position: relative;
              display: inline-block;
              padding-bottom: 10px;
            }

            .section-title::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 4px;
              background-color: #007bff;
              transition: width 0.3s ease-in-out;
            }

            .section-title:hover::after {
              width: 100%;
            }
          `}
      </style>
      <section className="position-relative py-5">
      <Container className="pb-5">
        <Row className="justify-content-center pt-5">
          <Col md={4} className="text-center">
            <img
              className="img-fluid rounded"
              src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1769154106/Desain_tanpa_judul_2_zcvmjl.png"
              alt="foto"
              style={{ maxWidth: "400px", height: "auto" }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={10}>
            <h3 className="text-center fw-bold">
              Malaysia International Young Inventors Olympiad (MIYIO) 2025
            </h3>
            <p className="mt-5 fs-5 text-justify px-4">
              MIYIO 2025 (13th Malaysia International Young Inventors Olympiad) is an international innovation competition designed for young inventors and students to showcase their creative projects and technological solutions.
              <br /><br />
              <strong>About MIYIO:</strong>
              <br />
              MIYIO aims to promote creativity, scientific thinking, and problem-solving skills among young innovators. Participants present their invention projects in various fields such as science, technology, engineering, environment, health, and social innovation.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <Row>
          <Col className="text-center">
            <h3 className="fw-bold d-inline-block">
              <span className="section-title">
                Dokumentasi
              </span>
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={6} className="text-center mb-4">
            <a href="https://res.cloudinary.com/dtik1z1qd/image/upload/v1769155577/miyio1_odzdlm.jpg" target="_blank" rel="noreferrer">
              <img
                className="img-fluid rounded"
                src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1769155577/miyio1_odzdlm.jpg"
                alt="Dokumentasi 1"
              />
            </a>
          </Col>
          <Col md={6} className="text-center mb-4">
            <a href="https://res.cloudinary.com/dtik1z1qd/image/upload/v1769155577/miyio2_bauqhd.jpg" target="_blank" rel="noreferrer">
              <img
                className="img-fluid rounded"
                src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1769155577/miyio2_bauqhd.jpg"
                alt="Dokumentasi 2"
              />
            </a>
          </Col>
        </Row>
      </Container>

      {/* Guidebook Section */}
      <Container className="py-5">
        <Row>
          <Col className="text-center">
            <h3 className="fw-bold d-inline-block">
              <span className="section-title">Guidebook</span>
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={10} style={{ height: "800px" }}>
            <iframe
              src="https://drive.google.com/file/d/1SFYb5g_nwEf6pCagvdxC8kNSC2ZJc5GU/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              title="Guidebook MIYIO 2025"
            ></iframe>
          </Col>
        </Row>
      </Container>
      
      <hr className="fw-bold"></hr>
      
      {/* <div>
          <h3 className="text-center fw-bold">After Event 2024</h3>
          <div className="text-center">
            <iframe
              className="mt-5 text-center"
              width="50%"
              height="315"
              src="https://www.youtube.com/embed/XCsdLoYQF28?si=ZFa8ogCUoybRBV6D"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
      {/* <div>
          <h3 className="text-center fw-bold">Gallery WICO 2024</h3>
          <p className="text-center">
            Gallery of WICO event activities ->
            <a
              href="https://drive.google.com/drive/folders/1hI5NSgttY2dmwYIfSzpL6F8RVvUlrXeP?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Gallery WICO
            </a>
          </p>
        </div> */}
    </section>
    </div>
  );
};

export default EventAffiliation13;
