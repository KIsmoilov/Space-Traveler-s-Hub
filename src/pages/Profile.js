import React from 'react';
// Components
import MissionLists from '../components/MissionLists';
import RocketLists from '../components/RocketLists';

// Stylesheet
import './Profile.css';

const Profile = () => (
  <>
    <div className="profile-main-container">
      <div className="profile-missions-section">
        <h3 className="mission-lists">My Missions</h3>
        <MissionLists />
      </div>
      <div className="profile-rockets-section">
        <h3 className="rockets-list">My Rockets</h3>
        <RocketLists />
      </div>
    </div>
  </>
);

export default Profile;
