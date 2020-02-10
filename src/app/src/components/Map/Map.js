import React, {useEffect, useState} from "react";
import { MapPage, PointsOfInterest } from "./Map.styles";
import { MapContainer } from "./Map.styles";
import Header from "../Header/Header";
import TorqueMap from '../TorqueMap'
import { useNortherTrustActions } from "../../redux/hooks/commands/useNorthernTrustActions";
import { useMapContent } from "../../redux/hooks/queries/useMapContent";
import { useParams } from "react-router-dom";

export default function Map() {
  const { fetchMap } = useNortherTrustActions();
  const params = useParams();
  const [poiSelected, setPoiSelected] = useState(null)

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
            />
          }
        </MapContainer>
        <PointsOfInterest>
          {map.pois
            && map.pois.map((poi, idx) => (
              <button
                onClick={e => selectPOI(idx)}
                key={idx}
              >
                {poi.name}
              </button>
            ))
          }
        </PointsOfInterest>
      </MapPage>
    </>
  );
}
