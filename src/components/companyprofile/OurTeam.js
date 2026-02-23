import React from 'react';
import { motion } from 'framer-motion';
import LeadershipCard from './LeadershipCard';
import TeamSection from './TeamSection';
import teamData from '../../data/team/organizationStructure.json';
import '../../css/companyprofile/ourTeam.css';

const OurTeam = () => {
  const [owner] = teamData;
  const generalManager = owner.children[0];
  const supervisor = generalManager.children[0];
  const coordinators = supervisor.children;

  const tierVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="company-profile-section mb-5">
      <div className="text-center">
        <h1 className="section-heading">
          Our Team
          <div className="underline">
            <span></span>
          </div>
        </h1>
      </div>
      <div className="team-container">
        {/* Tier 1: Owner */}
        <motion.div className="team-tier" variants={tierVariants} initial="hidden" animate="visible">
          <LeadershipCard member={owner} />
        </motion.div>

        {/* Tier 2: GM */}
        <motion.div className="team-tier tier-reversed" variants={tierVariants} initial="hidden" animate="visible" custom={1} transition={{delay: 0.2}}>
            <LeadershipCard member={generalManager} isReversed={true} />
        </motion.div>

        {/* Tier 3: Supervisor */}
        <motion.div className="team-tier" variants={tierVariants} initial="hidden" animate="visible" custom={2} transition={{delay: 0.4}}>
            <LeadershipCard member={supervisor} />
        </motion.div>

        {/* Team Sections */}
        <div className="team-sections-container">
            {coordinators.map((coord, index) => (
                <TeamSection key={coord.id} team={coord} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
