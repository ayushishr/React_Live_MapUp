import React from 'react';

const RegionInfo = ({ regionInfo }) => {
  return (
    <div>
      {regionInfo && (
        <div>
          <p>Currency: {regionInfo.currency}</p>
          <p>Speed Unit: {regionInfo.speedUnit}</p>
          <p>Distance Unit: {regionInfo.distanceUnit}</p>
          <p>Volume Unit: {regionInfo.volumeUnit}</p>
          <p>Timezone(s): {regionInfo.timezone.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default RegionInfo;