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

  useEffect(() => {
    return fetchMap(params.slug);
  }, []);

  useEffect(() => {
    console.log(poiSelected, poisList)
    setStage(
      (poiSelected && null === poisList)
        ? 'loading'
        : 'init'
    )
  }, [poiSelected, poisList])

  const map = useMapContent();
console.log(map)
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
              pois={map.pois}
              styles={JSON.parse(map.map_styles)}
              poiSelected={poiSelected}
              updatePOIsList={newList => setPoisList(newList)}
            />
          }
        </MapContainer>

        <PointsOfInterest>
          <PointsOfInterestButtons>
            {map.pois
              && map.pois.map((poi, idx) => (
                <Button
                  onClick={e => selectPOI(map.pois[idx] || null)}
                  key={idx}
                  className={(selectPOI === poi) ? 'inverse' : 'something'}
                >
                  {poi.name}
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
                  {poi.name}
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
