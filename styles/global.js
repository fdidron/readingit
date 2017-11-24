import reset from 'styled-reset';
import variables from './variables.js';
const { backgroundColor, textColor, primaryColor, white } = variables;

const globalStyles = `
  body {
    background-color: ${backgroundColor};
    color: ${textColor};
  }
  ::selection {
    background-color: ${primaryColor};
    color: ${white};
    font-family: 'Open Sans', sans-serif;
  }
`;

export default `
  ${reset}
  ${globalStyles}
`;
