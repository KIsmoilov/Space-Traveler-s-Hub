import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/Missions';

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
    <div>Missions</div>
  );
};

export default Missions;
