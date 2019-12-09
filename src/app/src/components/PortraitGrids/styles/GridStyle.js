import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background: blue;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
  border: 1px solid black;
`;

export const FocusedPortaitContainer = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 5;
  grid-column-end: 8;
  background: red;
  transition: background-image 400ms;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
