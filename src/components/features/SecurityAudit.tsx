import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  FileText,
  Play,
  Download,
  Target,
  Bug,
  Lock
} from "lucide-react";

export function SecurityAudit() {
  const [scanProgress, setScanProgress] = useState(85);
  const [auditScore, setAuditScore] = useState(92);

  const vulnerabilities = [
    { type: "High", count: 0, color: "text-destructive" },
    { type: "Medium", count: 2, color: "text-warning" },
    { type: "Low", count: 5, color: "text-muted-foreground" },
    { type: "Info", count: 3, color: "text-primary" }
  ];

  const scanResults = [
    { check: "Reentrancy Attack", status: "passed", severity: "high" },
    { check: "Integer Overflow", status: "passed", severity: "high" },
    { check: "Access Control", status: "warning", severity: "medium" },
    { check: "Gas Optimization", status: "warning", severity: "low" },
    { check: "Code Quality", status: "passed", severity: "info" }
  ];

  const attackVectors = [
    { name: "Flash Loan Attack", status: "protected", impact: "High" },
    { name: "Front-running", status: "vulnerable", impact: "Medium" },
    { name: "MEV Exploitation", status: "protected", impact: "Low" },
    { name: "Oracle Manipulation", status: "protected", impact: "High" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Security & Audit Center</h1>
          <p className="text-muted-foreground">Comprehensive security analysis and vulnerability detection</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-primary text-primary-foreground">
            <Play className="w-4 h-4 mr-2" />
            Run Full Audit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Audit Score */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-success" />
              <span>Security Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="relative w-32 h-32 mx-auto">
              <div className="w-32 h-32 rounded-full bg-gradient-primary/20 flex items-center justify-center">
                <div className="text-3xl font-bold text-success">{auditScore}</div>
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-foreground">Excellent</div>
              <div className="text-sm text-muted-foreground">Security rating</div>
            </div>
            <Badge variant="outline" className="text-success border-success">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Production Ready
            </Badge>
          </CardContent>
        </Card>

        {/* Vulnerability Summary */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bug className="w-5 h-5 text-warning" />
              <span>Vulnerabilities Found</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {vulnerabilities.map((vuln) => (
              <div key={vuln.type} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    vuln.type === 'High' ? 'bg-destructive' :
                    vuln.type === 'Medium' ? 'bg-warning' :
                    vuln.type === 'Low' ? 'bg-muted' : 'bg-primary'
                  }`}></div>
                  <span className="text-sm">{vuln.type} Risk</span>
                </div>
                <Badge variant="outline" className={vuln.color}>
                  {vuln.count}
                </Badge>
              </div>
            ))}
            
            <div className="pt-2 mt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">Last scan: 2 minutes ago</div>
              <Progress value={scanProgress} className="mt-2" />
              <div className="text-xs text-muted-foreground mt-1">Scan progress: {scanProgress}%</div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full">
              <Play className="w-4 h-4 mr-2" />
              Run Quick Scan
            </Button>
            <Button variant="outline" className="w-full">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="outline" className="w-full">
              <Shield className="w-4 h-4 mr-2" />
              Vulnerability Test
            </Button>
            <Button variant="outline" className="w-full">
              <Lock className="w-4 h-4 mr-2" />
              Gas Optimization
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="scanner" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="scanner">Auto Scanner</TabsTrigger>
          <TabsTrigger value="simulation">Simulation Tools</TabsTrigger>
          <TabsTrigger value="report">Audit Report</TabsTrigger>
        </TabsList>

        <TabsContent value="scanner" className="space-y-6">
          <Card className="bg-card/60 border-card-border">
            <CardHeader>
              <CardTitle>Vulnerability Scanner Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scanResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                    <div className="flex items-center space-x-3">
                      {result.status === 'passed' ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : result.status === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-warning" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                      <div>
                        <div className="font-medium">{result.check}</div>
                        <div className="text-sm text-muted-foreground">
                          {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} severity
                        </div>
                      </div>
                    </div>
                    <Badge variant={result.status === 'passed' ? 'default' : 'destructive'}>
                      {result.status === 'passed' ? 'Passed' : 'Needs Review'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="simulation" className="space-y-6">
          <Card className="bg-card/60 border-card-border">
            <CardHeader>
              <CardTitle>Attack Vector Simulation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {attackVectors.map((vector, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        vector.status === 'protected' ? 'bg-success' : 'bg-destructive'
                      }`}></div>
                      <div>
                        <div className="font-medium">{vector.name}</div>
                        <div className="text-sm text-muted-foreground">Impact: {vector.impact}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={vector.status === 'protected' ? 'default' : 'destructive'}>
                        {vector.status === 'protected' ? 'Protected' : 'Vulnerable'}
                      </Badge>
                      <Button size="sm" variant="outline">Test</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="report" className="space-y-6">
          <Card className="bg-card/60 border-card-border">
            <CardHeader>
              <CardTitle>Audit Report Generator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="text-sm font-medium">Overall Score</div>
                  <div className="text-2xl font-bold text-success">{auditScore}/100</div>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <div className="text-sm font-medium">Risk Level</div>
                  <div className="text-2xl font-bold text-success">Low</div>
                </div>
              </div>
              
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-medium mb-2">Executive Summary</h4>
                <p className="text-sm text-muted-foreground">
                  The smart contract has undergone comprehensive security analysis. 
                  No critical vulnerabilities were identified. Minor optimizations 
                  recommended for gas efficiency and access control patterns.
                </p>
              </div>

              <Button className="w-full bg-gradient-secondary text-secondary-foreground">
                <Download className="w-4 h-4 mr-2" />
                Generate Full Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}