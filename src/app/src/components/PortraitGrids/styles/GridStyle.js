import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  height: 100%;
  width: 100%;
  color: white;
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
  border: 1px solid white;
`;

export const GridIconOverlay = styled.div`
  height: 100%;
  width: 100%;
  transition: background-color 500ms;
  color: white;
`;

export const Icon = styled.img`
  height: 100px;
  width: 100px;
`;
