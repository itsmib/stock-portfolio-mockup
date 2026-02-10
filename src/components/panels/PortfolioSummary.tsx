import { portfolioSummary } from "@/data/mockData";
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from "lucide-react";

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const PortfolioSummary = () => {
  const s = portfolioSummary;
  const isPositive = s.dailyPnL >= 0;

  return (
    <div className="h-full overflow-auto p-4 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <DollarSign className="h-3.5 w-3.5" /> Total Value
          </div>
          <p className="text-2xl font-bold text-foreground">${fmt(s.totalValue)}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            {isPositive ? <TrendingUp className="h-3.5 w-3.5 text-emerald-400" /> : <TrendingDown className="h-3.5 w-3.5 text-red-400" />}
            Daily P&L
          </div>
          <p className={`text-2xl font-bold ${isPositive ? "text-emerald-400" : "text-red-400"}`}>
            {isPositive ? "+" : ""}${fmt(s.dailyPnL)} ({s.dailyPnLPercent}%)
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 col-span-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
            <BarChart3 className="h-3.5 w-3.5" /> Overall Return
          </div>
          <p className="text-2xl font-bold text-emerald-400">
            +${fmt(s.overallReturn)} ({s.overallReturnPercent}%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
