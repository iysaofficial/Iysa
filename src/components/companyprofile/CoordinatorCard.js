import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

const optimizeUrl = (url) => {
  if (!url || typeof url !== "string") return url;
  if (url.includes("imagekit.io") && !url.includes("tr=")) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}tr=w-500,q-80,f-auto`;
  }
  if (url.includes("imagekit.io") && !url.includes("q_auto")) {
    return url.replace("/image/upload/", "/image/upload/w_500,q_auto,f_auto/");
  }
  return url;
};

const CoordinatorCard = ({ member }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const photos = useMemo(() => {
    const list = [];
    for (let i = 1; i <= 10; i++) {
      if (member[`photo${i}`]) {
        list.push(optimizeUrl(member[`photo${i}`]));
      }
    }
    return list;
  }, [member]);

  // Preload all photo variations to prevent blank flash / glitch when clicking
  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [photos]);

  const handleClick = () => {
    if (photos.length > 1) {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }
  };

  // Only reset photo to 0 when user scrolls completely away from the card
  useEffect(() => {
    if (!isInView) {
      setPhotoIndex(0);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="coordinator-card"
      onClick={handleClick}
      whileTap={photos.length > 1 ? { scale: 0.98 } : {}}
      style={{ cursor: photos.length > 1 ? "pointer" : "default" }}
    >
      <img
        src={photos[photoIndex]}
        alt={`${member.name} ${photoIndex + 1}`}
        className="coordinator-photo"
        draggable={false}
      />

      <div className="gradient-overlay" />

      {photos.length > 1 && (
        <div className="card-photo-dots coordinator-dots">
          {photos.map((_, idx) => (
            <span
              key={idx}
              className={`photo-dot ${idx === photoIndex ? "active" : ""}`}
            />
          ))}
        </div>
      )}

      <div className="coordinator-info">
        <h4 className="coordinator-name">{member.name}</h4>
        <p className="coordinator-position">{member.position}</p>
      </div>
    </motion.div>
  );
};

export default CoordinatorCard;
