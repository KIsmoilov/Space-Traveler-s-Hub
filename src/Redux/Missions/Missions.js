// Actions
const DISPLAY_MISSIONS = 'Missions/Missions/DISPLAY_MISSIONS';
const JOIN_MISSION = 'Missions/Missions/JOIN_MISSION';
const LEAVE_MISSION = 'Missions/Missions/LEAVE_MISSION';

// Reducer
const initialState = [];

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_MISSIONS:
      return state;
    case JOIN_MISSION:
      return state;
    case LEAVE_MISSION:
      return state;
    default:
      return state;
  }
}

// Action Creators
