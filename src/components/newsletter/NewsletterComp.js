import React, { useState } from "react";

// Import Data JSON
import DataLetter from "../../data/newsletter/NewsletterData.json";

const NewsletterComp = () => {
  const [selectedFilter, setSelectedFilter] = useState("all"); // Menambahkan state untuk menyimpan filter yang dipilih

  // Fungsi untuk mengubah filter yang dipilih
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <section className="newsletter-section" id="newsletter-section">
      <div className="container">
        <div className="newsletter-wrapper">
          <div className="controls">
          <button
              type="button"
              className="control"
              onClick={() => handleFilterChange("all")}
            >
              ALL
            </button>
            <button
              type="button"
              className="control"
              onClick={() => handleFilterChange("duapuluhempat")}
            >
              2024
            </button>
            <button
              type="button"
              className="control"
              onClick={() => handleFilterChange("duapuluhdua")}
            >
              2023
            </button>
            <button
              type="button"
              className="control"
              onClick={() => handleFilterChange("duapuluhtiga")}
            >
              2022
            </button>
          </div>
          {selectedFilter === "all" && (
            <>
              <div className="row">
                {DataLetter.duapuluhtiga.map((Letter) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="box mx-auto" key={Letter.id}>
                        <div className="mx-auto text-center">
                          <img
                            className="newsletter-image img-fluid mx-auto"
                            src={Letter.gambar}
                          ></img>
                          <div className="read-more-overlay">
                            <a href={Letter.linkbtn}>Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                {DataLetter.duapuluhdua.map((Letter) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="box mx-auto" key={Letter.id}>
                        <div className="mx-auto text-center">
                          <img
                            className="newsletter-image img-fluid mx-auto"
                            src={Letter.gambar}
                          ></img>
                          <div className="read-more-overlay">
                            <a href={Letter.linkbtn}>Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                {DataLetter.duapuluhempat.map((Letter) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="box mx-auto" key={Letter.id}>
                        <div className="mx-auto text-center">
                          <img
                            className="newsletter-image img-fluid mx-auto"
                            src={Letter.gambar}
                          ></img>
                          <div className="read-more-overlay">
                            <a href={Letter.linkbtn}>Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {selectedFilter !== "all" && (
            <div className="row">
              {DataLetter[selectedFilter].map((Letter) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="box mx-auto" key={Letter.id}>
                      <div className="mx-auto text-center">
                        <img
                          className="newsletter-image img-fluid mx-auto"
                          src={Letter.gambar}
                        ></img>
                        <div className="read-more-overlay">
                          <a href={Letter.linkbtn}>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default NewsletterComp;
