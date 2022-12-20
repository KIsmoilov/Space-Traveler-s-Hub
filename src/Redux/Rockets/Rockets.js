import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

// Action-Types
const GET_ALL_ROCKETS = 'Rockets/Rockets/GET_ALL_ROCKETS';
const RESERVE_ROCKET = 'Rockets/Rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'Rockets/Rockets/CANCEL_RESERVATION';

// Reducers
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ROCKETS:
      return state;
    case RESERVE_ROCKET:
      return state;
    case CANCEL_RESERVATION:
      return state;
    default:
      return state;
  }
}

// Action-Creators

const fetchRockets = createAsyncThunk(GET_ALL_ROCKETS, async () => {
  const res = await axios.get(BASE_URL);
  return res;
});

fetchRockets();
