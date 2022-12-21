/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import './DisplayMission.css';

export default function DisplayMission({ mission }) {
  const dispatch = useDispatch();
  const { mission_id, mission_name, description } = mission;

  return (
    <div className="missionList">
      <div className="grid-item">
        <p className="missionName">{mission_name}</p>
      </div>
      <div className="grid-item">
        <p className="missionDescription">{description}</p>
      </div>
      <div className="grid-item">
        <button type="button" className="active-btn">Active Member</button>
      </div>
      <div className="grid-item">
        <button
          type="button"
          className="join-btn"
          onClick={() => {
            dispatch((mission_id));
          }}
        >
          Join Mission
        </button>
      </div>
    </div>
  );
}

DisplayMission.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
