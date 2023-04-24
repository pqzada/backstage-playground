import { createTheme, lightTheme } from '@backstage/theme';

export const simpleTheme = createTheme({
  palette: lightTheme.palette,
  fontFamily: 'Comic Sans MS',
  defaultPageTheme: 'home',
});
