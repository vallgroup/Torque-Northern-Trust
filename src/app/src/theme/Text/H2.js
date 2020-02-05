import styled, { css, createGlobalStyle } from "styled-components";

export const H2Style = css`
  font-size: auto;
`;

export const H2Global = createGlobalStyle`
  h2 {
    ${H2Style}
  }
`;

const H2 = styled.h2`
  ${H2Style}
`;

export default H2;
