// Import Data
import VideoData from "../../data/gallery/Video.json";

import React, { useState } from "react";

function Video() {
  const [selectedFilter, setSelectedFilter] = useState("all"); // Menambahkan state untuk menyimpan filter yang dipilih

  // Fungsi untuk mengubah filter yang dipilih
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <section id="video">
      <div className="container">
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
            onClick={() => handleFilterChange("year2024")}
          >
            2024
          </button>
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("year2023")}
          >
            2023
          </button>
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("year2022")}
          >
            2022
          </button>
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("year2021")}
          >
            2021
          </button>
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("year2020")}
          >
            2020
          </button>
        </div>
        <div className="Videos">
          {/* Tampilkan image sesuai dengan filter yang dipilih */}
          {selectedFilter === "all" && (
            <>
              <div className="row">
                {VideoData.year2024.map((video) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 col-sm-12 text-center mb-4 mix year2023"
                      key={video.id}
                    >
                      <p className="fw-bolder">{video.title}</p>
                      <iframe
                        width="auto"
                        height="auto"
                        src={video.src}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                {VideoData.year2023.map((video) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 col-sm-12 text-center mb-4 mix year2023"
                      key={video.id}
                    >
                      <p className="fw-bolder">{video.title}</p>
                      <iframe
                        width="auto"
                        height="auto"
                        src={video.src}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                {VideoData.year2022.map((video) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 col-sm-12 text-center mb-4 mix year2022"
                      key={video.id}
                    >
                      <p className="fw-bolder">{video.title}</p>
                      <iframe
                        width="auto"
                        height="auto"
                        src={video.src}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                {VideoData.year2021.map((video) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 col-sm-12 text-center mb-4 mix year2021"
                      key={video.id}
                    >
                      <p className="fw-bolder">{video.title}</p>
                      <iframe
                        width="auto"
                        height="auto"
                        src={video.src}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>

              <div className="row">
                {VideoData.year2020.map((video) => {
                  return (
                    <div
                      className="col-md-6 col-lg-4 col-sm-12 text-center mb-4 mix duapuluh"
                      key={video.id}
                    >
                      <p className="fw-bolder">{video.title}</p>
                      <iframe
                        width="auto"
                        height="auto"
                        src={video.src}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {selectedFilter !== "all" && (
            <div className="row">
              {VideoData[selectedFilter].map((video) => {
                return (
                  <div
                    className={`col-md-6 col-lg-4 col-sm-12 text-center mb-4 mix ${selectedFilter}`}
                    key={video.id}
                  >
                    <p className="fw-bolder">{video.title}</p>
                    <iframe
                      width="auto"
                      height="auto"
                      src={video.src}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Video;
