import type { Trade } from "../types";

export function computeStats(trades: Trade[]) {
  const total = trades.reduce((a, t) => a + (t.pnl || 0), 0);
  const wins = trades.filter(t => t.pnl > 0);
  const losses = trades.filter(t => t.pnl < 0);
  const winRate = trades.length ? wins.length / trades.length : 0;

  const grossProfit = wins.reduce((a, t) => a + t.pnl, 0);
  const grossLossAbs = Math.abs(losses.reduce((a, t) => a + t.pnl, 0));
  const profitFactor = grossLossAbs === 0 ? (grossProfit > 0 ? Infinity : 0) : grossProfit / grossLossAbs;

  return { total, count: trades.length, winRate, profitFactor };
}