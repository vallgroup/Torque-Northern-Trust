import styled, { css, createGlobalStyle } from "styled-components";

const H1Style = css`
  font-size: auto;
`;

export const H1Global = createGlobalStyle`
  h1 {
    ${H1Style}
  }
`;

const H1 = styled.h1`
  ${H1Style}
`;

export default H1;
