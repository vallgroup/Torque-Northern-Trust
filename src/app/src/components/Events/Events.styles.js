import styled from "styled-components";
import {Button} from '../../styles/appStyles'

export const EventsPage = styled.div`
  height: 83.7%;
  width: 100vw;
  background-color: rgb(174, 145, 50);
  display: flex;
  align-items: center;
  color: white;
`;

export const EventsDisplayContainer = styled.div`
  width: 50%;
  margin-left: 100px;
  text-align: left;
`;

export const EventWrapper = styled.div`
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute:
    top: 0;
    left: 0;
    height: 5px;
    background: white;
    width: 45%;
  }

  h2 {
    text-transform: uppercase;
    font-size: 44pt;
    font-weight: 300;
    margin: 0.5em 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 0.15em;
  justify-content: space-between;
  width: 30%;
`;

export const EventButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25em 3em 1em 0;
`;
