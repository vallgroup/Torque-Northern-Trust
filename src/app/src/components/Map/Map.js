import React, {useEffect, useState} from "react";
import { MapContainer } from "./Map.styles";
import Header from "../Header/Header";
import TorqueMap from '../TorqueMap'
import { useNortherTrustActions } from "../../redux/hooks/commands/useNorthernTrustActions";
import { useMapContent } from "../../redux/hooks/queries/useMapContent";
import { useParams } from "react-router-dom";

import {Button} from '../../styles/appStyles'
import {
  MapPage,
  PointsOfInterest,
  POIResultList,
  PointsOfInterestButtons
} from "./Map.styles";

export default function Map() {
  const { fetchMap } = useNortherTrustActions();
  const params = useParams();
  const [poiSelected, setPoiSelected] = useState(null)
  const [poisList, setPoisList] = useState(null)
  const [stage, setStage] = useState('init')
  const map = useMapContent();
// console.log(map)
  useEffect(() => {
    return fetchMap(params.slug);
  }, []);

  useEffect(() => {
    // console.log(map);
    if (map && map.pois && map.pois.pois) {
      map.pois.pois.forEach((item, i) => {
        if (item.preload) {
          console.log(item)
          setPoiSelected(item)
          setPoisList(item.preset_pois)
        }
      });
    }
  }, [map])

  useEffect(() => {
    setStage(
      (poiSelected && null === poisList)
        ? 'loading'
        : 'init'
    )
  }, [poiSelected, poisList])

// console.log(map)
  const mapTitle = map.map_details
    ? map.map_details.title
    : ''

  const selectPOI = index => {
    setPoisList(null)
    setPoiSelected(index)
  }

  return (
    <>
      <Header headerText={mapTitle} />
      <MapPage>
        <MapContainer>
          {map.map_details
            && <TorqueMap
              map={map.map_details}
              pois={map.pois.pois}
              styles={JSON.parse(map.map_styles)}
              poiSelected={poiSelected}
              updatePOIsList={newList => setPoisList(newList)}
            />
          }
        </MapContainer>

        <PointsOfInterest>
          <PointsOfInterestButtons>
            {map.pois
              && map.pois.pois
              && map.pois.pois.map((poi, idx) => (
                <Button
                  onClick={e => selectPOI(map.pois.pois[idx] || null)}
                  key={idx}
                  className={(poiSelected === poi) ? 'inverse' : 'something'}
                >
                  {poi.title}
                </Button>
              ))
            }
          </PointsOfInterestButtons>

          <POIResultList>
            {poisList
              && poisList.map((poi, index) => (
                <p
                  key={index}
                >
                  {poi.title}
                  {poi.duration
                    && ` ${poi.duration.text} walk`
                  }
                </p>
              ))
            }

            {('loading' === stage)
              && <p>Loading points of interest...</p>
            }
          </POIResultList>

          <Button
            inverse
            onClick={e => alert('This will load something awesome!')}
          >
            View Experience
          </Button>
        </PointsOfInterest>
      </MapPage>
    </>
  );
}
