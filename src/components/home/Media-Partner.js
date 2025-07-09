import React, { useEffect } from "react";

const MediaPartner = () => {
  useEffect(() => {
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);
  return (
    <section className="affiliation-section">
      <div className="container">
        <h2 className="text-center">Media Partner</h2>
        <div className="logos">
          <div className="media-logos">
            <img
              src="./assets/images/logo/Media Partner/THE PATENT_page-0002.jpg"
              alt="Media Partner Logo"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartner;
