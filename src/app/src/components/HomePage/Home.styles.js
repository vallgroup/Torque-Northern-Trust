import styled from "styled-components";
import posed from "react-pose";

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background-image: url(${props => props.backgroundImage});
  transition: background-image 1000ms;
`;

export const SideBarContainer = styled.div`
  width: 200px;
  position: absolute;
  right: 2.5%;
  top: 22%;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

export const MenuItemContainer = styled.div`
  margin-bottom: 20px;
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
  font-size: 2vw;
`;

export const DisplayInnerContainer = styled.div`
  margin-top: 9.5%;
  margin-left: 4.6%;
`;

export const DisplayBoxTitle = styled.div`
  background: ${({ theme }) => theme.colors.gold};
  width: 40%;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSideContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TimeDateContainer = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  position: relative;
  top: 22%;
  left: 5%;
`;

export const BottomDescriptionContainer = styled.div`
  position: relative;
  top: 22%;
  left: 5%;
`;

export const P = styled(
  posed.p({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  })
)``;
