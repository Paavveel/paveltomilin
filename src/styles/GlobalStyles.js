import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
}


`;

export default GlobalStyle;
