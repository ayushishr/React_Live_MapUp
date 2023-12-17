// regionActions.js
export const setSelectedRegion = (region) => ({
  type: 'SET_SELECTED_REGION',
  payload: region,
});

export const loadRegionInfo = (regionInfo) => ({
  type: 'LOAD_REGION_INFO',
  payload: regionInfo,
});
