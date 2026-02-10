import { allocationData } from "@/data/mockData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const chartConfig = Object.fromEntries(
  allocationData.map((d) => [d.sector, { label: d.sector, color: d.fill }])
);

const AssetAllocation = () => (
  <div className="h-full p-4 flex flex-col items-center">
    <p className="text-xs text-muted-foreground mb-2 self-start">Allocation by Sector</p>
    <div className="flex-1 min-h-0 w-full flex items-center justify-center">
      <ChartContainer config={chartConfig} className="h-full w-full aspect-square max-w-[280px]">
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Pie
            data={allocationData}
            dataKey="value"
            nameKey="sector"
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="75%"
            strokeWidth={2}
            stroke="hsl(222, 84%, 5%)"
          >
            {allocationData.map((d) => (
              <Cell key={d.sector} fill={d.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
    <div className="flex flex-wrap gap-3 mt-2 justify-center">
      {allocationData.map((d) => (
        <div key={d.sector} className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <div className="h-2.5 w-2.5 rounded-sm" style={{ background: d.fill }} />
          {d.sector} {d.value}%
        </div>
      ))}
    </div>
  </div>
);

export default AssetAllocation;
