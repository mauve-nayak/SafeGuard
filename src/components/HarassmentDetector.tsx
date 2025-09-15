import { useState } from "react";
import { MessageSquare, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  ProtectionCard, 
  ProtectionCardContent, 
  ProtectionCardDescription, 
  ProtectionCardHeader, 
  ProtectionCardTitle 
} from "@/components/ui/protection-card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResult {
  riskLevel: "low" | "medium" | "high";
  confidence: number;
  threats: string[];
  recommendations: string[];
}

export const HarassmentDetector = () => {
  const [message, setMessage] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const analyzeMessage = async () => {
    if (!message.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis based on message content
    const mockResult: AnalysisResult = {
      riskLevel: message.toLowerCase().includes("threat") || message.toLowerCase().includes("hurt") ? "high" :
                 message.toLowerCase().includes("stupid") || message.toLowerCase().includes("weird") ? "medium" : "low",
      confidence: Math.floor(Math.random() * 30) + 70,
      threats: message.toLowerCase().includes("threat") ? ["Threatening language", "Intimidation tactics"] :
               message.toLowerCase().includes("stupid") ? ["Verbal abuse", "Insulting language"] : [],
      recommendations: [
        "Document this message with screenshots",
        "Block the sender if continuing",
        "Report to platform administrators",
        "Consider contacting authorities if threats escalate"
      ]
    };
    
    setResult(mockResult);
    setIsAnalyzing(false);
    
    toast({
      title: "Analysis complete",
      description: `Message analyzed with ${mockResult.confidence}% confidence`,
    });
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "low": return <CheckCircle className="h-4 w-4" />;
      case "medium": return <AlertTriangle className="h-4 w-4" />;
      case "high": return <AlertTriangle className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <ProtectionCard variant="safety">
        <ProtectionCardHeader>
          <div className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-safety" />
            <div>
              <ProtectionCardTitle>Harassment Detection</ProtectionCardTitle>
              <ProtectionCardDescription>
                Analyze messages, comments, or content for potential harassment or threats
              </ProtectionCardDescription>
            </div>
          </div>
        </ProtectionCardHeader>
        
        <ProtectionCardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Paste the message, comment, or content you want to analyze..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[120px] resize-none"
            />
            
            <Button 
              variant="safety" 
              onClick={analyzeMessage}
              disabled={!message.trim() || isAnalyzing}
              className="w-full"
            >
              <Shield className="h-4 w-4" />
              {isAnalyzing ? "Analyzing..." : "Analyze Message"}
            </Button>
          </div>
        </ProtectionCardContent>
      </ProtectionCard>

      {result && (
        <ProtectionCard variant={result.riskLevel === "high" ? "default" : result.riskLevel === "medium" ? "warning" : "success"}>
          <ProtectionCardHeader>
            <div className="flex items-center justify-between">
              <ProtectionCardTitle className="flex items-center gap-2">
                {getRiskIcon(result.riskLevel)}
                Analysis Results
              </ProtectionCardTitle>
              <Badge variant={result.riskLevel === "high" ? "destructive" : result.riskLevel === "medium" ? "secondary" : "outline"}>
                {result.riskLevel.toUpperCase()} RISK
              </Badge>
            </div>
            <ProtectionCardDescription>
              Analysis confidence: {result.confidence}%
            </ProtectionCardDescription>
          </ProtectionCardHeader>
          
          <ProtectionCardContent className="space-y-4">
            {result.threats.length > 0 && (
              <div>
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  Detected Threats:
                </h4>
                <ul className="space-y-1">
                  {result.threats.map((threat, index) => (
                    <li key={index} className="text-sm pl-6 relative">
                      <span className="absolute left-0 top-1 w-2 h-2 bg-destructive rounded-full"></span>
                      {threat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div>
              <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-shield" />
                Recommended Actions:
              </h4>
              <ul className="space-y-1">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="text-sm pl-6 relative">
                    <span className="absolute left-0 top-1 w-2 h-2 bg-success rounded-full"></span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
            
            {result.riskLevel === "high" && (
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm font-medium text-destructive">⚠️ High Risk Detected</p>
                <p className="text-sm text-destructive/80 mt-1">
                  This message contains potential threats. Consider immediate action and contact authorities if necessary.
                </p>
              </div>
            )}
          </ProtectionCardContent>
        </ProtectionCard>
      )}
    </div>
  );
};