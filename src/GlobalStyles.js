import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


body {
  background: ${props => props.theme.background};
  overflow-x: hidden;
  color: #121212;
}
`;

export default GlobalStyle;
