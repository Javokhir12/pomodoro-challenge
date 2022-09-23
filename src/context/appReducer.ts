import { Timers } from "../types";
import type { ActionType } from "./actions";
import { ThemeTypes } from "../themes";

export interface RootState {
  currentTheme: ThemeTypes;
  activeTimer: Timers;
  isRunning: boolean;
  [Timers.POMODORO]: number;
  [Timers.SHORT_BREAK]: number;
  [Timers.LONG_BREAK]: number;
}

export const initialState: RootState = {
  currentTheme: "tomato",
  activeTimer: Timers.POMODORO,
  isRunning: false,
  [Timers.POMODORO]: 25 * 60,
  [Timers.SHORT_BREAK]: 5 * 60,
  [Timers.LONG_BREAK]: 10 * 60,
};

export function reducer(
  state: RootState = initialState,
  action: ActionType
): RootState {
  switch (action.type) {
    case "SET_CURRENT_TIMER":
      return {
        ...state,
        activeTimer: action.payload,
      };
    case "SET_TIMER_STATUS":
      return {
        ...state,
        isRunning: action.payload,
      };
    default:
      return state;
  }
}
