import styled from "styled-components";
import posed from "react-pose";

export const GridContainer = styled(
  posed.div({
    enter: { staggerChildren: 30 },
    exit: { staggerChildren: 30 }
  })
)`
  width: 100%;
  height: 83.7%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border: 4px solid white;
  border-right: 0;
  border-left: 0;
  box-sizing: border-box;
`;

export const GridItem = styled(
  posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  })
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid white;
  color: white;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FocusedPortaitContainer = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
)`
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
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  overflow: auto;
`;


export const Span = styled.span`
  font-size: 23pt;
`;

export const FocusedDescriptionContainer = styled(
  posed.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  })
)`
  border: 4px solid ${({ theme }) => theme.colors.gold};
  color: white;
  margin: 0 0 4.8611vh 2.1875vw;
  text-align: left;
  padding: 10px 50px 10px 50px;
  background-color: rgba(0, 0, 0, 0.7);

  h1 {
    font-size: 38px;
    font-weight: 300;
    span {
      font-size: 21px;
    }
  }

  ${Span} {
    font-size: 27px;
    font-weight: 300;
  }
`;

export const FocusedIconDescriptionCopy = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
)`
  flex: 1;
  width: 100%;
  font-size: 40px;
  font-weight: 300;

  &:before {
    content: '';
    display: block;
    clear: both;
  }
`;

export const GridIconOverlay = styled.div`
  height: 100%;
  width: 100%;
  transition: background-color 500ms;
  color: white;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 24pt;
  text-align: center;
  padding: 15px;
  padding-top: 2em;
  box-sizing: border-box;
  /* mix-blend-mode: multiply; */

  h3 {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;

  }
`;

export const Icon = styled.img`
  max-width: 3em;
  height: auto;
  display: inline-block;
`;

export const H1 = styled.div`
  font-size: 38px;
  margin-bottom: 5px;
`;

export const FocusedIconDescriptionContainer = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
)`
  padding: 3em;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  text-align: left;

  ${Icon} {
    vertical-align: middle;
    margin-right: 1em;
    max-width: 165px;
    float: left;
  }

  h2 {
    display: inline !important;
    vertical-align: middle;
    font-size: 50px;
    font-wight: 700;
    text-transform: uppercase;
  }
`;
