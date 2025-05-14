// src/components/Map.jsx
import React from "react";
import GoogleMapReact from "google-map-react";

// Marker Component
const Marker = ({ text }) => (
  <div className="text-red-600 text-xl font-bold">📍</div>
);

const GMap = ({ lat = 25.3792, lng = 68.3683, zoom = 11 }) => {
  const defaultProps = {
    center: { lat, lng },
    zoom,
  };

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg border">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyA-5XplBE9YoK2JYxX6HzN1V-qkQl6p3Hg", // Change Your Map Key
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={lat} lng={lng} text="📍" />
      </GoogleMapReact>
    </div>
  );
};

export default GMap;
