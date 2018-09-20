import styled from "styled-components"; // You need this as well
import mediaQuery from "styled-media-query";
export const mediaMobile = mediaQuery.lessThan("medium");

export const withMediaStyle = (Component, extend) => {
  return styled(Component)`
    ${mediaMobile`
      ${extend}
    `};
  `;
};
