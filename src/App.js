// client/src/App.js


import OSMMap from './components/OSMMap';
import RegionInfo from './components/RegionInfo';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import FormInput from './components/FormInput';
import { setSelectedRegion } from './store/actions';
import { coordinates,regions,regionInfoData } from './config';
import { Card } from 'antd';

const App =  () => {
  
  
  const selectedRegion =  useSelector((state) => state.region.selectedRegion);
  const [position, setPosition] =  useState(coordinates[selectedRegion]);
  const [regionInfo, setregionInfo] =  useState(regionInfoData[selectedRegion]);
  console.log(position)
  
  const dispatch = useDispatch();
  const handleRegionChange = async (value) => {
    
    
    dispatch(setSelectedRegion(value));
    console.log(value)
    
   
  }; 

  const handleLoadButtonClick = () => {
     setPosition(coordinates[selectedRegion])
     setregionInfo(regionInfoData[selectedRegion])
    
    const regionInfo = {
      currency: 'USD',
      speedUnit: 'kmph',
      distanceUnit: 'kilometers',
      volumeUnit: 'liters',
      timezone: ['2023 Mar 03 09:12:41.211 GMT', 'T2023 Mar 04 09:12:41.211 GMT'],
    };
    dispatch({ type: 'LOAD_REGION_INFO', payload: regionInfo });
  };

  return (
    <div>
      <Header/>
      
      <div style={{ position: 'absolute', top: '70px', left: '50px', zIndex: 100 ,height: '10px'}}>
      <FormInput
        regions={regions}
        selectedRegion={selectedRegion}
        onChange={handleRegionChange}
        onSubmit={handleLoadButtonClick}
      />
      <Card style={{ marginTop: '5px', display: 'inline-block', border: '2px solid #ccc', borderRadius: '8px', color: 'blue' }}>
      <RegionInfo regionInfo={regionInfo} />
      </Card>
      </div>

      
      <OSMMap position={position} />
      <Footer />
    </div>
  );
};

export default App;
