import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Zap,
  Code2,
  Shield,
  Store,
  Globe
} from "lucide-react";

export function DashboardOverview() {
  const stats = [
    { label: "Active dApps", value: "12", change: "+3", icon: Store },
    { label: "Smart Contracts", value: "24", change: "+8", icon: Code2 },
    { label: "Total Users", value: "1.2K", change: "+124", icon: Users },
    { label: "Monthly Revenue", value: "$12.4K", change: "+24%", icon: TrendingUp }
  ];

  const recentActivity = [
    { action: "Smart contract deployed", project: "DeFi Yield Optimizer", time: "2m ago" },
    { action: "Security audit completed", project: "NFT Marketplace", time: "1h ago" },
    { action: "Cross-chain deployment", project: "Gaming DAO", time: "3h ago" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome to your blockchain development workspace</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card/60 border-card-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-success text-sm">{stat.change}</p>
                </div>
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-gradient-primary text-primary-foreground justify-start">
              <Code2 className="w-4 h-4 mr-2" />
              Create Smart Contract
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Globe className="w-4 h-4 mr-2" />
              Deploy Cross-Chain
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Shield className="w-4 h-4 mr-2" />
              Run Security Audit
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-secondary" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-background rounded">
                <div>
                  <div className="font-medium text-sm">{activity.action}</div>
                  <div className="text-xs text-muted-foreground">{activity.project}</div>
                </div>
                <Badge variant="outline">{activity.time}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}