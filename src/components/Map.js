import {useState, useEffect} from 'react'

const Map = () => {

  const [location, setLocation] = useState({
    loaded: false,
    coordinates:{lat: "", lng: ""}
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      lcoordinates:{
        lat: location.coords.latitude,
        lng: location.coords.longitude
      },
    });
  };

  const onError = error => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
   if( !("geoLocation" in navigator) ){
     onError({
          code: 0,
          message: "Browser doesn't support geolocation",
        });
   }

   navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}

export default Map