import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  background: 'var(--black)',
  text: 'var(--white)',
};

export const lightTheme = {
  background: 'var(--bg-gray)',
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
  --gray: #adadb8;
  --bg-gray: #f7f7f8;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: 1.7;
  scroll-behavior: smooth;
  overscroll-behavior: none;
  overflow-x: hidden;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
  user-select: none;
}

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};

}

body, html {
    width: 100vw;
    height: 100vh;
    position: relative;
}

body::-webkit-scrollbar, html::-webkit-scrollbar {
    display: none;
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

.no-scroll {
  overflow: hidden;
}
`;
