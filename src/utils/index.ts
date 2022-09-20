export function formatTime(timeInSecs: number): string {
  const mins = Math.floor(timeInSecs / 60);
  const secs = Math.floor(timeInSecs % 60);

  return `${padWitZero(mins)}:${padWitZero(secs)}`;
}

export function padWitZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
