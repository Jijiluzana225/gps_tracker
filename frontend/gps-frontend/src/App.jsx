import "./App.css";
import GeoTracker from "./components/GeoTracker";
import MapTracker from "./components/MapTracker";

function App() {
  return (
    <>
      <header>GPS Live Tracker</header>
      <div className="container">
        <GeoTracker />
        <MapTracker />
      </div>
    </>
  );
}

export default App;
