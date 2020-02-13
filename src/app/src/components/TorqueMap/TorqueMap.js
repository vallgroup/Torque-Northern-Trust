import React, { useEffect, useState, createRef } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import Geocode from './helpers/Geocode';
// import DistanceMatrix from './helpers/DistanceMatrix';
// import NearbySearch from './helpers/NearbySearch';
import { MapContainer, InfoWindowRoot } from './Map.styles';

function TorqueMap(props) {
  const {
    google,
    pois,
    poiSelected,
    updatePOIsList, // used to update sidebar
  } = props

  const [mapDetails, setMapDetails] = useState(props.map || {})
  const [mapCenter, setMapCenter] = useState(null)
  const [poisList, setPoisList] = useState(null)
  const [activeMarker, setActiveMarker] = useState(null)
  const [showInfowindow, setShowInfowindow] = useState(false)

  const map = createRef();
  let searchClient = null;

  useEffect(() => {
    const centerMap = async () => {
      if (google && mapDetails.center) {
        await geocode(mapDetails.center);
      }
    }
    centerMap()
  }, [])

  useEffect(() => {
    nearbySearch()
  }, [poiSelected])

  useEffect(() => {
    if (updatePOIsList
    && 'function' === typeof updatePOIsList ) {
      updatePOIsList(poisList)
    }
  }, [poisList])

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
  }

  const nearbySearch = async () => {
    // check that we have what we need first
    if (!(map.current
      && map.current.map
      && poiSelected)) {
      return [];
    }
    // if we have not instantiated the searchClient
    // do it now. This will do it only once per mount
    if (!searchClient) {
      const mapRef = map.current.map
      searchClient = new google.maps
        .places.PlacesService(mapRef);
    }
    // search
    await searchClient.nearbySearch(
      {
        keyword: poiSelected.keyword,
        location: mapCenter,
        radius: 1000,
      },
      (results, status, pagination) => {
        try {
          // if 0 results
          if (status === 'ZERO_RESULTS') {
            setPoisList([])
            return;
          }
          // if succesful resolve promise
          if (status === 'OK' && results.length > 0) {
            setPoisList(results)
            return;
          }

          throw Error(`Nearby Search failed with status: ${status}`);
        } catch (err) {
          console.error(err);
        }
      }
    );
  }

  const getInfoWindowForMarker = poi => {
    console.log(poi)
    const { name, vicinity } = poi;

    const info = {
      name,
      vicinity
    };

    return info;
  }

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker)
    setShowInfowindow(true)
  }

  const renderMarkers = () => {
    const { google } = props;

    const width = 60;
    const height = 100;

    if (!poisList) {
      return;
    }
    console.log(poisList)

    const filteredPois = poisList.filter(
      poi => !!poi && poi.geometry,
    );
    return filteredPois.map((poi, index) => (
      <Marker
        key={poi.name}
        onClick={onMarkerClick}
        name={poi.name}
        position={{ lng: poi.geometry.location.lng(), lat: poi.geometry.location.lat() }}
        icon={{
          url: poi.icon,
          anchor: new google.maps.Point(width / 2, height),
          size: new google.maps.Size(width, height),
          scaledSize: new google.maps.Size(width, height),
        }}
        infowindow={getInfoWindowForMarker(poi)}
      />
    ));
  }

  return (
    <Map
      google={google}
      zoom={16}
      center={mapCenter}
      ref={map}
      styles={props.styles}
    >
      {renderMarkers()}

      <InfoWindow marker={activeMarker} visible={showInfowindow}>
        <InfoWindowRoot>
          {activeMarker
            && <>
              <h3>{activeMarker.name}</h3>
                {activeMarker?.infowindow?.address && (
                <div className="info_container address">
                  {activeMarker.infowindow.address}
                </div>
              )}
              <div className="info_container">
                {activeMarker?.infowindow?.distance && (
                  <div>{activeMarker.infowindow.distance}</div>
                )}
                {activeMarker?.infowindow?.duration && (
                  <div>{activeMarker.infowindow.duration}</div>
                )}
              </div>
            </>
          }
        </InfoWindowRoot>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBtJClII3bXTZjSDnHoIrnawoQgqg9kx0Q'
})(TorqueMap);
