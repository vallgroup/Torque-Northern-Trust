import styled from "styled-components";
import top_banner from "../../assets/top_banner.jpg";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 16.3%;
  // background-color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${top_banner});
  background-size: cover;
`;

export const LeftHeaderContent = styled.div`
  display: flex;
  width: 20%;
`;

export const RightHeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  color: white;
  height: 50%;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-left: 2.5vw;
`;

export const HeaderText = styled.h1`
  font-size: 94pt;
  font-weight: 300;
  margin: 0;
`;

export const Divider = styled.div`
  height: 100%;
  width: 10px;
  background: white;
`;

export const HomeButton = styled.img`
  margin-right: 2.5vw;
  height: 100%;
`;
