import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { initialState, reducer, RootState } from "./appReducer";
import { ActionType } from "./actions";

export interface IAppContext {
  state: RootState;
  dispatch: Dispatch<ActionType>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [value, dispatch] = useReducer(reducer, initialState);

  const ctxValue = { state: value, dispatch };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);

  if (ctx === undefined)
    throw new Error("useAppContext must be inside a Provider with a value");

  return ctx;
}
