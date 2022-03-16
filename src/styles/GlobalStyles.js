import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  background: 'var(--black)',
  text: 'var(--white)',
};

export const lightTheme = {
  background: 'var(--gray)',
  text: 'var(--black)',
};

export const media = {
  large: '(max-width: 1920px)',
  medium: '(max-width: 1440px)',
  small: '(max-width: 960px)',
  xsmall: '(max-width: 480px)',
};

export const GlobalStyle = createGlobalStyle`

:root {
  --white: #fff;
  --black: #000;
  --gray: #f7f7f8;
}

html {
   line-height: 1.7;
   scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  user-select: none;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 500;
}

h1 {
  font-size: 2.5rem;
}

img {
  display: block;
  width: 100%;
}

a {
  font-weight: 500;
  text-decoration: none;
}

ol,
ul {
  list-style: none;
}

input {
  -webkit-appearance: none;
  border-radius: 0;
}
`;
