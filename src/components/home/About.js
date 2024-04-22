const About = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 hero-content mt-auto mb-auto">
            <h1 className="">Indonesian Young</h1>
            <h1 className="">Scientist Association</h1>
            <p className="">
              Indonesian Young Scientist Association (IYSA) is an institution
              engaged in developing Indonesian students potential, talents, and
              creativity by providing them opportunities to participate in
              scientific competitions and non competitions also activities in
              Indonesia and abroad.
            </p>
            <p>
              Since its inception, IYSA has been active in various activities so
              that it can be affiliated with many countries such as: Malaysia,
              Thailand, Singapore, China, India, Korea, Taiwan, Turkey, Tunisia,
              Egypt, Abu Dhabi and so on.{" "}
            </p>
            <a href="/About" className="btn btn-primary">
              See More
            </a>
          </div>

          <div className="col-md-6  hero-image text-center">
            <img
              src="assets/images/logo/about-logo.WebP "
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
