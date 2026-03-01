export function pct(n: number) {
  return `${(n * 100).toFixed(1)}%`;
}
export function money(n: number) {
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(n);
  return `${sign}${abs.toFixed(2)}`;
}