import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Bell, 
  Search, 
  User, 
  ChevronDown,
  Zap,
  TrendingUp,
  AlertTriangle,
  LogOut,
  Settings,
  User as UserIcon
} from "lucide-react";

export function DashboardHeader() {
  const [notifications] = useState(3);
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens here
    navigate("/login");
  };

  return (
    <header className="h-16 border-b border-border bg-card/30 backdrop-blur-sm flex items-center px-6 justify-between">
      {/* Left: Chain Selector */}
      <div className="flex items-center space-x-4">
        <Select defaultValue="ethereum">
          <SelectTrigger className="w-40 bg-background border-border">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-primary rounded-full"></div>
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ethereum">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-primary rounded-full"></div>
                <span>Ethereum</span>
              </div>
            </SelectItem>
            <SelectItem value="bnb">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span>BNB Chain</span>
              </div>
            </SelectItem>
            <SelectItem value="solana">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span>Solana</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Quick Stats */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-success font-medium">ETH: $3,247</span>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <Zap className="w-4 h-4 text-warning" />
            <span className="text-muted-foreground">Gas: 25 gwei</span>
          </div>
        </div>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search contracts, tokens, dApps..."
            className="pl-10 bg-background border-border focus:border-primary"
          />
        </div>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          {notifications > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center p-0"
            >
              {notifications}
            </Badge>
          )}
        </Button>

        {/* Sandbox Status */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm text-muted-foreground">Sandbox Active</span>
        </div>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="hidden md:block text-left">
                <div className="text-sm font-medium text-foreground">John Doe</div>
                <div className="text-xs text-muted-foreground">Developer</div>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  johndoe@email.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}