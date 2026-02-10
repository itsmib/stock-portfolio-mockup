import { recentTransactions } from "@/data/mockData";

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2 });

const RecentTransactions = () => (
  <div className="h-full overflow-auto p-4 space-y-2">
    {recentTransactions.map((t, i) => (
      <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold px-2 py-0.5 rounded ${
            t.type === "BUY" ? "bg-emerald-400/15 text-emerald-400" : "bg-red-400/15 text-red-400"
          }`}>
            {t.type}
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">{t.ticker}</p>
            <p className="text-xs text-muted-foreground">{t.shares} shares @ ${fmt(t.price)}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-foreground">${fmt(t.total)}</p>
          <p className="text-xs text-muted-foreground">{t.date}</p>
        </div>
      </div>
    ))}
  </div>
);

export default RecentTransactions;
