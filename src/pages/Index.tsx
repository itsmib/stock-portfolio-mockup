import { useState, useCallback, useRef, useEffect } from "react";
import { Layout, Model, TabNode, IJsonModel } from "flexlayout-react";
import "flexlayout-react/style/dark.css";
import { Button } from "@/components/ui/button";
import { presets } from "@/config/layoutPresets";
import { Save, Trash2, LayoutDashboard } from "lucide-react";

import PortfolioSummary from "@/components/panels/PortfolioSummary";
import HoldingsTable from "@/components/panels/HoldingsTable";
import PerformanceChart from "@/components/panels/PerformanceChart";
import AssetAllocation from "@/components/panels/AssetAllocation";
import RecentTransactions from "@/components/panels/RecentTransactions";

const STORAGE_KEY = "portfolio-custom-presets";

const componentMap: Record<string, React.FC> = {
  PortfolioSummary,
  HoldingsTable,
  PerformanceChart,
  AssetAllocation,
  RecentTransactions,
};

function loadCustomPresets(): Record<string, IJsonModel> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCustomPresets(p: Record<string, IJsonModel>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

const Index = () => {
  const [model, setModel] = useState(() => Model.fromJson(presets.Overview));
  const [activePreset, setActivePreset] = useState("Overview");
  const [customPresets, setCustomPresets] = useState<Record<string, IJsonModel>>(loadCustomPresets);
  const layoutRef = useRef<Layout>(null);

  const factory = useCallback((node: TabNode) => {
    const comp = node.getComponent();
    const Component = comp ? componentMap[comp] : null;
    return Component ? <Component /> : <div className="p-4 text-muted-foreground">Unknown: {comp}</div>;
  }, []);

  const switchPreset = (name: string, config: IJsonModel) => {
    setModel(Model.fromJson(config));
    setActivePreset(name);
  };

  const handleSave = () => {
    const keys = Object.keys(customPresets);
    if (keys.length >= 3) {
      alert("Maximum 3 custom presets. Delete one first.");
      return;
    }
    const name = prompt("Preset name:");
    if (!name || name.trim() === "") return;
    const json = model.toJson() as IJsonModel;
    const updated = { ...customPresets, [name.trim()]: json };
    setCustomPresets(updated);
    saveCustomPresets(updated);
    setActivePreset(name.trim());
  };

  const handleDelete = (name: string) => {
    const updated = { ...customPresets };
    delete updated[name];
    setCustomPresets(updated);
    saveCustomPresets(updated);
    if (activePreset === name) switchPreset("Overview", presets.Overview);
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Toolbar */}
      <header className="flex items-center gap-2 px-4 py-2 border-b border-border bg-card shrink-0 flex-wrap">
        <LayoutDashboard className="h-5 w-5 text-primary mr-1" />
        <span className="font-bold text-sm mr-4 text-foreground">Portfolio Dashboard</span>

        {/* Built-in presets */}
        {Object.keys(presets).map((name) => (
          <Button
            key={name}
            size="sm"
            variant={activePreset === name ? "default" : "outline"}
            onClick={() => switchPreset(name, presets[name as keyof typeof presets])}
          >
            {name}
          </Button>
        ))}

        <div className="w-px h-6 bg-border mx-1" />

        {/* Custom presets */}
        {Object.entries(customPresets).map(([name, config]) => (
          <div key={name} className="flex items-center gap-0.5">
            <Button
              size="sm"
              variant={activePreset === name ? "default" : "secondary"}
              onClick={() => switchPreset(name, config)}
            >
              {name}
            </Button>
            <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => handleDelete(name)}>
              <Trash2 className="h-3.5 w-3.5 text-destructive" />
            </Button>
          </div>
        ))}

        <Button size="sm" variant="outline" onClick={handleSave} className="ml-auto">
          <Save className="h-3.5 w-3.5 mr-1" /> Save Layout
        </Button>
      </header>

      {/* FlexLayout */}
      <div className="flex-1 relative">
        <Layout ref={layoutRef} model={model} factory={factory} />
      </div>
    </div>
  );
};

export default Index;
