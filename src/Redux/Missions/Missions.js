/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Utils
import pick from '../utils';

// API

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

// Actions
const FETCH_MISSIONS = 'Missions/Missions/FETCH_MISSIONS';
const TOGGLE_JOIN_MISSION = 'Missions/Missions/TOGGLE_JOIN_MISSION';

// Reducer
const initialState = [];

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [...action.payload];
    case TOGGLE_JOIN_MISSION:
      return (state.map((missions) => {
        if (missions.mission_id === action.mission_id) {
          return {
            ...missions,
            reserved: !missions.reserved,
          };
        }
        return missions;
      }));
    default:
      return state;
  }
}

// Action Creators
const addJoined = (array) => {
  const missions = array.map((obj) => ({ ...obj, reserved: false }));
  return missions;
};

export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await axios.get(BASE_URL);
  const { data } = response;
  let missions = [];
  const selectedData = ['mission_id', 'mission_name', 'description'];

  data.forEach((object) => {
    missions.push(pick(object, selectedData));
  });
  missions = addJoined(missions);
  return missions;
});

export const toggleJoinMission = (mission_id) => ({ type: TOGGLE_JOIN_MISSION, mission_id });
