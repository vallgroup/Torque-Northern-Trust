import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  height: 83.7%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border: 4px solid white;
  box-sizing: border-box;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid white;
  color: white;
  box-sizing: border-box;
`;

export const FocusedPortaitContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 5;
  grid-column-end: 8;
  transition: background-image 500ms;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 4px solid white;
  box-sizing: border-box;
`;

export const GridIconOverlay = styled.div`
  height: 100%;
  width: 100%;
  transition: background-color 500ms;
  color: white;
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
`;
