import {colorPalette as colors, globals} from 'styles/globalStyles'

const { 
  style,
  bodyFontSize,
  headerHeight,
  marqueeHeight,
  zIndex 
} = globals

export const theme = {
  id: 'T_01',
  name: 'main',
  colors,
  fonts: {
    body: 'acumin-pro, sans-serif',
    heading: '"kepler-std", serif',
  },
  bodyFontSize,
  headerHeight,
  style,
  marqueeHeight,
  zIndex
};
