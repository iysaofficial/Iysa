import React, { useState, useEffect, useRef } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const ref = useRef(null);
  // Using amount: 0.2 ensures animation triggers reliably on mobile when scrolled into view
  const isInView = useInView(ref, { amount: 0.2 });

  const photos = [];
  for (let i = 1; i <= 10; i++) {
    if (member[`photo${i}`]) {
      photos.push(optimizeUrl(member[`photo${i}`]));
    }
  }

  const handleClick = () => {
    if (photos.length > 1) {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }
  };

  useEffect(() => {
    if (!isInView && !isHovered) {
      setPhotoIndex(0);
    }
  }, [isInView, isHovered]);

  return (
    <motion.div
      ref={ref}
      className="team-member-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      style={{ cursor: photos.length > 1 ? 'pointer' : 'default' }}
    >
      <div className="member-image-container">
        {photos.map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt={`${member.name} ${index + 1}`}
            className={index === 0 ? "member-photo" : "member-photo-hover"}
            loading="lazy"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ opacity: index === photoIndex ? 1 : 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-position">{member.position}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
