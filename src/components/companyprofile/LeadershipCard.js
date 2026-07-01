import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const optimizeUrl = (url) => {
  if (!url || typeof url !== 'string') return url;
  if (url.includes('imagekit.io') && !url.includes('tr=')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tr=w-600,q-80,f-auto`;
  }
  if (url.includes('cloudinary.com') && !url.includes('q_auto')) {
    return url.replace('/image/upload/', '/image/upload/w_600,q_auto,f_auto/');
  }
  return url;
};

const LeadershipCard = ({ member, isReversed = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const ref = useRef(null);
  const hasPlayedRef = useRef(false);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    let intervalId;
    if ((isInView || isHovered) && !hasPlayedRef.current) {
      if (member.photo2 && member.photo1 !== member.photo2) {
        setPhotoIndex(1);
        intervalId = setInterval(() => {
          setPhotoIndex((prev) => {
            if (prev >= 1) {
              clearInterval(intervalId);
              hasPlayedRef.current = true;
              return 0; // Return to photo1 and stop playing
            }
            return prev + 1;
          });
        }, 1200);
      }
    } else if (!isInView && !isHovered) {
      setPhotoIndex(0);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, isHovered, member.photo1, member.photo2]);

  const showSecondPhoto = isHovered || photoIndex === 1;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      className={`leadership-card ${isReversed ? 'reversed' : ''}`}
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setPhotoIndex((prev) => (prev === 0 ? 1 : 0))}
      whileHover={{ scale: 1.03 }}
      style={{ cursor: (member.photo2 && member.photo1 !== member.photo2) ? 'pointer' : 'default' }}
    >
      <div className="leadership-image-container">
        <motion.img
          src={optimizeUrl(member.photo1)}
          alt={member.name}
          className="leadership-photo"
          animate={{ opacity: showSecondPhoto ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        />
        {member.photo2 && (
          <motion.img
            src={optimizeUrl(member.photo2)}
            alt={member.name}
            className="leadership-photo-hover"
            animate={{ opacity: showSecondPhoto ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </div>
      <div className="leadership-info">
        <h3 className="leadership-name">{member.name}</h3>
        <p className="leadership-position">{member.position}</p>
      </div>
    </motion.div>
  );
};

export default LeadershipCard;
