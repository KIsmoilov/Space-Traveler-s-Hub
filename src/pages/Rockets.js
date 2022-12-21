import React from 'react';
import { useSelector } from 'react-redux';

// Components
import RocketDetails from '../components/RocketDetails';

// Stylesheet
import '../components/RocketDetails.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.Rockets);
  const toggleReservation = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="rockets-main-section">
        {rockets.map((rocket) => (
          <RocketDetails
            key={rocket.id}
            rocket={rocket}
            toggleReservation={toggleReservation}
          />
        ))}
      </div>
    </>
  );
};

export default Rockets;
