import { holdings } from "@/data/mockData";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2 });

const HoldingsTable = () => (
  <div className="h-full overflow-auto p-3">
    <Table>
      <TableHeader>
        <TableRow className="border-border">
          <TableHead className="text-muted-foreground">Ticker</TableHead>
          <TableHead className="text-muted-foreground">Shares</TableHead>
          <TableHead className="text-muted-foreground text-right">Price</TableHead>
          <TableHead className="text-muted-foreground text-right">Value</TableHead>
          <TableHead className="text-muted-foreground text-right">Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {holdings.map((h) => (
          <TableRow key={h.ticker} className="border-border">
            <TableCell className="font-semibold text-foreground">{h.ticker}</TableCell>
            <TableCell className="text-muted-foreground">{h.shares}</TableCell>
            <TableCell className="text-right text-foreground">${fmt(h.price)}</TableCell>
            <TableCell className="text-right text-foreground">${fmt(h.value)}</TableCell>
            <TableCell className={`text-right font-medium ${h.change >= 0 ? "text-emerald-400" : "text-red-400"}`}>
              {h.change >= 0 ? "+" : ""}{h.change}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default HoldingsTable;
