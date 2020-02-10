import styled from "styled-components";
import posed from "react-pose";

import { Link } from "react-router-dom";

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-image: url(${props => props.backgroundImage});
  transition: background-image 1000ms;
  background-size: cover;
`;

export const HomePageLogo = styled.img`
  position: fixed;
  top: 7%;
  left: 2%;
  z-index: 9999;
  width: 11vw;
`;

export const SideBarContainer = styled.div`
  width: 20vw;
  position: absolute;
  right: 2.5%;
  top: 22%;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

export const SideBarP = styled.p`
  margin-bottom: 5px;
  margin-top: 0;
  font-size: 41pt;
  color: #fff;
`;

export const MenuItemContainer = styled.div`
  margin-bottom: 20px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
`;

export const DisplayContainer = styled.div`
  height: 50%;
  width: 47%;
  border: 4px solid ${({ theme }) => theme.colors.gold};
  background-color: rgba(0, 0, 0, 0.7);
  text-align: left;
  position: relative;
  top: 22%;
  left: 5%;
  font-size: 52pt;
`;

export const DisplayInnerContainer = styled.div`
  margin-top: 4.8vh;
  margin-left: 2.1vw;
`;

export const DisplayBoxTitle = styled.h1`
  background: ${({ theme }) => theme.colors.gold};
  font-size: 65pt;
  display: inline;
  padding: 10px 30px 10px 30px;
`;

export const LeftSideContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TimeDateContainer = styled.p`
  color: ${({ theme }) => theme.colors.gold};
  position: relative;
  top: 22%;
  left: 5%;
  font-size: 72pt;
  margin: 0;
  margin-top: 50px;
  vertical-align: middle;
`;

export const Span = styled.span`
  font-size: 33pt;
  lin-height: 43pt;
  font-weight: 300;
  text-transform: uppercase;
  vertical-align: middle;
`;

export const BottomDescriptionContainer = styled.p`
  position: relative;
  top: 24%;
  left: 5%;
  font-size: 60pt;
  font-weight: 100;
  margin: 0;
  font-style: italic;
`;

export const P = styled(
  posed.p({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  })
)``;

export const Logo = styled.img`
  position: fixed;
  top: 8.2vh;
  left: 2.5vw;
`;
