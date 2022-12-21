import React from 'react';
import { useSelector } from 'react-redux';

// Components
import RocketDetails from '../components/RocketDetails';

// Stylesheet
import '../components/RocketDetails.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.Rockets);

  console.log(rockets);
  return (
    <>
      <div className="rockets-main-section">
        <RocketDetails />
      </div>
    </>
  );
};

export default Rockets;
