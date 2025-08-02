import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Coins, 
  Wallet, 
  TrendingUp, 
  Calendar,
  Users,
  Gift,
  ArrowUpRight,
  ArrowDownRight,
  Copy
} from "lucide-react";

export function TokenWalletStudio() {
  const [tokenName, setTokenName] = useState("MyToken");
  const [tokenSupply, setTokenSupply] = useState("1000000");

  const walletData = {
    balance: "1,234.56 ETH",
    usdValue: "$4,123,456.78",
    tokens: [
      { symbol: "ETH", amount: "1,234.56", value: "$4,123,456", change: "+2.4%" },
      { symbol: "USDC", amount: "50,000", value: "$50,000", change: "+0.1%" },
      { symbol: "UNI", amount: "500", value: "$3,450", change: "-1.2%" }
    ]
  };

  const transactions = [
    { type: "receive", amount: "+10.5 ETH", from: "0x742d...7686", time: "2m ago" },
    { type: "send", amount: "-2.3 ETH", to: "0x8ba1...9f8e", time: "1h ago" },
    { type: "swap", amount: "500 USDC → 0.15 ETH", platform: "Uniswap", time: "3h ago" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Token & Wallet Studio</h1>
          <p className="text-muted-foreground">Create tokens, manage wallets, and configure tokenomics</p>
        </div>
      </div>

      <Tabs defaultValue="minting" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="minting">Token Minting</TabsTrigger>
          <TabsTrigger value="wallet">Wallet Interface</TabsTrigger>
          <TabsTrigger value="tokenomics">Tokenomics Setup</TabsTrigger>
        </TabsList>

        <TabsContent value="minting" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Token Creation */}
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-primary" />
                  <span>Token Minting UI</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Token Type</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button variant="outline" className="bg-primary/10 border-primary">
                        Fungible
                      </Button>
                      <Button variant="outline">
                        NFT
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label>Standard</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button variant="outline" className="bg-primary/10 border-primary">
                        ERC-20
                      </Button>
                      <Button variant="outline">
                        ERC-721
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label htmlFor="tokenName">Token Name</Label>
                    <Input 
                      id="tokenName"
                      value={tokenName}
                      onChange={(e) => setTokenName(e.target.value)}
                      placeholder="Enter token name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tokenSupply">Total Supply</Label>
                    <Input 
                      id="tokenSupply"
                      value={tokenSupply}
                      onChange={(e) => setTokenSupply(e.target.value)}
                      placeholder="Enter total supply"
                    />
                  </div>
                  <div>
                    <Label>Features</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Mintable
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Burnable
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                        Pausable
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary text-primary-foreground">
                  <Coins className="w-4 h-4 mr-2" />
                  Mint Token
                </Button>
              </CardContent>
            </Card>

            {/* Token Preview */}
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle>Token Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-background rounded-lg border border-border">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Coins className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{tokenName}</h3>
                  <p className="text-muted-foreground">MTK</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{tokenSupply}</div>
                      <div className="text-xs text-muted-foreground">Total Supply</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-secondary">18</div>
                      <div className="text-xs text-muted-foreground">Decimals</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Contract Address</span>
                    <div className="flex items-center space-x-1">
                      <span className="font-mono">0x742d...7686</span>
                      <Copy className="w-3 h-3 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Network</span>
                    <span>Ethereum Mainnet</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Status</span>
                    <Badge variant="outline" className="text-success border-success">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="wallet" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Wallet Overview */}
            <Card className="lg:col-span-2 bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="w-5 h-5 text-secondary" />
                  <span>Non-Custodial Wallet Interface</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">{walletData.balance}</div>
                    <div className="text-muted-foreground">{walletData.usdValue}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Token Holdings</h4>
                  {walletData.tokens.map((token, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">{token.symbol}</span>
                        </div>
                        <div>
                          <div className="font-medium">{token.symbol}</div>
                          <div className="text-sm text-muted-foreground">{token.amount}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{token.value}</div>
                        <div className={`text-sm ${token.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                          {token.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transaction History */}
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {transactions.map((tx, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 hover:bg-background rounded">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      tx.type === 'receive' ? 'bg-success/20' : tx.type === 'send' ? 'bg-destructive/20' : 'bg-primary/20'
                    }`}>
                      {tx.type === 'receive' ? (
                        <ArrowDownRight className="w-4 h-4 text-success" />
                      ) : tx.type === 'send' ? (
                        <ArrowUpRight className="w-4 h-4 text-destructive" />
                      ) : (
                        <TrendingUp className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{tx.amount}</div>
                      <div className="text-xs text-muted-foreground">
                        {tx.type === 'receive' ? `from ${tx.from}` : 
                         tx.type === 'send' ? `to ${tx.to}` : 
                         `via ${tx.platform}`}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{tx.time}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tokenomics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vesting Schedule */}
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-warning" />
                  <span>Vesting Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Team Allocation</span>
                    <Badge variant="outline">15%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Investors</span>
                    <Badge variant="outline">25%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Public Sale</span>
                    <Badge variant="outline">40%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ecosystem</span>
                    <Badge variant="outline">20%</Badge>
                  </div>
                </div>
                <Button className="w-full bg-gradient-secondary text-secondary-foreground">
                  Configure Vesting
                </Button>
              </CardContent>
            </Card>

            {/* Staking & Airdrops */}
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="w-5 h-5 text-primary" />
                  <span>Staking & Airdrops</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-background rounded-lg border border-border text-center">
                    <div className="text-lg font-bold text-primary">12.5%</div>
                    <div className="text-xs text-muted-foreground">Staking APY</div>
                  </div>
                  <div className="p-3 bg-background rounded-lg border border-border text-center">
                    <div className="text-lg font-bold text-secondary">10,000</div>
                    <div className="text-xs text-muted-foreground">Airdrop Amount</div>
                  </div>
                </div>
                <div className="space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Users className="w-3 h-3 mr-1" />
                    Setup Staking
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Gift className="w-3 h-3 mr-1" />
                    Create Airdrop
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}