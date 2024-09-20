const EventAffiliation10 = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <section className="position-relative">
        <div>
          <img
            className="rounded mx-auto d-block"
            src="./assets/images/logo afiliasi/wico.png"
          />
          <h3 className="text-center fw-bold">
            World Invention Creativity Olympic (WICO)
          </h3>
          <p className="mt-5 fs-5 text-center px-4">
            WICO is an IYSA affiliate event originating from South Korea. This
            event encourages creative ideas, provides new insights, accelerates
            one's creativity, improves presentation skills and establishes a
            global network for the participants.
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
              src="https://www.youtube.com/embed/XCsdLoYQF28?si=ZFa8ogCUoybRBV6D"
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
          <h3 className="text-center fw-bold">Gallery WICO 2024</h3>
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
            Gallery of WICO event activities ->
            <a
              href="https://drive.google.com/drive/folders/1hI5NSgttY2dmwYIfSzpL6F8RVvUlrXeP?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Gallery WICO
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default EventAffiliation10;
