import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";

export function StockTracker() {
  const stocks = [
    { symbol: "ETH", name: "Ethereum", price: "$2,425.67", change: "+5.42%", trend: "up" },
    { symbol: "BTC", name: "Bitcoin", price: "$43,250.21", change: "+2.18%", trend: "up" },
    { symbol: "BNB", name: "BNB Chain", price: "$312.45", change: "-1.23%", trend: "down" },
    { symbol: "SOL", name: "Solana", price: "$98.76", change: "+8.91%", trend: "up" },
    { symbol: "MATIC", name: "Polygon", price: "$0.89", change: "-3.45%", trend: "down" },
    { symbol: "AVAX", name: "Avalanche", price: "$38.12", change: "+4.67%", trend: "up" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Stock Tracker
          </h1>
          <p className="text-muted-foreground mt-2">
            Track cryptocurrency and blockchain asset performance
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Activity className="w-4 h-4 mr-2" />
          Add Watchlist
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stocks.map((stock) => (
          <Card key={stock.symbol} className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-200 hover:shadow-glow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span className="text-primary font-bold">{stock.symbol}</span>
                {stock.trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-green-400" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-400" />
                )}
              </CardTitle>
              <CardDescription>{stock.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xl font-bold">{stock.price}</span>
                </div>
                <Badge 
                  variant={stock.trend === "up" ? "default" : "destructive"}
                  className={stock.trend === "up" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                >
                  {stock.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="text-primary">Market Overview</CardTitle>
          <CardDescription>Global cryptocurrency market statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$1.2T</div>
              <div className="text-sm text-muted-foreground">Total Market Cap</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">+3.45%</div>
              <div className="text-sm text-muted-foreground">24h Change</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">$45.2B</div>
              <div className="text-sm text-muted-foreground">24h Volume</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">54.2%</div>
              <div className="text-sm text-muted-foreground">BTC Dominance</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}