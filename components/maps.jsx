import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const GoogleMaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY_MAPS,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return <Maps />;
};

const Maps = () => {
  return (
    <GoogleMap
      mapContainerStyle={{
        height: '50%',
        width: '60%',
        margin: '2rem 7rem',
        borderRadius: '10px',
      }}
      zoom={8}
      center={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  );
};

export default GoogleMaps;
