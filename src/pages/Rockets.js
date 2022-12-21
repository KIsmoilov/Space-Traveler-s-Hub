import React from 'react';
import { useSelector } from 'react-redux';

// Components
import RocketDetails from '../components/RocketDetails';

// Stylesheet
import '../components/RocketDetails.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.Rockets);

  return (
    <>
      <div className="rockets-main-section">
        {rockets.map((rocket) => <RocketDetails key={rocket.id} rocket={rocket} />)}
      </div>
    </>
  );
};

export default Rockets;
