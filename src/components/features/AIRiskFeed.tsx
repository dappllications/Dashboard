import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Shield, AlertCircle, CheckCircle, Brain, Zap } from "lucide-react";

export function AIRiskFeed() {
  const riskAlerts = [
    {
      id: 1,
      type: "Smart Contract",
      title: "Potential Reentrancy Vulnerability Detected",
      description: "AI analysis found a possible reentrancy attack vector in contract 0x1234...abcd",
      severity: "high",
      confidence: "89%",
      time: "15 minutes ago",
      status: "active"
    },
    {
      id: 2,
      type: "Market Risk",
      title: "Unusual Trading Volume Spike",
      description: "ETH trading volume increased by 340% in the last hour, potential manipulation detected",
      severity: "medium",
      confidence: "76%",
      time: "32 minutes ago",
      status: "monitoring"
    },
    {
      id: 3,
      type: "Protocol Risk",
      title: "DeFi Protocol Liquidity Imbalance",
      description: "Automated analysis detected unusual liquidity patterns in Uniswap V3 pools",
      severity: "low",
      confidence: "65%",
      time: "1 hour ago",
      status: "resolved"
    },
    {
      id: 4,
      type: "Security Alert",
      title: "Suspicious Wallet Activity",
      description: "Multiple large transactions from flagged addresses detected across DeFi protocols",
      severity: "high",
      confidence: "92%",
      time: "2 hours ago",
      status: "active"
    }
  ];

  const riskMetrics = [
    { category: "Smart Contracts", score: 78, trend: "improving" },
    { category: "Market Volatility", score: 65, trend: "stable" },
    { category: "Liquidity Risk", score: 82, trend: "improving" },
    { category: "Protocol Risk", score: 71, trend: "declining" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case "monitoring": return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      default: return <CheckCircle className="w-4 h-4 text-green-400" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            AI Risk Feed
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time AI-powered risk monitoring and threat detection
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Brain className="w-4 h-4 mr-2" />
          AI Scan
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <span className="text-primary">Active Risk Alerts</span>
              </CardTitle>
              <CardDescription>Real-time threat detection and monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskAlerts.map((alert) => (
                  <div key={alert.id} className="p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background/70 transition-colors">
                    <div className="flex items-start justify-between space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {getStatusIcon(alert.status)}
                          <Badge variant="outline" className="text-primary border-primary/30">
                            {alert.type}
                          </Badge>
                          <Badge className={getSeverityColor(alert.severity)}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{alert.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{alert.time}</span>
                          <span className="font-medium">Confidence: {alert.confidence}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-primary">Risk Scores</span>
              </CardTitle>
              <CardDescription>Overall system health metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskMetrics.map((metric) => (
                  <div key={metric.category}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{metric.category}</span>
                      <span className={`text-sm font-bold ${getScoreColor(metric.score)}`}>
                        {metric.score}/100
                      </span>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {metric.trend === "improving" ? "↗ Improving" : 
                       metric.trend === "declining" ? "↘ Declining" : "→ Stable"}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-primary">AI Model Status</CardTitle>
              <CardDescription>Risk detection model information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Model Version</span>
                  <span className="font-bold">v2.3.1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Last Update</span>
                  <span className="font-bold">5 min ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Accuracy Rate</span>
                  <span className="font-bold text-green-400">94.7%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Active Monitors</span>
                  <span className="font-bold">847</span>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <Button variant="outline" className="w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    Refresh Analysis
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}