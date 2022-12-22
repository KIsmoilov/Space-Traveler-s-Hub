/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RocketLists.css';

const RocketLists = ({ rocket }) => {
  const { rocket_name } = rocket;

  return (
    <div className="rocket-main-container">
      <span className="profile-rocket-name">{ rocket_name }</span>
    </div>
  );
};

RocketLists.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default RocketLists;
