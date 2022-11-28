import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-weight:400;
    font-size: 14px;
    overflow: auto;
  }

  // PRIME REACT STYLES
  .p-sidebar.createUserPanel {
    .p-sidebar-header {
      display: none;
    }
  }
`;

export default GlobalStyle;