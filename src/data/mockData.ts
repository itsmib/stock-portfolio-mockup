export const portfolioSummary = {
  totalValue: 284750.32,
  dailyPnL: 1243.18,
  dailyPnLPercent: 0.44,
  overallReturn: 34750.32,
  overallReturnPercent: 13.9,
};

export const holdings = [
  { ticker: "AAPL", name: "Apple Inc.", shares: 50, price: 198.11, value: 9905.50, change: 1.23 },
  { ticker: "MSFT", name: "Microsoft Corp.", shares: 30, price: 415.56, value: 12466.80, change: -0.45 },
  { ticker: "GOOGL", name: "Alphabet Inc.", shares: 20, price: 176.89, value: 3537.80, change: 2.10 },
  { ticker: "AMZN", name: "Amazon.com Inc.", shares: 25, price: 201.45, value: 5036.25, change: 0.87 },
  { ticker: "NVDA", name: "NVIDIA Corp.", shares: 40, price: 875.30, value: 35012.00, change: 3.45 },
  { ticker: "JNJ", name: "Johnson & Johnson", shares: 35, price: 156.78, value: 5487.30, change: -0.22 },
  { ticker: "JPM", name: "JPMorgan Chase", shares: 45, price: 198.34, value: 8925.30, change: 0.91 },
  { ticker: "V", name: "Visa Inc.", shares: 20, price: 279.55, value: 5591.00, change: 0.65 },
];

export const performanceData = [
  { month: "Aug", value: 250000 },
  { month: "Sep", value: 258400 },
  { month: "Oct", value: 252100 },
  { month: "Nov", value: 267800 },
  { month: "Dec", value: 271500 },
  { month: "Jan", value: 284750 },
];

export const allocationData = [
  { sector: "Technology", value: 46.2, fill: "hsl(210, 100%, 56%)" },
  { sector: "Healthcare", value: 14.8, fill: "hsl(150, 60%, 45%)" },
  { sector: "Finance", value: 22.1, fill: "hsl(45, 90%, 55%)" },
  { sector: "Consumer", value: 10.5, fill: "hsl(280, 60%, 55%)" },
  { sector: "Energy", value: 6.4, fill: "hsl(15, 80%, 55%)" },
];

export const recentTransactions = [
  { date: "2025-02-07", type: "BUY" as const, ticker: "NVDA", shares: 10, price: 868.20, total: 8682.00 },
  { date: "2025-02-05", type: "SELL" as const, ticker: "AAPL", shares: 5, price: 196.50, total: 982.50 },
  { date: "2025-02-03", type: "BUY" as const, ticker: "JPM", shares: 15, price: 195.80, total: 2937.00 },
  { date: "2025-01-30", type: "BUY" as const, ticker: "MSFT", shares: 10, price: 410.25, total: 4102.50 },
  { date: "2025-01-28", type: "SELL" as const, ticker: "JNJ", shares: 10, price: 158.90, total: 1589.00 },
];
