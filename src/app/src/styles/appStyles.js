import styled from "styled-components";
import posed from "react-pose";

export const Colors = {
  mustard: `rgb(174, 145, 50)`,
  white: `white`,
  lightGray: `lightgrey`
}

export const AppContainer = styled.div`
  height: 100vh;
`;

export const RouteContainer = styled(
  posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
  })
)`
  height: 100%;
  width: 100%;
`;

export const Button = styled.button.attrs(props => ({
  className: `${props.inverse && `inverse`}`,
}))`
  background-color: transparent;
  appearance: none;
  border: 2px solid #fff;
  color: #fff;
  font-size: 20pt;
  padding: 0.625em;
  margin: 1.5em 0.25em;
  text-transform: uppercase;
  transition: all .4s ease-in-out;
  cursor: pointer;
  display: inline-block;

  &:hover,
  &:active,
  &:focus {
    background-color: ${Colors.white};
    color: ${Colors.mustard};
  }

  &.inverse {
    background-color: ${Colors.white};
    color: ${Colors.mustard};
    &:hover,
    &:active,
    &:focus {
      background-color: ${Colors.mustard};
      color: ${Colors.white};
    }
  }
`
