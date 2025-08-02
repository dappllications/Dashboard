import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Store, 
  Search, 
  Star, 
  TrendingUp, 
  DollarSign,
  Users,
  Eye,
  Download,
  Filter,
  BarChart3,
  Gamepad2,
  Zap
} from "lucide-react";

export function DappMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: Store },
    { id: "defi", name: "DeFi", icon: TrendingUp },
    { id: "gaming", name: "Gaming", icon: Gamepad2 },
    { id: "social", name: "Social", icon: Users },
    { id: "nft", name: "NFT", icon: Zap }
  ];

  const featuredDapps = [
    {
      id: 1,
      name: "DeFi Yield Optimizer",
      category: "DeFi",
      description: "Automated yield farming with multi-protocol optimization",
      price: "$299",
      rating: 4.8,
      downloads: "12.5k",
      image: "🚀",
      revenue: "$45,230"
    },
    {
      id: 2,
      name: "NFT Marketplace Pro",
      category: "NFT",
      description: "Complete NFT trading platform with advanced features",
      price: "$499",
      rating: 4.9,
      downloads: "8.2k",
      image: "🎨",
      revenue: "$67,890"
    },
    {
      id: 3,
      name: "Gaming DAO Builder",
      category: "Gaming",
      description: "Create and manage gaming DAOs with token rewards",
      price: "$399",
      rating: 4.7,
      downloads: "5.1k",
      image: "🎮",
      revenue: "$23,450"
    }
  ];

  const trendingApps = [
    { name: "Prediction Markets", category: "DeFi", trend: "+245%", users: "15.2k" },
    { name: "Social Trading", category: "Social", trend: "+180%", users: "8.9k" },
    { name: "Play-to-Earn RPG", category: "Gaming", trend: "+156%", users: "22.1k" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">dApp Marketplace</h1>
          <p className="text-muted-foreground">Discover, deploy, and monetize blockchain applications</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Store className="w-4 h-4 mr-2" />
          Publish dApp
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-card/60 border-card-border">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search dApps, templates, smart contracts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex items-center space-x-2 mt-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-primary text-primary-foreground" : ""}
              >
                <category.icon className="w-3 h-3 mr-1" />
                {category.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="marketplace" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="marketplace">Browse dApps</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="monetization">Monetization</TabsTrigger>
        </TabsList>

        <TabsContent value="marketplace" className="space-y-6">
          {/* Featured dApps */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Featured dApps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDapps.map((dapp) => (
                <Card key={dapp.id} className="bg-card/60 border-card-border hover:shadow-glow transition-all cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{dapp.image}</div>
                        <div>
                          <CardTitle className="text-lg">{dapp.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">{dapp.category}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-warning fill-current" />
                        <span className="text-sm font-medium">{dapp.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{dapp.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{dapp.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-3 h-3" />
                        <span>{dapp.revenue}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{dapp.price}</span>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" className="bg-gradient-secondary text-secondary-foreground">
                          Deploy
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trending */}
          <Card className="bg-card/60 border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-success" />
                <span>Trending dApps</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trendingApps.map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-bold text-muted-foreground">#{index + 1}</div>
                      <div>
                        <div className="font-medium">{app.name}</div>
                        <div className="text-sm text-muted-foreground">{app.category}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-success">{app.trend}</div>
                        <div className="text-xs text-muted-foreground">{app.users} users</div>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Market Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-background rounded-lg border border-border">
                    <div className="text-sm font-medium">Total dApps</div>
                    <div className="text-2xl font-bold text-primary">2,847</div>
                    <div className="text-xs text-success">+12% this month</div>
                  </div>
                  <div className="p-3 bg-background rounded-lg border border-border">
                    <div className="text-sm font-medium">Active Users</div>
                    <div className="text-2xl font-bold text-secondary">1.2M</div>
                    <div className="text-xs text-success">+8% this month</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>DeFi Apps</span>
                    <span>45%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Gaming Apps</span>
                    <span>28%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>NFT Apps</span>
                    <span>18%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Social Apps</span>
                    <span>9%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>User Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Daily Active Users</span>
                    <span className="font-medium">45,230</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average Session Time</span>
                    <span className="font-medium">12.5 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">User Retention (7d)</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Conversion Rate</span>
                    <span className="font-medium">3.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="monetization" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-warning" />
                  <span>Revenue Dashboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-background rounded-lg border border-border">
                    <div className="text-sm font-medium">Monthly Revenue</div>
                    <div className="text-2xl font-bold text-success">$12,450</div>
                    <div className="text-xs text-success">+24% from last month</div>
                  </div>
                  <div className="p-3 bg-background rounded-lg border border-border">
                    <div className="text-sm font-medium">Subscriptions</div>
                    <div className="text-2xl font-bold text-primary">156</div>
                    <div className="text-xs text-success">+18 new this week</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Revenue Sources</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Subscription Fees</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Transaction Fees</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Premium Features</span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 border-card-border">
              <CardHeader>
                <CardTitle>Monetization Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Subscription Price</span>
                    <Input className="w-24" defaultValue="$29" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Transaction Fee</span>
                    <Input className="w-24" defaultValue="2.5%" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Revenue Share</span>
                    <Input className="w-24" defaultValue="70%" />
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary text-primary-foreground">
                  Update Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}