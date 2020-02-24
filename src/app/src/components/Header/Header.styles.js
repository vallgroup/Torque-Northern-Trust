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
  position: ${props => 'bottom' === props.position ? `fixed` : `relative`};
  ${props => props.position}: 0;
  left: 0;
`;

export const LeftHeaderContent = styled.div`
  display: flex;
  width: 20%;
`;

export const GoBackBtn = styled.button`
  position: relative;
  appearance: none;
  display: inline-block;
  background: transparent;
  border: 0;
  font-size: 50pt;
  font-weight: 300;
  margin: 0;
  color: white;
  cursor: pointer;

  &:before {
    position: absolute;
    top: 0;
    left: -25%;
    content: '<';
    font-size: 1em;
  }
`

export const RightHeaderContent = styled.div`
  display: flex;
  align-items: center;
  /* width: 30%; */
  color: white;
  height: 50%;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-left: 2.5vw;
`;

export const HeaderText = styled.h1`
  font-size: 95pt;
  font-weight: 300;
  margin: 0;
  text-transform: uppercase;
`;

export const Divider = styled.div`
  height: 100%;
  width: 10px;
  margin: 0 50px;
  background: white;
`;

export const HomeButton = styled.img`
  margin-right: 2.5vw;
  height: 100%;
`;
