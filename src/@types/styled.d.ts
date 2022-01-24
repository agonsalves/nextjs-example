import 'styled-components';
import { theme } from '../styles/themes/main';
export type Themes = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: string | any;
    fonts?: string | any;
    zIndex?: number | any;
    style?: any;
    bodyFontSize?: any;
    headerHeight?: any;
    marqueeHeight?: any;
  }
}
