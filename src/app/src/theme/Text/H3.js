import styled, { createGlobalStyle, css } from "styled-components";

const H3Style = css`
  font-size: auto;
`;

export const H3Global = createGlobalStyle`
  h3 {
    ${H3Style}
  }
`;

const H3 = styled.h3`
  ${H3Style}
`;

export default H3;
