import React from 'react';
import { motion } from 'framer-motion';
import CoordinatorCard from './CoordinatorCard';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = ({ team, index }) => {
  const getTeamClass = (position) => {
    if (position.toLowerCase().includes('it')) return 'team-it';
    if (position.toLowerCase().includes('administration')) return 'team-administrasi';
    if (position.toLowerCase().includes('publication')) return 'team-publikasi';
    return '';
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        delay: index * 0.3, // Stagger animation for each section
        ease: 'easeOut'
      } 
    },
  };

  return (
    <motion.section 
      className={`team-section ${getTeamClass(team.position)}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="team-section-title">{team.position.replace('Koordinator ', '')}</h2>
      <div className="team-section-content">
        <div className="team-section-coordinator">
          <CoordinatorCard member={team} />
        </div>
        <div className="team-section-members">
          {team.children.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
