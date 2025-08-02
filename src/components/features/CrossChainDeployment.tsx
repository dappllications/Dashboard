import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Zap, 
  CheckCircle2, 
  Clock,
  ArrowRight,
  DollarSign,
  AlertTriangle
} from "lucide-react";

export function CrossChainDeployment() {
  const [selectedChains, setSelectedChains] = useState(["ethereum", "bnb"]);
  const [deploymentStatus, setDeploymentStatus] = useState("ready");

  const chains = [
    { id: "ethereum", name: "Ethereum", icon: "🔵", gasPrice: 25, deployTime: "2-5 min", cost: "$45" },
    { id: "bnb", name: "BNB Chain", icon: "🟡", gasPrice: 5, deployTime: "30s", cost: "$2" },
    { id: "polygon", name: "Polygon", icon: "🟣", gasPrice: 30, deployTime: "1 min", cost: "$0.50" },
    { id: "solana", name: "Solana", icon: "🟢", gasPrice: 0.001, deployTime: "10s", cost: "$0.01" },
    { id: "avalanche", name: "Avalanche", icon: "🔴", gasPrice: 25, deployTime: "2 min", cost: "$1.50" }
  ];

  const toggleChain = (chainId: string) => {
    setSelectedChains(prev => 
      prev.includes(chainId) 
        ? prev.filter(id => id !== chainId)
        : [...prev, chainId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Cross-Chain Deployment Hub</h1>
          <p className="text-muted-foreground">Deploy your contracts across multiple blockchain networks</p>
        </div>
        <Button 
          className="bg-gradient-primary text-primary-foreground"
          disabled={selectedChains.length === 0}
        >
          <Globe className="w-4 h-4 mr-2" />
          Deploy to {selectedChains.length} Chain{selectedChains.length !== 1 ? 's' : ''}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chain Selection */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-primary" />
              <span>Select Target Chains</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {chains.map((chain) => (
              <div
                key={chain.id}
                onClick={() => toggleChain(chain.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedChains.includes(chain.id)
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border hover:border-primary/50 hover:bg-accent/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{chain.icon}</span>
                    <div>
                      <div className="font-medium text-foreground">{chain.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {chain.gasPrice} gwei • {chain.deployTime}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{chain.cost}</div>
                    {selectedChains.includes(chain.id) && (
                      <CheckCircle2 className="w-4 h-4 text-success ml-auto mt-1" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Deployment Summary */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-secondary" />
              <span>Deployment Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-background rounded-lg border border-border">
                <div className="text-sm font-medium">Total Cost</div>
                <div className="text-xl font-bold text-primary">
                  ${selectedChains.reduce((total, chainId) => {
                    const chain = chains.find(c => c.id === chainId);
                    return total + parseFloat(chain?.cost.replace('$', '') || '0');
                  }, 0).toFixed(2)}
                </div>
              </div>
              <div className="p-3 bg-background rounded-lg border border-border">
                <div className="text-sm font-medium">Est. Time</div>
                <div className="text-xl font-bold text-secondary">2-5 min</div>
              </div>
            </div>

            {selectedChains.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-medium">Selected Chains:</h4>
                {selectedChains.map((chainId) => {
                  const chain = chains.find(c => c.id === chainId);
                  return (
                    <div key={chainId} className="flex items-center justify-between p-2 bg-background rounded border border-border">
                      <div className="flex items-center space-x-2">
                        <span>{chain?.icon}</span>
                        <span className="text-sm">{chain?.name}</span>
                      </div>
                      <Badge variant="outline">{chain?.cost}</Badge>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Gas Fee Estimator */}
      <Card className="bg-card/60 border-card-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-warning" />
            <span>Gas Fee Estimator & Chain Compatibility</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Current Gas Prices</span>
                <Badge variant="outline" className="text-success">Live</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Ethereum:</span>
                  <span className="text-sm font-medium">25 gwei</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">BNB Chain:</span>
                  <span className="text-sm font-medium">5 gwei</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Polygon:</span>
                  <span className="text-sm font-medium">30 gwei</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Compatibility Check</span>
                <CheckCircle2 className="w-4 h-4 text-success" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span className="text-sm">EVM Compatible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3 h-3 text-success" />
                  <span className="text-sm">Solidity 0.8.x</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-3 h-3 text-warning" />
                  <span className="text-sm">Gas optimization needed</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Bridge Integration</span>
                <Badge variant="outline">Available</Badge>
              </div>
              <div className="space-y-2">
                <Button size="sm" variant="outline" className="w-full">
                  <ArrowRight className="w-3 h-3 mr-1" />
                  Cross-chain Bridge
                </Button>
                <div className="text-xs text-muted-foreground">
                  Enable asset transfers between deployed chains
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deployment Progress */}
      {deploymentStatus === "deploying" && (
        <Card className="bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary animate-spin" />
              <span>Deployment in Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="w-full" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span className="text-sm">Ethereum deployment completed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary animate-spin" />
                <span className="text-sm">BNB Chain deployment in progress...</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full border-2 border-muted" />
                <span className="text-sm text-muted-foreground">Polygon deployment pending</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}