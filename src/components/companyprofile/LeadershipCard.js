import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeadershipCard = ({ member, isReversed = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className={`leadership-card ${isReversed ? 'reversed' : ''}`}
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      <div className="leadership-image-container">
        <motion.img
          src={member.photo1}
          alt={member.name}
          className="leadership-photo"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.img
          src={member.photo2}
          alt={member.name}
          className="leadership-photo-hover"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="leadership-info">
        <h3 className="leadership-name">{member.name}</h3>
        <p className="leadership-position">{member.position}</p>
      </div>
    </motion.div>
  );
};

export default LeadershipCard;
