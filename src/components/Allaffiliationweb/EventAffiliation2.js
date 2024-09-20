const EventAffiliation2 = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <section className="position-relative">
        <div>
          <img
            className="rounded mx-auto d-block"
            src="./assets/images/logo afiliasi/tisf.png"
          />
          <h3 className="text-center fw-bold">
            Taiwan International Science Fair
          </h3>
          <p className="mt-5 fs-5 text-center px-4">
            TISF is a science research competition for high school students from
            grades 9 to 12. With a mission to identify and nurture talented
            young scientists, TISF 2024 brought together 630 domestic and
            international participants and 211 projects from 27
            countries/regions to compete for awards. It was organized by the
            Taiwan National Science Education Center (NTSEC) from January 28 to
            February 2, 2024.
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
              src="https://www.youtube.com/embed/Z92X74fQYX8?si=Ys9uKS2PMlKF09RY"
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
          <h3 className="text-center fw-bold">Gallery TISF 2024</h3>
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
            Gallery of TISF event activities ->
            <a
              href="https://drive.google.com/drive/folders/1vo41Ek45-MWX779uWSwL5h8khynkWwtN?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Gallery TISF
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default EventAffiliation2;
