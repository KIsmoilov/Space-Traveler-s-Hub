import React from 'react';
import { useSelector } from 'react-redux';
// Components
import MissionLists from '../components/MissionLists';
import RocketLists from '../components/RocketLists';

// Stylesheet
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const missions = useSelector((state) => state.Missions);
  const reservedRockets = rockets.filter((item) => item.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.joined === true);

  return (
    <>
      <div className="profile-main-container">
        <div className="profile-missions-section">
          <h3 className="mission-lists">My Missions</h3>
          {joinedMissions.length ? (
            joinedMissions.map((mission) => (
              <MissionLists
                key={mission.mission_id}
                mission={mission}
              />
            ))
          ) : (
            <span className="no-reserved">No Joined Missions!!!</span>
          )}
        </div>
        <div className="profile-rockets-section">
          <h3 className="rockets-list">My Rockets</h3>
          {reservedRockets.length ? (
            reservedRockets.map((rocket) => (
              <RocketLists
                key={rocket.id}
                rocket={rocket}
              />
            ))
          ) : (
            <span className="no-reserved">No Reserved Rocket!!!</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
