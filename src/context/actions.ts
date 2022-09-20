import { Timers } from "../types";

export const setCurrentTimer = (currentTimer: Timers) =>
  ({
    type: "SET_CURRENT_TIMER",
    payload: currentTimer,
  } as const);

export type ActionType = ReturnType<typeof setCurrentTimer>;
