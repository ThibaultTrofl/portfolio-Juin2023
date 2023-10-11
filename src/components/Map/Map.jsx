import "../Map/Map.css";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ longitude, latitude }) => {
  const viewPort = {
    latitude: latitude,
    longitude: longitude,
    zoom: 6,
  };
  return (
    <div className="map">
      <ReactMapGl
        {...viewPort}
        mapboxAccessToken={import.meta.env.VITE_TOKEN_MAP}
        mapStyle={import.meta.env.VITE_ADRESS_MAP}
      >
        <Marker latitude={latitude} longitude={longitude}></Marker>
      </ReactMapGl>
    </div>
  );
};

export default Map;
