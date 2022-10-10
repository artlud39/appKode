import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: 'Inter';
  font-display: swap;
  src: url("./fonts/inter-regular.woff2") format('woff2'),
       url("./fonts/inter-regular.woff") format('woff');
}
@font-face {
  font-style: normal;
  font-weight: 500;
  font-family: 'Inter';
  font-display: swap;
  src: url("./fonts/inter-medium.woff2") format('woff2'),
       url("./fonts/inter-medium.woff") format('woff');
}
@font-face {
  font-style: normal;
  font-weight: 600;
  font-family: 'Inter';
  font-display: swap;
  src: url("./fonts/inter-semibold.woff2") format('woff2'),
       url("./fonts/inter-semibold.woff") format('woff');
}
@font-face {
  font-style: normal;
  font-weight: 700;
  font-family: 'Inter';
  font-display: swap;
  src: url("./fonts/inter-bold.woff2") format('woff2'),
       url("./fonts/inter-bold.woff") format('woff');
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

 * {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
