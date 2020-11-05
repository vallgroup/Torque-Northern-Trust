import styled from "styled-components";
import {Colors} from '../../styles/appStyles'

export const MapPage = styled.div`
  height: 83.7%;
  width: 100%;
  display: flex;
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 62.5%;
  background-color: ${Colors.lightGray};
  border: 4px solid ${Colors.white};
  box-sizing: border-box;
  position: relative;
`;

export const PointsOfInterest = styled.div`
  width: 37.5%;
  height: 100%;
  background-color: ${Colors.mustard};
  border: 4px solid ${Colors.white};
  box-sizing: border-box;
  padding: 8em 3em;
`

export const PointsOfInterestButtons = styled.div`
  text-align: left;
`

export const POIResultList = styled.div`
  border-top: 2px solid ${Colors.white};
  min-height: 3em;
  border-bottom: 2px solid ${Colors.white};
  text-align: left;
  height: 45vh;
  overflow: auto;

  p {
    font-size: 24pt;
    text-transform: uppercase;
    color: ${Colors.white};
  }
`
