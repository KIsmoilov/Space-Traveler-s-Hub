import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/Missions';
import DisplayMission from '../components/DisplayMission';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.Missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="listContainer">
      <div className="gridHeader">
        <h3 className="gridTitle">Mission</h3>
        <h3 className="gridTitle">Description</h3>
        <h3 className="gridTitle">Status</h3>
        <h3 className="gridTitle">Missions with description and status</h3>
      </div>
      {missions.map((mission) => <DisplayMission key={mission.id} mission={mission} />)}
    </div>
  );
};

export default Missions;
