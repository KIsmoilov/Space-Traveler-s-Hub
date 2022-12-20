/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { DisplayMissions } from '../Redux/Missions/Missions';

// StyleSheet
import './MissionLists.css';

export default function Missions({ missions }) {
  const dispatch = useDispatch();

  const { mission_id, mission_name, description } = missions;

  useEffect(() => {
    dispatch(DisplayMissions());
  }, [dispatch]);

  return (
    <div className="mission-main-container">
      <span className="mission-name">{mission_id}</span>
      <span className="mission-name">{mission_name}</span>
      <span className="mission-name">{description}</span>
    </div>
  );
}

Missions.propTypes = {
  missions: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
