import { injectGlobal } from "styled-components";

const baseStyles = () => injectGlobal`
body {
  padding:0;
  margin:0;
}
`;

export const Reset = ({ children }) => {
  baseStyles();
  return children;
};
