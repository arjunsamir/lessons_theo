import useLocation from "./utils/useLocation";
import useAsyncScript from "./utils/useAsyncScript";
import { useEffect, useRef, useState } from "react";
import config from "./config";


function App() {

  // Create Refs
  const mapRef = useRef();
  const mapElementRef = useRef()

  // Load Map Script Dynamically
  const googleMapsIsLoaded = useAsyncScript(config.gMaps.url + config.gMaps.key, "google-map-api");

  // Get User Loacation
  const [userLocation, setUserLocation] = useLocation()

  // Render Google Map
  useEffect(() => {

    if (!googleMapsIsLoaded) return
    
    // Create Map
    mapRef.current = new window.google.maps.Map(mapElementRef.current, {
      center: config.gMaps.center,
      zoom: 8,
    });

  }, [googleMapsIsLoaded])
  

  useEffect(() => {

    if (!userLocation || !googleMapsIsLoaded) return

    // Zoom to User Location
    mapRef.current.setCenter(userLocation)
    

  }, [userLocation, googleMapsIsLoaded])

  return (
    <div className="main">
      <h1>Ramen Finder</h1>
      <p>We're going to use witchcraft to find ramen restraunts near you...</p>
      <input type="text" />
      <div ref={mapElementRef} className="google-map">{!googleMapsIsLoaded && "Loading"}</div>
    </div>
  );
}

export default App;
