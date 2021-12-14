import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}   
  *{
    font-family: "Noto Sans Regular", "Arial", sans-serif !important;
    font-weight: 400;
    color:#333;
  }
`;

export default GlobalStyle;
