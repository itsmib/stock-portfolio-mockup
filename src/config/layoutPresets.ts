import { IJsonModel } from "flexlayout-react";

const globalSettings = {
  tabEnableClose: true,
  tabEnableRename: false,
  tabEnableFloat: true,
  tabSetEnableMaximize: true,
  tabSetEnableClose: false,
  splitterSize: 4,
  tabSetHeaderHeight: 32,
  tabSetTabStripHeight: 32,
};

export const overviewLayout: IJsonModel = {
  global: globalSettings,
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "row",
        weight: 60,
        children: [
          {
            type: "tabset",
            weight: 40,
            children: [{ type: "tab", name: "Portfolio Summary", component: "PortfolioSummary" }],
          },
          {
            type: "tabset",
            weight: 60,
            children: [{ type: "tab", name: "Performance", component: "PerformanceChart" }],
          },
        ],
      },
      {
        type: "row",
        weight: 40,
        children: [
          {
            type: "tabset",
            weight: 40,
            children: [
              { type: "tab", name: "Holdings", component: "HoldingsTable" },
              { type: "tab", name: "Transactions", component: "RecentTransactions" },
            ],
          },
          {
            type: "tabset",
            weight: 30,
            children: [{ type: "tab", name: "Allocation", component: "AssetAllocation" }],
          },
        ],
      },
    ],
  },
};

export const analysisLayout: IJsonModel = {
  global: globalSettings,
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "row",
        weight: 65,
        children: [
          {
            type: "tabset",
            weight: 50,
            children: [{ type: "tab", name: "Performance", component: "PerformanceChart" }],
          },
          {
            type: "tabset",
            weight: 50,
            children: [{ type: "tab", name: "Holdings", component: "HoldingsTable" }],
          },
        ],
      },
      {
        type: "tabset",
        weight: 35,
        children: [
          { type: "tab", name: "Allocation", component: "AssetAllocation" },
          { type: "tab", name: "Portfolio Summary", component: "PortfolioSummary" },
          { type: "tab", name: "Transactions", component: "RecentTransactions" },
        ],
      },
    ],
  },
};

export const compactLayout: IJsonModel = {
  global: globalSettings,
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 35,
        children: [{ type: "tab", name: "Portfolio Summary", component: "PortfolioSummary" }],
      },
      {
        type: "tabset",
        weight: 65,
        children: [
          { type: "tab", name: "Holdings", component: "HoldingsTable" },
          { type: "tab", name: "Transactions", component: "RecentTransactions" },
        ],
      },
    ],
  },
};

export const presets = {
  Overview: overviewLayout,
  Analysis: analysisLayout,
  Compact: compactLayout,
};
