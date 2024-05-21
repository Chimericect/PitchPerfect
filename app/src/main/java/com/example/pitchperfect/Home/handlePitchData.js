import { useState } from 'react';

import { initialDataPoints } from '../Constants/fakeData';

export const useDataPoints = () => {
  const [dataPoints, setDataPoints] = useState(initialDataPoints);

  const addDataPoint = () => {
    const newDataPoint = {
      id: (dataPoints.length + 1).toString(),
      pitchType: 'New Pitch Type',
      targetSpot: 'New Target Spot',
      didHit: 'New Did Hit',
    };

    setDataPoints([...dataPoints, newDataPoint]);
  };

  return { dataPoints, addDataPoint };
};
