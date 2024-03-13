import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { theme } from 'vars';

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #282828;
  background-image: url('/public/body-background.png');


  color: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  object-fit: cover;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.container {
  width: ${theme.breakpoint.sm};
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media (min-width: ${theme.breakpoint.md}) {
      width: ${theme.breakpoint.md};
      padding: 0 32px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
      width: ${theme.breakpoint.xl};
      padding: 0 96px;
  }
}
`;
export default GlobalStyles;
