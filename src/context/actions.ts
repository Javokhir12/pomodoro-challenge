import { Timers } from "../types";

export const setCurrentTimer = (currentTimer: Timers) =>
  ({
    type: "SET_CURRENT_TIMER",
    payload: currentTimer,
  } as const);

export const setTimerStatus = (status: boolean) =>
  ({
    type: "SET_TIMER_STATUS",
    payload: status,
  } as const);

export type ActionType =
  | ReturnType<typeof setCurrentTimer>
  | ReturnType<typeof setTimerStatus>;
