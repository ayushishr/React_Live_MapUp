import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfoCard = () => {
  const regionInfo = useSelector((state) => state.region.regionInfo);

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

export default RegionInfoCard;
