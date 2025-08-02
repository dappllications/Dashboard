import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  TestTube, 
  Play, 
  Square, 
  RotateCcw,
  Bug,
  Zap,
  Wallet,
  Users,
  Eye,
  FileText,
  Activity
} from "lucide-react";

export function TestingSandbox() {
  const [sandboxStatus, setSandboxStatus] = useState("idle");
  const [gasUsed, setGasUsed] = useState(0);
  const [testResults, setTestResults] = useState([]);

  const mockWallets = [
    { id: 1, address: "0x742d...7686", balance: "100 ETH", label: "Test Wallet 1" },
    { id: 2, address: "0x8ba1...9f8e", balance: "50 ETH", label: "Test Wallet 2" },
    { id: 3, address: "0x5c2d...3a1b", balance: "25 ETH", label: "Test Wallet 3" }
  ];

  const testScenarios = [
    { id: 1, name: "Basic Token Transfer", status: "passed", gasUsed: 21000 },
    { id: 2, name: "Smart Contract Deployment", status: "passed", gasUsed: 2100000 },
    { id: 3, name: "Multi-sig Transaction", status: "failed", gasUsed: 45000 },
    { id: 4, name: "DeFi Swap Operation", status: "running", gasUsed: 0 }
  ];

  const networkStats = {
    blockTime: "12.5s",
    gasPrice: "25 gwei",
    tps: "15",
    nodeCount: "3"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Live Testing Sandbox</h1>
          <p className="text-muted-foreground">Test and debug your dApps in a controlled environment</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={sandboxStatus === "running" ? "default" : "secondary"} className="text-success">
            <div className="w-2 h-2 bg-success rounded-full mr-1 animate-pulse"></div>
            Testnet Active
          </Badge>
          <Button 
            className="bg-gradient-primary text-primary-foreground"
            onClick={() => setSandboxStatus(sandboxStatus === "idle" ? "running" : "idle")}
          >
            {sandboxStatus === "idle" ? (
              <>
                <Play className="w-4 h-4 mr-2" />
                Start Testing
              </>
            ) : (
              <>
                <Square className="w-4 h-4 mr-2" />
                Stop Testing
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Network Status */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Network Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Block Time:</span>
                <span className="font-medium">{networkStats.blockTime}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Gas Price:</span>
                <span className="font-medium">{networkStats.gasPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>TPS:</span>
                <span className="font-medium">{networkStats.tps}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Nodes:</span>
                <span className="font-medium">{networkStats.nodeCount}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Test Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center p-2 bg-background rounded border border-border">
                <div className="text-lg font-bold text-success">12</div>
                <div className="text-xs text-muted-foreground">Passed</div>
              </div>
              <div className="text-center p-2 bg-background rounded border border-border">
                <div className="text-lg font-bold text-destructive">3</div>
                <div className="text-xs text-muted-foreground">Failed</div>
              </div>
            </div>
            <div className="text-center p-2 bg-background rounded border border-border">
              <div className="text-lg font-bold text-warning">{gasUsed.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Total Gas Used</div>
            </div>
          </CardContent>
        </Card>

        {/* Mock Wallets */}
        <Card className="lg:col-span-2 bg-card/60 border-card-border">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-sm">
              <Wallet className="w-4 h-4" />
              <span>Mock Wallets</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {mockWallets.map((wallet) => (
                <div key={wallet.id} className="flex items-center justify-between p-2 bg-background rounded border border-border">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">{wallet.id}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">{wallet.label}</div>
                      <div className="text-xs text-muted-foreground font-mono">{wallet.address}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{wallet.balance}</div>
                    <Button size="sm" variant="outline" className="text-xs h-6">Use</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="simulation" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="simulation">Testnet Simulation</TabsTrigger>
          <TabsTrigger value="debugger">Transaction Debugger</TabsTrigger>
          <TabsTrigger value="interactions">User Interactions</TabsTrigger>
        </TabsList>

        <TabsContent value="simulation" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Test Scenarios */}
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TestTube className="w-5 h-5 text-primary" />
                  <span>Test Scenarios</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {testScenarios.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                    <div className="flex items-center space-x-3">
                      {test.status === 'passed' ? (
                        <div className="w-3 h-3 bg-success rounded-full"></div>
                      ) : test.status === 'failed' ? (
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      ) : (
                        <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
                      )}
                      <div>
                        <div className="font-medium text-sm">{test.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {test.gasUsed > 0 ? `${test.gasUsed.toLocaleString()} gas` : 'Running...'}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                ))}
                
                <Button className="w-full mt-4 bg-gradient-secondary text-secondary-foreground">
                  <Play className="w-4 h-4 mr-2" />
                  Run All Tests
                </Button>
              </CardContent>
            </Card>

            {/* Custom Test */}
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-secondary" />
                  <span>Custom Test</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label>Function to Test</Label>
                    <Input placeholder="e.g., transfer, mint, approve" />
                  </div>
                  <div>
                    <Label>Parameters</Label>
                    <Textarea 
                      placeholder="Enter function parameters (JSON format)"
                      className="min-h-[100px] font-mono text-sm"
                    />
                  </div>
                  <div>
                    <Label>Gas Limit</Label>
                    <Input placeholder="e.g., 100000" />
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-gradient-primary text-primary-foreground">
                    <Play className="w-4 h-4 mr-2" />
                    Execute
                  </Button>
                  <Button variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="debugger" className="space-y-6">
          <Card className="bg-card/60 border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bug className="w-5 h-5 text-warning" />
                <span>Transaction Debugger with Gas Profiler</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-background rounded-lg border border-border font-mono text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transaction Hash:</span>
                    <span>0x8f2a...c4d1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Block Number:</span>
                    <span>18,456,789</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gas Used:</span>
                    <span className="text-warning">45,678 / 100,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="destructive">Failed</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Execution Trace</h4>
                <div className="bg-background rounded-lg border border-border p-3 font-mono text-xs space-y-1">
                  <div className="text-success">✓ Function call: transfer()</div>
                  <div className="text-success">✓ Balance check passed</div>
                  <div className="text-success">✓ Allowance verification</div>
                  <div className="text-destructive">✗ Insufficient gas for execution</div>
                  <div className="text-muted-foreground">  → Gas required: 52,000</div>
                  <div className="text-muted-foreground">  → Gas provided: 45,000</div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <FileText className="w-3 h-3 mr-1" />
                  Full Trace
                </Button>
                <Button size="sm" variant="outline">
                  <Zap className="w-3 h-3 mr-1" />
                  Gas Analysis
                </Button>
                <Button size="sm" variant="outline">
                  <Bug className="w-3 h-3 mr-1" />
                  Debug Steps
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactions" className="space-y-6">
          <Card className="bg-card/60 border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Mock User Interactions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Simulated Users</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-background rounded border border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm">Alice (Power User)</span>
                      </div>
                      <Button size="sm" variant="outline">Simulate</Button>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-background rounded border border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 text-secondary-foreground" />
                        </div>
                        <span className="text-sm">Bob (New User)</span>
                      </div>
                      <Button size="sm" variant="outline">Simulate</Button>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-background rounded border border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-neon rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm">Charlie (Whale)</span>
                      </div>
                      <Button size="sm" variant="outline">Simulate</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Interaction Patterns</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Activity className="w-4 h-4 mr-2" />
                      High-frequency Trading
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Zap className="w-4 h-4 mr-2" />
                      Flash Loan Attack
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Mass User Onboarding
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-2">Live Interaction Feed</h4>
                <div className="space-y-1 text-sm font-mono">
                  <div className="text-success">✓ Alice executed swap: 100 USDC → 0.031 ETH</div>
                  <div className="text-primary">→ Bob initiated deposit: 50 USDC</div>
                  <div className="text-warning">⚠ Charlie attempting large withdrawal: 1000 ETH</div>
                  <div className="text-muted-foreground">  Gas estimation in progress...</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}