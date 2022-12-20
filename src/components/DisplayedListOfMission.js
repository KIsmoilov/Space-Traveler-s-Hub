import React from 'react';
import { useSelector } from 'react-redux';
import Missions from './Mission';

const List = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <div className="missionList">
      {missions.map((mission) => <Missions key={mission.id} mission={missions} />)}
    </div>
  );
};

export default List;
