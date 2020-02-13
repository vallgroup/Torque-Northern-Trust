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
  POIResultList
} from "./Map.styles";

export default function Map() {
  const { fetchMap } = useNortherTrustActions();
  const params = useParams();
  const [poiSelected, setPoiSelected] = useState(null)
  const [poisList, setPoisList] = useState(null)

  useEffect(() => {
    return fetchMap(params.slug);
  }, []);

  const map = useMapContent();

  const mapTitle = map.map_details
    ? map.map_details.title
    : ''

  const selectPOI = index => {
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
          {map.pois
            && map.pois.map((poi, idx) => (
              <Button
                onClick={e => selectPOI(map.pois[idx] || null)}
                key={idx}
              >
                {poi.name}
              </Button>
            ))
          }

          <POIResultList>
            {poisList
              && poisList.map((poi, index) => (
                <p
                  key={index}
                >
                  {poi.name}
                </p>
              ))
            }
          </POIResultList>
        </PointsOfInterest>
      </MapPage>
    </>
  );
}
