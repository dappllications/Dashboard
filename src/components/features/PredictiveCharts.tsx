import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, TrendingUp, Brain, Target, Zap } from "lucide-react";

export function PredictiveCharts() {
  const predictions = [
    {
      asset: "ETH",
      current: "$2,425.67",
      predicted: "$2,890.45",
      confidence: "78%",
      trend: "bullish",
      timeframe: "7 days",
      change: "+19.2%"
    },
    {
      asset: "BTC",
      current: "$43,250.21",
      predicted: "$47,100.33",
      confidence: "65%",
      trend: "bullish",
      timeframe: "7 days",
      change: "+8.9%"
    },
    {
      asset: "BNB",
      current: "$312.45",
      predicted: "$289.67",
      confidence: "72%",
      trend: "bearish",
      timeframe: "7 days",
      change: "-7.3%"
    },
    {
      asset: "SOL",
      current: "$98.76",
      predicted: "$115.23",
      confidence: "69%",
      trend: "bullish",
      timeframe: "7 days",
      change: "+16.7%"
    }
  ];

  const indicators = [
    { name: "RSI", value: "64.2", status: "neutral", description: "Relative Strength Index" },
    { name: "MACD", value: "12.45", status: "bullish", description: "Moving Average Convergence Divergence" },
    { name: "SMA 50", value: "$2,380", status: "bullish", description: "Simple Moving Average (50)" },
    { name: "Bollinger", value: "Upper", status: "overbought", description: "Bollinger Bands Position" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "bullish": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "bearish": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "overbought": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default: return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            Predictive Charts
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered price predictions and technical analysis
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue="7d">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1d">1 Day</SelectItem>
              <SelectItem value="7d">7 Days</SelectItem>
              <SelectItem value="30d">30 Days</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Brain className="w-4 h-4 mr-2" />
            Generate Prediction
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {predictions.map((prediction) => (
          <Card key={prediction.asset} className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-200 hover:shadow-glow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <span className="text-primary font-bold">{prediction.asset}</span>
                <Badge className={getStatusColor(prediction.trend)}>
                  {prediction.trend}
                </Badge>
              </CardTitle>
              <CardDescription>{prediction.timeframe} prediction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">Current Price</div>
                  <div className="text-lg font-bold">{prediction.current}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Predicted Price</div>
                  <div className="text-lg font-bold text-primary">{prediction.predicted}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Change</div>
                    <div className={`font-bold ${prediction.trend === 'bullish' ? 'text-green-400' : 'text-red-400'}`}>
                      {prediction.change}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Confidence</div>
                    <div className="font-bold text-primary">{prediction.confidence}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-primary">Technical Indicators</span>
            </CardTitle>
            <CardDescription>Key technical analysis metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {indicators.map((indicator) => (
                <div key={indicator.name} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50">
                  <div>
                    <div className="font-medium">{indicator.name}</div>
                    <div className="text-sm text-muted-foreground">{indicator.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{indicator.value}</div>
                    <Badge className={getStatusColor(indicator.status)}>
                      {indicator.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-primary">AI Model Performance</span>
            </CardTitle>
            <CardDescription>Prediction accuracy metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">7-Day Accuracy</span>
                <span className="font-bold text-green-400">76.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">30-Day Accuracy</span>
                <span className="font-bold text-primary">68.7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Model Version</span>
                <span className="font-bold">GPT-4 Turbo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Last Training</span>
                <span className="font-bold">2 hours ago</span>
              </div>
              <div className="pt-4 border-t border-border/50">
                <Button variant="outline" className="w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Retrain Model
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}