import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const optimizeUrl = (url) => {
  if (!url || typeof url !== 'string') return url;
  if (url.includes('imagekit.io') && !url.includes('tr=')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}tr=w-500,q-80,f-auto`;
  }
  if (url.includes('cloudinary.com') && !url.includes('q_auto')) {
    return url.replace('/image/upload/', '/image/upload/w_500,q_auto,f_auto/');
  }
  return url;
};

const CoordinatorCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const ref = useRef(null);
  const hasPlayedRef = useRef(false);
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
    let intervalId;
    if ((isInView || isHovered) && !hasPlayedRef.current) {
      if (photos.length > 1) {
        setPhotoIndex((prev) => (prev === 0 ? 1 : prev));
        intervalId = setInterval(() => {
          setPhotoIndex((prev) => {
            if (prev >= photos.length - 1) {
              clearInterval(intervalId);
              hasPlayedRef.current = true;
              return 0; // Return to photo1 and stop playing
            }
            return prev + 1;
          });
        }, 1000);
      }
    } else if (!isInView && !isHovered) {
      setPhotoIndex(0);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isInView, isHovered, photos.length]);

  return (
    <motion.div
      ref={ref}
      className="coordinator-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{ cursor: photos.length > 1 ? 'pointer' : 'default' }}
    >
      {photos.map((photo, index) => (
        <motion.img
          key={index}
          src={photo}
          alt={`${member.name} ${index + 1}`}
          className={index === 0 ? "coordinator-photo" : "coordinator-photo-hover"}
          initial={{ opacity: index === 0 ? 1 : 0 }}
          animate={{ opacity: index === photoIndex ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      ))}
      
      <motion.div 
        className="gradient-overlay"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      <div className="coordinator-info">
        <h4 className="coordinator-name">{member.name}</h4>
        <p className="coordinator-position">{member.position}</p>
      </div>
    </motion.div>
  );
};

export default CoordinatorCard;
