import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Utils
import pick, { addReserved } from '../utils';

// API
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

// Action-Types
const GET_ALL_ROCKETS = 'Rockets/Rockets/GET_ALL_ROCKETS';
const TOGGLE_ROCKET_RESERVATION = 'Rockets/Rockets/TOGGLE_ROCKET_RESERVATION';

// Reducers
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_ROCKETS}/fulfilled`:
      return action.payload;
    case TOGGLE_ROCKET_RESERVATION:
      return (state.map((rocket) => {
        if (rocket.id === action.id) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      }));
    default:
      return state;
  }
}

// Action-Creators
export const fetchRockets = createAsyncThunk(GET_ALL_ROCKETS, async () => {
  const res = await axios.get(BASE_URL);
  const { data } = res;
  let rockets = [];
  const selectedData = ['id', 'rocket_name', 'rocket_type', 'flickr_images', 'description'];

  data.forEach((object) => {
    rockets.push(pick(object, selectedData));
  });
  rockets = addReserved(rockets);
  return rockets;
});

export const toggleReservation = (id) => ({ type: TOGGLE_ROCKET_RESERVATION, id });
