import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { appThemes, ThemeTypes } from "../themes";

export interface IAppThemeContext {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<ThemeTypes>>;
}

const AppThemeContext = createContext<IAppThemeContext | undefined>(undefined);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, dispatch] = useState<ThemeTypes>("tomato");

  const ctxValue = { theme: appThemes[currentTheme], setTheme: dispatch };

  return (
    <AppThemeContext.Provider value={ctxValue}>
      <ThemeProvider theme={ctxValue.theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export function useAppThemeContext() {
  const ctx = useContext(AppThemeContext);

  if (ctx === undefined)
    throw new Error(
      "useAppThemeContext must be inside a Provider with a value"
    );

  return ctx;
}
