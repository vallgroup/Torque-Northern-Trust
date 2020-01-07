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
  justify-content: space-between;
`;
