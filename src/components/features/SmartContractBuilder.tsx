import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code2, 
  Download, 
  Play, 
  Save, 
  FileText,
  Zap,
  Coins,
  Users,
  Building
} from "lucide-react";

export function SmartContractBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState("erc20");
  const [contractName, setContractName] = useState("MyToken");
  const [contractSymbol, setContractSymbol] = useState("MTK");

  const templates = [
    { id: "erc20", name: "ERC-20 Token", icon: Coins, description: "Fungible token standard" },
    { id: "erc721", name: "ERC-721 NFT", icon: FileText, description: "Non-fungible token standard" },
    { id: "erc1155", name: "ERC-1155 Multi", icon: Building, description: "Multi-token standard" },
    { id: "dao", name: "DAO Contract", icon: Users, description: "Governance contract" }
  ];

  const solidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ${contractName} is ERC20, Ownable {
    constructor() ERC20("${contractName}", "${contractSymbol}") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}`;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Smart Contract Builder</h1>
          <p className="text-muted-foreground">Design and deploy smart contracts with drag-and-drop templates</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save</span>
          </Button>
          <Button className="bg-gradient-primary text-primary-foreground flex items-center space-x-2">
            <Play className="w-4 h-4" />
            <span>Deploy</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Template Selection */}
        <Card className="lg:col-span-1 bg-card/60 border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span>Templates</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border hover:border-primary/50 hover:bg-accent/50"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <template.icon className={`w-5 h-5 mt-0.5 ${
                    selectedTemplate === template.id ? "text-primary" : "text-muted-foreground"
                  }`} />
                  <div>
                    <div className="font-medium text-foreground">{template.name}</div>
                    <div className="text-xs text-muted-foreground">{template.description}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 space-y-3">
              <div>
                <Label htmlFor="contractName" className="text-sm font-medium">Contract Name</Label>
                <Input
                  id="contractName"
                  value={contractName}
                  onChange={(e) => setContractName(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="contractSymbol" className="text-sm font-medium">Symbol</Label>
                <Input
                  id="contractSymbol"
                  value={contractSymbol}
                  onChange={(e) => setContractSymbol(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Editor */}
        <Card className="lg:col-span-2 bg-card/60 border-card-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-secondary" />
                <span>Smart Contract Code</span>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-success border-success">
                  <Zap className="w-3 h-3 mr-1" />
                  Auto-generated
                </Badge>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="solidity" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="solidity">Solidity</TabsTrigger>
                <TabsTrigger value="abi">ABI</TabsTrigger>
                <TabsTrigger value="deployment">Deployment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="solidity" className="mt-4">
                <div className="relative">
                  <Textarea
                    value={solidityCode}
                    readOnly
                    className="min-h-[400px] font-mono text-sm bg-background border-border"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      Solidity 0.8.0
                    </Badge>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="abi" className="mt-4">
                <Textarea
                  value={JSON.stringify([
                    {
                      "inputs": [],
                      "name": "name",
                      "outputs": [{"type": "string"}],
                      "type": "function"
                    }
                  ], null, 2)}
                  readOnly
                  className="min-h-[400px] font-mono text-sm bg-background border-border"
                />
              </TabsContent>
              
              <TabsContent value="deployment" className="mt-4">
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-medium mb-2">Deployment Script</h4>
                    <code className="text-sm text-muted-foreground">
                      npx hardhat deploy --network mainnet
                    </code>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-background rounded-lg border border-border">
                      <div className="text-sm font-medium">Estimated Gas</div>
                      <div className="text-lg font-bold text-primary">2,100,000</div>
                    </div>
                    <div className="p-3 bg-background rounded-lg border border-border">
                      <div className="text-sm font-medium">Deploy Cost</div>
                      <div className="text-lg font-bold text-secondary">~$45 USD</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Version Control */}
      <Card className="bg-card/60 border-card-border">
        <CardHeader>
          <CardTitle>Version Control</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Badge variant="outline">v1.0.0</Badge>
              <span className="text-sm text-muted-foreground">Latest commit: Initial contract setup</span>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">View History</Button>
              <Button size="sm" variant="outline">Create Branch</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}