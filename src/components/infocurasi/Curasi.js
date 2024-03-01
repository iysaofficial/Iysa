const Curasi = () => {
  return (
    <section className="hero-iframe">
      <div className="container">
        <div className="">
          <div className="kotak row text-center col-12 mx-auto">
            <div className="pag col-lg-4 col-12">
              <img
                src="./assets/images/newsletter/Kurasi.WebP"
                alt="Footer Logo"
                className="mt-5 mx-auto"
                height="250"
              ></img>
              <h2 className="mt-3">
                This information will display what events have been curated and
                are being curated by iysa with the ministry of culture, research
                and technology.
              </h2>
            </div>
            <div className="if text-center col-lg-8 col-12 mt-5 mb-5">
              <iframe
                src="./assets/images/newsletter/Kurasi.pdf"
                width="80%"
                height="570"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curasi;
