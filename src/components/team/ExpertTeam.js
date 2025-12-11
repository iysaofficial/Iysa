import '../../css/expert/expert.css'
import expertTeam from "../../data/team/expertTeam.json";

const ExpertTeam = () => {
  return (
    <section className="expert-team min-vh-100 mb-5">
      <div className="pem container-lg">
        <h1 className="text-center row-cols-sm-2">IYSA Expert Team</h1>

        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
          {expertTeam.map((img, index) => (
            <div className="col" key={index}>
              <img
                src={`/assets/images/team/${img}`}
                className="gallery-item"
                alt={`expert-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="gallery-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="/assets/images/logo/8.jpg"
                className="modal-img"
                alt="modal img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;