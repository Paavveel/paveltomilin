import { createGlobalStyle } from 'styled-components';

export const color = {
  white: '#fff',
  black: '#121212',
  grey: '#f7f7f8',
  peachpuff: '#ffdab9',
};

export const darkTheme = {
  background: color.black,
  text: color.white,
};

export const lightTheme = {
  background: color.grey,
  text: color.black,
};

export const media = {
  large: '(max-width: 1920px)',
  medium: '(max-width: 1440px)',
  small: '(max-width: 960px)',
  xsmall: '(max-width: 480px)',
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
