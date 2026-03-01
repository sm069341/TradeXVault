export type TradeSide = "BUY" | "SELL";

export type Trade = {
  id?: string;
  uid: string;
  symbol: string;         // e.g. EURUSD
  side: TradeSide;        // BUY/SELL
  entryDate: string;      // YYYY-MM-DD
  entryPrice?: number;
  exitPrice?: number;
  pnl: number;            // in your currency
  notes?: string;
  tags?: string[];  
  updatedAt: number;      // epoch ms
  session?: string;
  quantity: number;     // lots
  result?: "WIN" | "LOSS" | "BE";
  equityAfter?: number;
  createdAt?: any; // Firestore Timestamp
};