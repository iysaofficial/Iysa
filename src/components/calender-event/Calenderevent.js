const Calenderevent = () => {
  return (
    <section className="calender">
      <div className="row">
        <div className="col-lg-6 wrapper mx-auto text-center">
          <h2 className="h1-calender fw-bold mb-5">
            Calendar of Events – IYSA Semester 1, 2025
          </h2>
          <iframe
            className="iframe"
            src="https://heyzine.com/flip-book/a05c3e5f10.html"
            allowFullScreen
            title="calender"
          ></iframe>
        </div>
        <div className="col-lg-6 wrapper mx-auto text-center">
          <h2 className="h1-calender fw-bold mb-5">
            Calendar of Events – IYSA Semester 2, 2025
          </h2>
          <iframe
            className="iframe"
            src="https://heyzine.com/flip-book/60417061c7.html"
            allowFullScreen
            title="calender"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Calenderevent;
