import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CoordinatorCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="coordinator-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={member.photo1}
        alt={member.name}
        className="coordinator-photo"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
      <motion.img
        src={member.photo2}
        alt={member.name}
        className="coordinator-photo-hover"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
      
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
