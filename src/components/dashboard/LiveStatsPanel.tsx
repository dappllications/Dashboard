import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Zap, 
  Shield, 
  AlertTriangle,
  Play,
  Square
} from "lucide-react";

export function LiveStatsPanel() {
  const [sandboxActive, setSandboxActive] = useState(true);
  const [gasPrice, setGasPrice] = useState(25);
  const [ethPrice, setEthPrice] = useState(3247);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGasPrice(prev => prev + (Math.random() - 0.5) * 2);
      setEthPrice(prev => prev + (Math.random() - 0.5) * 10);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {/* Live Stats Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Live Stats</h3>
        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
      </div>

      {/* Market Stats */}
      <Card className="bg-card/60 border-card-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-muted-foreground">Market</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm">ETH/USD</span>
            </div>
            <div className="text-right">
              <div className="font-semibold text-success">${ethPrice.toFixed(0)}</div>
              <div className="text-xs text-success">+2.4%</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-warning" />
              <span className="text-sm">Gas Price</span>
            </div>
            <div className="text-right">
              <div className="font-semibold">{gasPrice.toFixed(0)} gwei</div>
              <div className="text-xs text-muted-foreground">Standard</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sandbox Toggle */}
      <Card className="bg-card/60 border-card-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-muted-foreground">Testing Environment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm">Sandbox</span>
            </div>
            <Switch
              checked={sandboxActive}
              onCheckedChange={setSandboxActive}
            />
          </div>
          
          {sandboxActive && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs text-success">
                <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                <span>Testnet Connected</span>
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Play className="w-3 h-3 mr-1" />
                  Run Test
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Square className="w-3 h-3 mr-1" />
                  Stop
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Security Alerts */}
      <Card className="bg-card/60 border-card-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-muted-foreground">Security Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Shield className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-medium text-success">All Clear</div>
                <div className="text-xs text-muted-foreground">No vulnerabilities detected</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-medium text-warning">Low Risk</div>
                <div className="text-xs text-muted-foreground">Optimization recommended</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-card/60 border-card-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-muted-foreground">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Contract deployed</span>
              <span className="text-success">2m ago</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Audit completed</span>
              <span className="text-muted-foreground">5m ago</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Token minted</span>
              <span className="text-muted-foreground">12m ago</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-card/60 border-card-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-muted-foreground">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button size="sm" variant="outline" className="text-xs">
              Deploy
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              Audit
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              Test
            </Button>
            <Button size="sm" variant="outline" className="text-xs">
              Mint
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}