const EventAffiliation1 = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <section className="position-relative">
        <div>
          <img
            className="rounded mx-auto d-block"
            src="./assets/images/logo afiliasi/BYSCC.png"
            alt=""
          />
          <h3 className="text-center fw-bold">
            Beijing Youth Science Creation Competition
          </h3>
          <p className="mt-5 fs-5 text-center px-4">
            The Beijing Youth Science Creation Competition (BYSCC) is a science
            and technology innovation competition that aims to provide a
            platform for contestants to showcase their research results and
            communicate with each other. This annual event has been widely
            recognized internationally.
          </p>
          <br />
          {/* <div className="position-relative">
            <a
              className="btn btn-primary mt-4 mb-4 position-absolute top-50 start-50 translate-middle"
              href="#"
              target="-blank"
            >
              Registration Form
            </a>
          </div> */}
          <br />
          <br />
          <br />
          <br />
        </div>
        <hr className="fw-bold"></hr>
        <div>
          <h3 className="text-center fw-bold">After Event 2024</h3>
          <div className="text-center">
            <iframe
              className="mt-5 text-center"
              width="50%"
              height="315"
              src="https://www.youtube.com/embed/vOyOEYo04o4?si=QeIS9AYDNwlbxsqz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <h3 className="text-center fw-bold">Gallery BYSCC 2024</h3>
          {/* <div>
                    <div class="card text-bg-primary mb-3" style={{maxWidth:"18rem;"}}>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Primary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </div> */}
          <p className="text-center">
            Gallery of BYSCC event activities
            <a href="https://drive.google.com/drive/folders/1-H0sgwoL0ey7KI0XRaFm-WL-9uqFC4m6" target="_blank" rel="noreferrer">
              Gallery BYSCC
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default EventAffiliation1;
