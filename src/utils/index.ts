import { Timers, NotificationType } from "../types";
import { notification } from "antd";

export function formatTime(timeInSecs: number): string {
  const mins = Math.floor(timeInSecs / 60);
  const secs = Math.floor(timeInSecs % 60);

  return `${padWitZero(mins)}:${padWitZero(secs)}`;
}

export function padWitZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

export function getActiveTimerClass(active: Timers, current: Timers) {
  return active === current ? "active" : "";
}

export const openNotificationWithIcon = (type: NotificationType, title: string, description: string = '') => {
  notification[type]({
    message: title,
    description,
    duration: 2
  });
};
