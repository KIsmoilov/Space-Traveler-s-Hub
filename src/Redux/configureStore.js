import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';
import missionReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    Rockets: rocketReducer,
    Missions: missionReducer,
  },
});

export default store;
