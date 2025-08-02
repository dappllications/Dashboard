import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { 
  Code2, 
  Globe, 
  Coins, 
  Shield, 
  Store, 
  TestTube,
  BarChart3,
  Newspaper,
  TrendingUp,
  AlertTriangle,
  Calendar,
  Settings,
  Zap 
} from "lucide-react";

interface DashboardSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const navItems = [
  { id: "dashboard", title: "Dashboard", icon: BarChart3 },
  { id: "smart-contract-builder", title: "Smart Contract Builder", icon: Code2 },
  { id: "cross-chain-deployment", title: "Cross-Chain Deploy", icon: Globe },
  { id: "token-wallet-studio", title: "Token & Wallet Studio", icon: Coins },
  { id: "security-audit", title: "Security & Audit", icon: Shield },
  { id: "dapp-marketplace", title: "dApp Marketplace", icon: Store },
  { id: "testing-sandbox", title: "Testing Sandbox", icon: TestTube },
  { id: "stock-tracker", title: "Stock Tracker", icon: TrendingUp },
  { id: "news-summarizer", title: "News Summarizer", icon: Newspaper },
  { id: "predictive-charts", title: "Predictive Charts", icon: BarChart3 },
  { id: "ai-risk-feed", title: "AI Risk Feed", icon: AlertTriangle },
  { id: "planner", title: "Planner", icon: Calendar },
  { id: "settings", title: "Settings", icon: Settings }
];

export function DashboardSidebar({ activeView, setActiveView }: DashboardSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"}>
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className={`${collapsed ? "w-8 h-8" : "w-50 h-50"} object-contain`}
            />

          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-semibold">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.id)}
                    className={`
                      w-full justify-start transition-all duration-200
                      ${activeView === item.id 
                        ? "bg-sidebar-accent text-sidebar-primary border border-sidebar-border shadow-glow" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary"
                      }
                    `}
                  >
                    <item.icon className={`h-4 w-4 ${activeView === item.id ? "text-sidebar-primary" : ""}`} />
                    {!collapsed && <span className="ml-2">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Sidebar Toggle */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <SidebarTrigger className="w-full text-sidebar-foreground hover:text-sidebar-primary hover:bg-sidebar-accent/50 transition-colors" />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}