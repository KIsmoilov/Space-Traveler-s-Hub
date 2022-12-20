import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Utils
import pick from '../utils';

// API

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

// Actions
const DISPLAY_MISSIONS = 'Missions/Missions/DISPLAY_MISSIONS';
const JOIN_MISSION = 'Missions/Missions/JOIN_MISSION';
const LEAVE_MISSION = 'Missions/Missions/LEAVE_MISSION';

// Reducer
const initialState = [];

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case `${DISPLAY_MISSIONS}/fulfilled`:
      return [...state, ...action.payload];
    case JOIN_MISSION:
      return state;
    case LEAVE_MISSION:
      return state;
    default:
      return state;
  }
}

// Action Creators
export const fetchMissions = createAsyncThunk(DISPLAY_MISSIONS, async () => {
  const response = await axios.get(BASE_URL);
  const { data } = response;
  const missions = [];
  const selectedData = ['mission_id', 'mission_name', 'description'];

  data.forEach((object) => {
    missions.push(pick(object, selectedData));
  });
  console.log(missions);
  return missions;
});
