// src/constants/themes.ts
import { MD3LightTheme as LightTheme, MD3DarkTheme as DarkTheme } from 'react-native-paper';


export type Theme = {
  colors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
    test: string;
    // Add other custom colors as needed
  };
  // Add other theme properties here
};

export const lightTheme: Theme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#ffffff', // Default background color for light theme // Default text color for light theme
    // Define your light theme colors here
    text: '#000000', // Default text color for dark theme
    test: '#68DDDD',
  },
};

export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc',
    accent: '#03dac4',
    background: '#484848', // Default background color for dark theme
    text: '#ffffff', // Default text color for dark theme
    test: '#68DDDD',
  },
};


export const subThemes = {
    ruby: {
      colors: {
          primary: '#e63946',
      },
    },
    aquamarine: {
      colors: {
          primary: '#2a9d8f',
      },
    },
    citrine: {
      colors: {
          primary: '#e9c46a',
      },
    },
  };