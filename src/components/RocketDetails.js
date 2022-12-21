import React from 'react';
import { useSelector } from 'react-redux';

// Stylesheet
import './RocketDetails.css';
import rimg from '../assets/web3-hackathon-project-screenshot.png';

const RocketDetails = () => {
  const rockets = useSelector((state) => state.Rockets);

  console.log(rockets);

  return (
    <>
      <div className="rocket-details-container">
        <div className="rocket-image-section">
          <img src={rimg} alt="/" />
        </div>
        <div className="rocket-detail-section">
          <h2 className="rocket-name">Title</h2>
          <div>
            <span className="reservation-status">Researved</span>
            <span className="rocket-description" />
          </div>
          <div className="rocket-btn">
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RocketDetails;
