import { SmartContractBuilder } from "@/components/features/SmartContractBuilder";
import { CrossChainDeployment } from "@/components/features/CrossChainDeployment";
import { TokenWalletStudio } from "@/components/features/TokenWalletStudio";
import { SecurityAudit } from "@/components/features/SecurityAudit";
import { DappMarketplace } from "@/components/features/DappMarketplace";
import { TestingSandbox } from "@/components/features/TestingSandbox";
import { DashboardOverview } from "@/components/features/DashboardOverview";
import { StockTracker } from "@/components/features/StockTracker";
import { NewsSummarizer } from "@/components/features/NewsSummarizer";
import { PredictiveCharts } from "@/components/features/PredictiveCharts";
import { AIRiskFeed } from "@/components/features/AIRiskFeed";
import { Planner } from "@/components/features/Planner";
import { Settings } from "@/components/features/Settings";

interface DashboardMainProps {
  activeView: string;
}

export function DashboardMain({ activeView }: DashboardMainProps) {
  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardOverview />;
      case "smart-contract-builder":
        return <SmartContractBuilder />;
      case "cross-chain-deployment":
        return <CrossChainDeployment />;
      case "token-wallet-studio":
        return <TokenWalletStudio />;
      case "security-audit":
        return <SecurityAudit />;
      case "dapp-marketplace":
        return <DappMarketplace />;
      case "testing-sandbox":
        return <TestingSandbox />;
      case "stock-tracker":
        return <StockTracker />;
      case "news-summarizer":
        return <NewsSummarizer />;
      case "predictive-charts":
        return <PredictiveCharts />;
      case "ai-risk-feed":
        return <AIRiskFeed />;
      case "planner":
        return <Planner />;
      case "settings":
        return <Settings />;
      default:
        return <SmartContractBuilder />;
    }
  };

  return (
    <div className="w-full animate-fade-in">
      {renderActiveView()}
    </div>
  );
}