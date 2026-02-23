import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="team-member-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="member-image-container">
        <motion.img
          src={member.photo1}
          alt={member.name}
          className="member-photo"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <motion.img
          src={member.photo2}
          alt={member.name}
          className="member-photo-hover"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-position">{member.position}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
