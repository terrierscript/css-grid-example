import styled, { css } from "styled-components";

export const areaStyle = css<{ area: string }>`
  grid-area: ${(props) => props.area};
`;

export const Area = styled.div`
  ${areaStyle};
`;
