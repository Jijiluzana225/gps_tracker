import { useEffect, useState } from "react";
import axios from "axios";
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from "@react-google-maps/api";

const deviceId = "device001";

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px'
};

export default function MapTracker() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAp38ahRHi7YSU7iDITGyvJSHT6uo8-RFE" // Only the key here!
  });

  useEffect(() => {
    const fetchLocation = () => {
      axios.get(`http://localhost:8000/api/trackers/${deviceId}/`)
        .then(res => {
          const { latitude, longitude } = res.data;
          setPosition({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
        });
    };

    fetchLocation();
    const interval = setInterval(fetchLocation, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) return <p>Loading Google Maps...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={16}
    >
      <Marker position={position} />
    </GoogleMap>
  );
}
