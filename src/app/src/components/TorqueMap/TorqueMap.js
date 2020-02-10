import React, { useEffect, useState, createRef } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import Geocode from './helpers/Geocode';
// import DistanceMatrix from './helpers/DistanceMatrix';
// import NearbySearch from './helpers/NearbySearch';
import { MapContainer, InfoWindowRoot } from './Map.styles';

function TorqueMap(props) {
  const {google} = props
console.log(props.poiSelected)
  const [mapDetails, setMapDetails] = useState(props.map || {})
  const [mapCenter, setMapCenter] = useState(null)

  const map = createRef();
  const searchClient = null;

  useEffect(() => {
    const centerMap = async () => {
      if (google && mapDetails.center) {
        await geocode(mapDetails.center);
      }
    }
    centerMap()
  }, [])

  const geocode = async address => {
    const geoClient = new google.maps.Geocoder();
    const coordinates = await geoClient.geocode({ address },
      (results, status) => {
        // successful, resove the promise
        if (status === 'OK') {
          // pass the lat and lng coordinates
          setMapCenter({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
            address: results[0].formatted_address,
          })
        }
      }
    );
   };

  return (
    <Map
      google={google}
      zoom={16}
      center={mapCenter}
      ref={map}
      styles={props.styles}
    >
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBtJClII3bXTZjSDnHoIrnawoQgqg9kx0Q'
})(TorqueMap);
