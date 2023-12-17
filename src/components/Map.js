// client/src/components/Map.js
import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 1,
    });
  }

  componentDidUpdate() {
    const { regionInfo } = this.props;
    if (regionInfo) {

    }
  }

  render() {
    return <div ref={this.mapContainer} style={{ width: '100%', height: '400px' }} />;
  }
}

export default Map;
