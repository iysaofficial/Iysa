import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Calenderevent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imageUrl = "https://res.cloudinary.com/dtik1z1qd/image/upload/v1770000860/IYSA_Event_Calender_New_lmxetx.png";

  return (
    <>
      <section className="calender">
        <div className="row">
          <div className="col-lg-6 wrapper mx-auto text-center">
            <h2 className="h1-calender fw-bold mb-5">
              Calendar of Invention Events – IYSA 2026
            </h2>
            <div className="flipbook-container">
              <iframe
                src="https://heyzine.com/flip-book/c528ba32d6.html"
                title="Calendar of Invention Events – IYSA 2026"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 wrapper mx-auto text-center">
            <h2 className="h1-calender fw-bold mb-5">
              Calendar of Olympiad Events – IYSA 2026
            </h2>
            <img
              className="iframe"
              src={imageUrl}
              alt="Calendar of Olympiad Events – IYSA 2026"
              onClick={handleShow}
              style={{ 
                height: "400px", 
                objectFit: "contain", 
                width: "100%", 
                border: "1px solid #ddd", 
                borderRadius: "8px", 
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                cursor: "pointer"
              }}
            />
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Calendar of Olympiad Events – IYSA 2026</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'center' }}>
          <img src={imageUrl} alt="Olympiad Events Calendar Full Size" style={{ maxWidth: '100%', height: 'auto' }} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Calenderevent;
