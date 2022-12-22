/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

// StyleSheet
import './MissionLists.css';

const MissionLists = ({ mission }) => {
  const { mission_name } = mission;

  return (
    <div className="mission-main-container">
      <span className="mission-name">{ mission_name }</span>
    </div>
  );
};

MissionLists.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MissionLists;
