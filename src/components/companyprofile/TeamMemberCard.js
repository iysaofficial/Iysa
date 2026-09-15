import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

const optimizeUrl = (url) => {
  if (!url || typeof url !== 'string') return url;
  if (url.includes('imagekit.io') && !url.includes('tr=')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tr=w-400,q-80,f-auto`;
  }
  if (url.includes('imageskit.io') && !url.includes('tr=')) {
    return url.replace('/image/upload/', '/image/upload/w_400,q_auto,f_auto/');
  }
  return url;
};

const TeamMemberCard = ({ member }) => {
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

  // Preload photos to prevent blank flash / glitch when clicking
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

  // Only reset photo to 0 when card scrolls out of view
  useEffect(() => {
    if (!isInView) {
      setPhotoIndex(0);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="team-member-card"
      onClick={handleClick}
      whileTap={photos.length > 1 ? { scale: 0.98 } : {}}
      style={{ cursor: photos.length > 1 ? 'pointer' : 'default' }}
    >
      <div className="member-image-container">
        <img
          src={photos[photoIndex]}
          alt={`${member.name} ${photoIndex + 1}`}
          className="member-photo"
          draggable={false}
        />
        {photos.length > 1 && (
          <div className="card-photo-dots member-dots">
            {photos.map((_, idx) => (
              <span
                key={idx}
                className={`photo-dot ${idx === photoIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-position">{member.position}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
