import { useState } from "react";

const useLocation = () => {

  const [location, setLocation] = useState();

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      if (!location) setLocation({ lat: latitude, lng: longitude });
    })
  }

  return [location, setLocation];

}

export default useLocation;