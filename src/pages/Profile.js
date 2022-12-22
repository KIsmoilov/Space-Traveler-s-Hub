import React from 'react';
import { useSelector } from 'react-redux';
// Components
import MissionLists from '../components/MissionLists';
import RocketLists from '../components/RocketLists';

// Stylesheet
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const reservedRockets = rockets.filter((item) => item.reserved === true);

  return (
    <>
      <div className="profile-main-container">
        <div className="profile-missions-section">
          <h3 className="mission-lists">My Missions</h3>
          <MissionLists />
        </div>
        <div className="profile-rockets-section">
          <h3 className="rockets-list">My Rockets</h3>
          {reservedRockets.map((rocket) => (
            <RocketLists
              key={rocket.id}
              rocket={rocket}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
