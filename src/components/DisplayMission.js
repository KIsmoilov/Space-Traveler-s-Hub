/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import './DisplayMission.css';

export default function DisplayMission({ mission, eventHandler }) {
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
        { mission.joined ? (
          <button type="button" className="active-btn">Active Member</button>
        ) : (
          <button type="button" className="notMember-btn">NOT A MEMBER</button>
        )}
      </div>
      <div className="grid-item">
        { mission.joined ? (
          <button
            type="button"
            className="leave-btn"
            onClick={() => {
              eventHandler(mission_id);
            }}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="join-btn"
            onClick={() => {
              eventHandler(mission_id);
            }}
          >
            Join Mission
          </button>
        )}
      </div>
    </div>
  );
}

DisplayMission.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventHandler: PropTypes.func.isRequired,
};
