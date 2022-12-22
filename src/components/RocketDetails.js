/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import './RocketDetails.css';
// import rimg from '../assets/web3-hackathon-project-screenshot.png';

const RocketDetails = ({ rocket, eventHandler }) => {
  const {
    id, rocket_name, flickr_images, description, reserved,
  } = rocket;

  return (
    <>
      <div className="rocket-details-container">
        <div className="rocket-image-section">
          <img src={flickr_images[0]} alt={rocket_name} />
        </div>
        <div className="rocket-detail-section">
          <h2 className="rocket-name">{rocket_name}</h2>
          <div>
            {reserved && (
              <span className="reservation-status">Reserved</span>
            )}
            <span className="rocket-description">{description}</span>
          </div>
          <div className="rocket-btn-div">
            <button
              type="button"
              className={reserved ? 'rocket-btn-cancel' : 'rocket-btn-reserve'}
              onClick={() => { eventHandler(id); }}
            >
              {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

RocketDetails.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default RocketDetails;
