import React, { useEffect, useState, createRef } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
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
  const [poisList, setPoisList] = useState([])
  const [activeMarker, setActiveMarker] = useState(null)
  const [showInfowindow, setShowInfowindow] = useState(false)

  const map = createRef();
  let searchClient = null;

  useEffect(() => {
    const centerMap = async () => {
      if (google && mapDetails.center) {
        await geocode(mapDetails.center, (results, status) => {
          // successful, resove the promise
          if (status === 'OK') {
            // pass the lat and lng coordinates
            setMapCenter({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
              address: results[0].formatted_address,
            })
          }
        });
      }
    }
    centerMap()


  }, [])

  useEffect(() => {
    console.log(poiSelected)
    setPoisList([])
    poiSelected && setPoisList(poiSelected.preset_pois)
  }, [poiSelected])

  useEffect(() => {
    if (!mapCenter) return;
console.log(poisList)
    if (updatePOIsList
    && 'function' === typeof updatePOIsList ) {
      updatePOIsList(poisList)
    }
  }, [poisList])

  const computePOIsDistance = async (pois) => {
    if (!pois) return;

    const { lng: longitude, lat: latitude } = mapCenter
    const origin = { longitude, latitude }

    const destinations = pois.map((poi, i) => {
      const dest = {
        longitude: poi.geometry && poi.geometry.location.lng(),
        latitude: poi.geometry && poi.geometry.location.lat()
      }
      return new google.maps.LatLng(dest.latitude, dest.longitude)
    });

    await getDistance(origin, destinations, pois)
  }

  const geocode = async (address, callback) => {
    const geoClient = new google.maps.Geocoder();
    const coordinates = await geoClient.geocode({ address },
      callback
    );
  }

  const nearbySearch = async () => {
    setPoisList(null)
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
            computePOIsDistance(results)
            return;
          }

          throw Error(`Nearby Search failed with status: ${status}`);
        } catch (err) {
          console.error(err);
        }
      }
    );
  }

  // TODO -- Retrieve the distance for each poi in the list
  // before returning it up to the parent component.
  const getDistance = async (origin, destinations, currentPOIs) => {
    const distanceMatrixService = new google.maps.DistanceMatrixService();
    await distanceMatrixService.getDistanceMatrix(
      {
        origins: [new google.maps.LatLng(origin.latitude, origin.longitude)],
        destinations: destinations,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
      },
      (results, status) => {
      try {
        // console.log(status)
        if (status === 'OK') {
          const newPois = [...currentPOIs.map((poi, idx) => (
            {...poi, ...results.rows[0].elements[idx]}
          ))]
          // console.log(currentPOIs, newPois)
          setPoisList(newPois)
        }

        throw Error(`Distance Matrix failed with status: ${status}`);
      } catch (err) {

      }
    }
    );
  }

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker)
    setShowInfowindow(true)
  }

  const onMapClick = (props, map) => {
    setActiveMarker(null)
    setShowInfowindow(false)
  }

  const renderMarkers = () => {

    if (!poiSelected || !poisList || 0 === poisList.length) {
      return;
    }

    console.log(poisList)

    const { google } = props;
    const width = (poiSelected.marker && poiSelected.marker.width) || 60;
    const height = (poiSelected.marker && poiSelected.marker.height) || 100;
    const filteredPois = poisList.filter(
      poi => !!poi && (poi.latitude && poi.longitude),
    );
    return filteredPois.map((poi, index) => (
      <Marker
        key={index}
        onClick={onMarkerClick}
        name={poi.title}
        position={{ lng: poi.longitude, lat: poi.latitude }}
        icon={{
          url: (poiSelected.marker && poiSelected.marker.url) || '',
          anchor: new google.maps.Point(width / 2, height),
          size: new google.maps.Size(width, height),
          scaledSize: new google.maps.Size(width, height),
        }}
        infowindow={poi.infowindow}
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
      onClick={onMapClick}
    >
      {renderMarkers()}

      <InfoWindow marker={activeMarker} visible={showInfowindow}>
        <InfoWindowRoot>
          {activeMarker
            && <>
              {activeMarker?.infowindow
                ? (
                  <div className="info_container vicinity">
                    {activeMarker.infowindow}
                  </div>
                )
                : <>
                  <h3>{activeMarker.name}</h3>
                  <p>{activeMarker.location}</p>
                </>
              }
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
