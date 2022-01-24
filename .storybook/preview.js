import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global';
import { theme } from '../src/styles/themes/main';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
