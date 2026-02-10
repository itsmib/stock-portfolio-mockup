import { performanceData } from "@/data/mockData";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const chartConfig = {
  value: { label: "Portfolio Value", color: "hsl(210, 100%, 56%)" },
};

const PerformanceChart = () => (
  <div className="h-full p-4 flex flex-col">
    <p className="text-xs text-muted-foreground mb-2">6-Month Performance</p>
    <div className="flex-1 min-h-0">
      <ChartContainer config={chartConfig} className="h-full w-full aspect-auto">
        <LineChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 17%)" />
          <XAxis dataKey="month" tick={{ fill: "hsl(215, 20%, 65%)", fontSize: 12 }} axisLine={false} />
          <YAxis
            tick={{ fill: "hsl(215, 20%, 65%)", fontSize: 12 }}
            axisLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(210, 100%, 56%)"
            strokeWidth={2}
            dot={{ fill: "hsl(210, 100%, 56%)", r: 4 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  </div>
);

export default PerformanceChart;
