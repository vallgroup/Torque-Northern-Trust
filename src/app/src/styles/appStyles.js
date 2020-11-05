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

export const BackgroundTileColor = color => {
  switch (color) {
    case "turquoise":
      return `rgba(100, 200, 175, 0.95)`;

    case "green":
      return `rgba(40, 145, 65, 0.95)`;

    case "dark green":
      return `rgba(15, 85, 65, 0.95)`;

    case "orange":
      return `rgba(190, 155, 55, 0.95)`;

    case "blue":
      return `rgba(0, 105, 155, 0.95)`;

    case "gold":
      return `rgba(185, 190, 0, 0.95)`;

    case "gray":
      return `rgba(100, 100, 105, 0.95)`;

    default:
      return `transparent`;
  }
}
