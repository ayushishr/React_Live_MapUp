// store/reducers.js

import { coordinates, regionInfoData } from "../config";

// regionReducer.js
const initialState = {
  selectedRegion: "United States",
  regionInfo: regionInfoData["United States"],
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_REGION':
      return { ...state, selectedRegion: action.payload };
    case 'LOAD_REGION_INFO':
      return { ...state, regionInfo: action.payload };
    default:
      return state;
  }
};

export default regionReducer;
