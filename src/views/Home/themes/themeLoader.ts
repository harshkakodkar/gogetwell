// src/themes/themeLoader.ts
import lightColors from './light/colors';
import lightTypography from './light/typography';

import darkColors from './dark/colors';
import darkTypography from './dark/typography';

import blueColors from './blue/colors';
import blueTypography from './blue/typography';

import purpleColors from './purple/colors';
import purpleTypography from './purple/typography';


export const themes: Record<string, any> = {
  light: {
    colors: lightColors,
    typography: lightTypography,
  },
  dark: {
    colors: darkColors,
    typography: darkTypography,
  },
  blue: {
    colors: blueColors,
    typography: blueTypography,
  },
  purple: {
    colors: purpleColors,
    typography: purpleTypography,
  },
};
