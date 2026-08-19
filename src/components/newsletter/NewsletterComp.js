import React, { useState, useEffect } from "react";

// Import Data JSON
import DataLetter from "../../data/newsletter/NewsletterData.json";

// Import Newsletter Tracker (Firebase)
import { getAllNewsletterStats, formatLastViewedDate } from "../../utils/newsletterTracker";

const NewsletterCard = ({ Letter, stats }) => {
  const viewData = stats[Letter.linkbtn];
  const viewCount = viewData?.viewCount || 0;
  const hasRead = viewCount > 0;
  const lastViewed = viewData?.lastViewedAt ? formatLastViewedDate(viewData.lastViewedAt) : null;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="box mx-auto" key={Letter.id}>
        <div className="mx-auto text-center">
          {/* Read Status Badge */}
          {hasRead && (
            <div className="newsletter-read-badge">
              <span className="read-icon">✓</span> Sudah Dibaca
            </div>
          )}
          
          {/* View Count Badge */}
          {viewCount > 0 && (
            <div className="newsletter-view-count">
              <span className="view-icon">👁</span> {viewCount}x dilihat
            </div>
          )}

          <img
            className="newsletter-image img-fluid mx-auto"
            src={Letter.gambar}
            alt=""
          ></img>
          <div className="read-more-overlay">
            <a href={Letter.linkbtn}>Read More</a>
          </div>
          
          {/* Last Viewed Info */}
          {hasRead && lastViewed && (
            <div className="newsletter-last-viewed">
              Terakhir dibaca: {lastViewed}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const NewsletterComp = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [stats, setStats] = useState({});
  const [loadingStats, setLoadingStats] = useState(true);

  // Fetch global view stats from Firebase on mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const allStats = await getAllNewsletterStats();
        setStats(allStats);
      } catch (error) {
        console.error('Error fetching newsletter stats:', error);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
  }, []);

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
              onClick={() => handleFilterChange("duapuluhenam")}
            >
              2026
            </button>
            <button
              type="button"
              className="control"
              onClick={() => handleFilterChange("duapuluhlima")}
            >
              2025
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
              onClick={() => handleFilterChange("duapuluhtiga")}
            >
              2023
            </button>
            <button
              type="button"
              className="control"
              onClick={() => handleFilterChange("duapuluhdua")}
            >
              2022
            </button>
          </div>
          {selectedFilter === "all" && (
            <>
              <div className="row">
                {DataLetter.duapuluhenam.slice(0).reverse().map((Letter) => (
                  <NewsletterCard key={`2026-${Letter.id}`} Letter={Letter} stats={stats} />
                ))}

                {DataLetter.duapuluhlima.slice(0).reverse().map((Letter) => (
                  <NewsletterCard key={`2025-${Letter.id}`} Letter={Letter} stats={stats} />
                ))}

                {DataLetter.duapuluhempat.slice(0).reverse().map((Letter) => (
                  <NewsletterCard key={`2024-${Letter.id}`} Letter={Letter} stats={stats} />
                ))}

                {DataLetter.duapuluhtiga.slice(0).reverse().map((Letter) => (
                  <NewsletterCard key={`2023-${Letter.id}`} Letter={Letter} stats={stats} />
                ))}

                {DataLetter.duapuluhdua.slice(0).reverse().map((Letter) => (
                  <NewsletterCard key={`2022-${Letter.id}`} Letter={Letter} stats={stats} />
                ))}
              </div>
            </>
          )}

          {selectedFilter !== "all" && (
            <div className="row">
              {DataLetter[selectedFilter].slice(0).reverse().map((Letter) => (
                <NewsletterCard key={`${selectedFilter}-${Letter.id}`} Letter={Letter} stats={stats} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default NewsletterComp;
