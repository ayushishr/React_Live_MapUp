import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// client/src/App.js
import React from 'react';

const OSMMap = ({ position}) => {
  return (
    <div style={{ height: '100vh' }}>
       
      <MapContainer key={`${position[0]}-${position[1]}`} center={position} zoom={5} style={{ height: '100%', zIndex: 50 }}>
      
        <TileLayer 
        key={`${position[0]}-${position[1]}`}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='
          &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
      </MapContainer>
    </div>
  );
};

export default OSMMap;