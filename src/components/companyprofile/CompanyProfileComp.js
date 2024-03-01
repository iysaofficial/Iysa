const CompanyProfileComp = () => {
  return (
    <section className="company-profile-section">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 hero-content mt-auto mb-1">
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              Indonesian Young
            </h1>
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              Scientist Association
            </h1>
            <p className="">
              IYSA stands for Indonesian Young Scientist Association, an
              organization engaged in education to develop the potential, talent
              and creativity of Indonesian students by providing opportunities
              for them to participate in scientific competitions and
              non-competitions at national and international levels.
            </p>
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              IYSA Vision & Mission
            </h1>
            <p>
              1. Conducting a national collaboration program between young
              Indonesian researchers
            </p>
            <p>2. Implement an in-country competition program</p>
            <p>
              3. Preparing young Indonesian researchers to represent Indonesia
              in the international arena
            </p>
          </div>

          <div className="col-md-6  hero-image text-center mb-1">
            <img
              src="assets/images/logo/about-logo.WebP"
              className=" img-fluid "
            ></img>
          </div>
          <div className="about-iframe text-center">
            {/* <iframe
              src="https://drive.google.com/file/d/1ugnGlm8fgfojHUD32qMmce9l2yPxKt3k/preview"
              width="70%"
              height="560"
            ></iframe> */}
          </div>
        </div>
        <div className="row mt-1 ">
          <div className="hero-image text-center">
            <img
              src="assets/images/logo/pendiri.WebP"
              className="img-fluid"
              height="400px"
            ></img>
          </div>

          {/* founder */}
          <div className="col-md-6 hero-content mt-5 mb-auto">
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              IYSA Founder
            </h1>
            <p className="mt-4">
              IYSA was established in November 2018, and was legally confirmed
              at the Ministry of Law and Human Rights in the form of a notarial
              deed in 2019. IYSA was founded by Mr. Deni Irawan and later
              collaborated with Ms. Anggraini and Ms. Prita Elriza in its
              management team.
            </p>

            {/* member */}
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              MOI (IYSA Member) and IYSA Research Teachers Community
            </h1>
            <p className="mt-4">
              IYSA has a community for contestants called Members of IYSA
              throughout Indonesia, and also has a community for research
              teachers specifically throughout Indonesia and also
              internationally called the IYSA Research Teachers Community.
            </p>

            {/* program */}
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              IYSA Program/Event
            </h1>
            <h5 className="mt-4">
              In its journey, IYSA has had several Competition Programs in the
              field of invention and innovation, including :
            </h5>
            
              <span>Event Regional dan Nasional : </span> <p className="fw-bold">LKTIN, OSPC, YNSF, NICYMS, IIF,
              NRTC, NASPO, JNSF
            </p>
            
            <span>Event Internasional :</span> <p className="fw-bold">IYMIA, GYIIF, AISEEF, YISF, GloCoLiS, IYBC,
              I3O, IICYMS, WSEEC, WYIIA, WICE, IIIEX, IRTC, ISIF, I2ASPO, JISF, WECC
            </p>
            <span>IYSA Olympiad Tingkat Nasional :</span><p className="fw-bold"> NYMO, NYEO, NYBO, NYCO</p>
            <span>IYSA Olympiad Tingkat International :</span> <p className="fw-bold">IYMO, IYEO, IYBO, IYCO</p>
            
            <br></br>
            <h5>
              In addition to the Competition program, IYSA also has a
              Non-Competition Program as follows :
            </h5>
            <p>
              IYSA CSR, IYSA Excursion, IYSA Research Portal, IYSA Goes To
              School, IYSA Newsletter, IYSA Edutainment Webinar Nasional &
              Internasional, Campus Corner, Online Research Course
            </p>
          </div>
          <div className="col-md-6 hero-content mt-5 mb-auto">
            {/* staff & team */}
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              IYSA'S Team of Experts and Staff
            </h1>
            <p className="mt-4">
              Since its inception and until now, IYSA has been supported by a
              team of experts and expert staff who are experienced professors,
              lecturers, practitioners, researchers, and educators/teachers of
              scientific works from various leading institutions in Indonesia.
            </p>

            {/* mitra */}
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              National Partner
            </h1>
            <p className="mt-4">
              In implementing its program, IYSA collaborates with leading
              institutions such as public and private universities both in
              Indonesia and abroad.
            </p>

            {/* inter affiliate */}
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              International Partner
            </h1>
            <p className="mt-4">
              IYSA also collaborates with more than 50 organizations around the
              world, in Asia, Europe, the Americas, and Africa, and to date IYSA
              has brought many students in Indonesia to participate in these
              affiliated events.
            </p>
          </div>

          <div className="about-iframe text-center">
            {/* <iframe
              src="https://drive.google.com/file/d/1ugnGlm8fgfojHUD32qMmce9l2yPxKt3k/preview"
              width="70%"
              height="560"
            ></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileComp;
