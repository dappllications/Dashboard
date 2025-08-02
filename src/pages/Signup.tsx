import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Zap } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@email.com",
    password: ""
  });
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo - in real app would create account
    navigate("/dashboard");
  };

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(159_77%_42%_/_0.1),transparent_50%)]" />
      
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-xl border-card-border shadow-green animate-fade-in">
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
          <CardTitle className="text-2xl font-bold text-foreground">Create Account</CardTitle>
          <CardDescription className="text-muted-foreground">
            Join the future of blockchain development
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground font-medium">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => updateForm("fullName", e.target.value)}
                className="bg-input border-border focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateForm("email", e.target.value)}
                className="bg-input border-border focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => updateForm("password", e.target.value)}
                  className="bg-input border-border focus:border-secondary focus:ring-1 focus:ring-secondary transition-all pr-10"
                  placeholder="Create a strong password"
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
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-secondary text-secondary-foreground font-semibold py-2 rounded-lg shadow-green hover:shadow-green transition-all duration-300 hover:scale-[1.02]"
            >
              Create Account
            </Button>
            
            <div className="text-center">
              <Link 
                to="/login" 
                className="text-secondary hover:text-secondary-glow transition-colors"
              >
                Already have an account? Log in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;