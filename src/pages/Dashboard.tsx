import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardMain } from "@/components/dashboard/DashboardMain";
import { LiveStatsPanel } from "@/components/dashboard/LiveStatsPanel";

const Dashboard = () => {
  const [activeView, setActiveView] = useState("smart-contract-builder");

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex w-full min-h-screen">
          <DashboardSidebar activeView={activeView} setActiveView={setActiveView} />
          
          <div className="flex-1 flex flex-col">
            <DashboardHeader />
            
            <div className="flex-1 flex">
              <main className="flex-1 p-6">
                <DashboardMain activeView={activeView} />
              </main>
              
              <aside className="w-80 border-l border-border bg-card/30 p-4">
                <LiveStatsPanel />
              </aside>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;