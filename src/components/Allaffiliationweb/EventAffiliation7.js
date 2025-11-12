const EventAffiliation7 = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <section className="position-relative">
        <div>
          <img
            className="rounded mx-auto d-block"
            src="./assets/images/logo afiliasi/wosg.jpeg"
            alt=""
          />
          <br></br>
          <h3 className="text-center fw-bold">WorldInvent Singapore (WoSG)</h3>
          <p className="mt-5 fs-5 text-center px-4">
            WoSG is an IYSA affiliate event originating from Singapore that
            showcases inventions and innovations from around the world in 12
            categories. categories. Exhibitors will also be judged and awarded
            awards based on the quality of their ideas.
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
          <h3 className="text-center fw-bold">After Event 2023</h3>
          <div className="text-center">
            <iframe
              className="mt-5 text-center"
              width="50%"
              height="315"
              src="https://www.youtube.com/embed/Br2r-zOwVFE?si=Jv4ITIPv3CAt--9A"
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
          <h3 className="text-center fw-bold">Gallery WOSG 2023</h3>
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
            Gallery of WOSG event activities
            <a
              href="https://drive.google.com/drive/folders/14yspxk4-E81gqIUdUfVgBudrUqFrHlBW?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Gallery WOSG
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default EventAffiliation7;
