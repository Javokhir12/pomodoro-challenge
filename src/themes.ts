import { DefaultTheme } from "styled-components";


export const defaultTheme: DefaultTheme = {
  font: "sans-serif",
  primaryColor: "tomato",
  bg: '#312e81',
  bgDark: '#121063'
};

export const cyanTheme: DefaultTheme = {
  ...defaultTheme,
  primaryColor: "#22d3ee",
};

export const fuchsiaTheme: DefaultTheme = {
  ...defaultTheme,
  primaryColor: "#e879f9",
};

export const appThemes = {
  tomato: defaultTheme,
  cyan: cyanTheme,
  fuchsia: fuchsiaTheme,
};

export type ThemeTypes = keyof typeof appThemes;
