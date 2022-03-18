import useLocation from "./utils/useLocation";
import useAsyncScript from "./utils/useAsyncScript";
import { useEffect, useRef, useState } from "react";
import config from "./config";


function App() {

  // Create Refs
  const mapRef = useRef();
  const mapElementRef = useRef()

  // Load Map Script Dynamically
  const googleMapsIsLoaded = useAsyncScript(`${config.gMaps.url}?key=${config.gMaps.key}&libraries=places`);

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

    // use the location to find ramen places

    // Pass the data we want into the request
    const request = {
      query: 'ramen',
      fields: ['name', 'geometry'],
    };

    console.log(window.google.maps.PlacesService)


    return;
  
    // Create a Places Service
    const service = new window.google.maps.places.PlacesService(mapRef.current);

    service.findPlaceFromQuery(request, function(results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        // for (var i = 0; i < results.length; i++) {
        //   createMarker(results[i]);
        // }
        // mapRef.current.setCenter(results[0].geometry.location);
      }
    });
    

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
