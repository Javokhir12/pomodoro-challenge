import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    font: string;
    bg: string;
    bgDark: string;
  }
}
