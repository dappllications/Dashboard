import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Newspaper, Clock, ExternalLink, Zap } from "lucide-react";

export function NewsSummarizer() {
  const news = [
    {
      id: 1,
      title: "Ethereum 2.0 Staking Rewards Hit New High",
      summary: "Ethereum staking rewards have reached an all-time high of 5.2% APY as more validators join the network. This increase is attributed to higher transaction fees and improved network efficiency.",
      category: "DeFi",
      time: "2 hours ago",
      sentiment: "positive",
      source: "CoinDesk"
    },
    {
      id: 2,
      title: "New DeFi Protocol Launches with $50M TVL",
      summary: "A new automated market maker protocol has launched with impressive initial liquidity. The protocol features innovative impermanent loss protection and dynamic fee structures.",
      category: "DeFi",
      time: "4 hours ago",
      sentiment: "positive",
      source: "The Block"
    },
    {
      id: 3,
      title: "Regulatory Updates May Impact Cross-Chain Bridges",
      summary: "New regulatory proposals in the EU could affect how cross-chain bridges operate. The industry is watching closely as these changes could impact interoperability solutions.",
      category: "Regulation",
      time: "6 hours ago",
      sentiment: "neutral",
      source: "Decrypt"
    },
    {
      id: 4,
      title: "NFT Marketplace Volumes Show Recovery Signs",
      summary: "After months of decline, NFT trading volumes are showing signs of recovery with a 23% increase this week. New utility-focused projects are driving renewed interest.",
      category: "NFTs",
      time: "8 hours ago",
      sentiment: "positive",
      source: "CoinTelegraph"
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "negative": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent">
            News Summarizer
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered blockchain and crypto news summaries
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
          <Zap className="w-4 h-4 mr-2" />
          Generate Summary
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {news.map((article) => (
          <Card key={article.id} className="bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-200 hover:shadow-glow">
            <CardHeader>
              <div className="flex items-start justify-between space-x-2">
                <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
                <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-primary border-primary/30">
                  {article.category}
                </Badge>
                <Badge className={getSentimentColor(article.sentiment)}>
                  {article.sentiment}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed mb-4">
                {article.summary}
              </CardDescription>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.time}</span>
                </div>
                <span className="font-medium">{article.source}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Newspaper className="w-5 h-5 text-primary" />
            <span className="text-primary">AI Summary Insights</span>
          </CardTitle>
          <CardDescription>Key market trends from today's news</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="font-medium text-green-400">Positive Sentiment Dominant</div>
              <div className="text-sm text-muted-foreground">75% of today's news shows positive market sentiment</div>
            </div>
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="font-medium text-blue-400">DeFi Focus</div>
              <div className="text-sm text-muted-foreground">High coverage on DeFi protocols and yield farming</div>
            </div>
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="font-medium text-yellow-400">Regulatory Watch</div>
              <div className="text-sm text-muted-foreground">Increased regulatory discussions across major markets</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}