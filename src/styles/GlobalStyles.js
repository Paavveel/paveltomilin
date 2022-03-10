import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  background: '#121212',
  text: '#fff',
};

export const lightTheme = {
  background: '#fff',
  text: '#121212',
};

export const media = {
  large: '(max-width: 1440px)',
  medium: '(max-width: 1024px)',
  small: '(max-width: 600px)',
};

export const container = {
  largeWidth: '75%',
  mediumWidth: '86%',
  smallWidth: '90%',
};

export const GlobalStyle = createGlobalStyle`

body {
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
}
`;
