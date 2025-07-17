import { useEffect, useState } from "react";

export default function GeoTest() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Geolocation error:", err);
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return (
    <div>
      <h2>Live Location Test</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {position ? (
        <p>
          Lat: {position.latitude} <br />
          Lng: {position.longitude}
        </p>
      ) : (
        <p>Fetching GPS...</p>
      )}
    </div>
  );
}
