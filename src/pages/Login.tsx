import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Zap } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("demo@dappllications.com");
  const [password, setPassword] = useState("demo123");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo auth - in real app would validate credentials
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(207_79%_48%_/_0.1),transparent_50%)]" />
      
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-xl border-card-border shadow-glow animate-fade-in">
        <CardHeader className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-50 h-50 object-contain"
            />

          </div>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to your dApp builder workspace
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-input border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg border border-border">
              <p className="font-medium text-foreground mb-1">Demo Credentials:</p>
              <p>Email: demo@dappllications.com</p>
              <p>Password: demo123</p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary text-primary-foreground font-semibold py-2 rounded-lg shadow-glow hover:shadow-neon transition-all duration-300 hover:scale-[1.02]"
            >
              Sign In
            </Button>
            
            <div className="text-center">
              <Link 
                to="/signup" 
                className="text-primary hover:text-primary-glow transition-colors"
              >
                Don't have an account? Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;