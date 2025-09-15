import { useState } from "react";
import { Shield, Check, AlertTriangle, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ProtectionCard, 
  ProtectionCardContent, 
  ProtectionCardDescription, 
  ProtectionCardFooter, 
  ProtectionCardHeader, 
  ProtectionCardTitle 
} from "@/components/ui/protection-card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface ScanResult {
  platform: string;
  status: "safe" | "warning" | "danger";
  issues: string[];
  recommendations: string[];
}

export const PrivacyScanner = () => {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<ScanResult[]>([]);
  const { toast } = useToast();

  const mockScan = async () => {
    setIsScanning(true);
    setProgress(0);
    setResults([]);

    // Simulate scanning progress
    const steps = [
      { text: "Analyzing privacy settings...", progress: 20 },
      { text: "Checking visibility settings...", progress: 40 },
      { text: "Scanning for personal data exposure...", progress: 60 },
      { text: "Reviewing security configurations...", progress: 80 },
      { text: "Generating recommendations...", progress: 100 },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(step.progress);
    }

    // Mock results
    const mockResults: ScanResult[] = [
      {
        platform: "Profile Visibility",
        status: "warning",
        issues: ["Profile is public", "Location sharing enabled"],
        recommendations: ["Set profile to private", "Disable location sharing"]
      },
      {
        platform: "Contact Information",
        status: "safe",
        issues: [],
        recommendations: ["Keep current settings"]
      },
      {
        platform: "Activity Tracking",
        status: "danger",
        issues: ["Activity status visible", "Online status shown"],
        recommendations: ["Hide activity status", "Disable online indicators"]
      }
    ];

    setResults(mockResults);
    setIsScanning(false);
    
    toast({
      title: "Privacy scan complete",
      description: "Review your results and implement recommended changes.",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <Check className="h-5 w-5 text-success" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "danger":
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "safe":
        return "success";
      case "warning":
        return "warning";
      case "danger":
        return "default";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <ProtectionCard variant="shield">
        <ProtectionCardHeader>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-shield" />
            <div>
              <ProtectionCardTitle>Privacy Settings Scanner</ProtectionCardTitle>
              <ProtectionCardDescription>
                Analyze your social media privacy settings for potential vulnerabilities
              </ProtectionCardDescription>
            </div>
          </div>
        </ProtectionCardHeader>
        
        <ProtectionCardContent>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter your profile URL or username"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
              />
              <Button 
                variant="shield" 
                onClick={mockScan}
                disabled={!url || isScanning}
              >
                <Scan className="h-4 w-4" />
                {isScanning ? "Scanning..." : "Scan"}
              </Button>
            </div>
            
            {isScanning && (
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-muted-foreground text-center">
                  Analyzing privacy settings...
                </p>
              </div>
            )}
          </div>
        </ProtectionCardContent>
      </ProtectionCard>

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Scan Results</h3>
          {results.map((result, index) => (
            <ProtectionCard key={index} variant={getStatusVariant(result.status)}>
              <ProtectionCardHeader>
                <div className="flex items-center justify-between">
                  <ProtectionCardTitle className="flex items-center gap-2">
                    {getStatusIcon(result.status)}
                    {result.platform}
                  </ProtectionCardTitle>
                </div>
              </ProtectionCardHeader>
              
              <ProtectionCardContent className="space-y-3">
                {result.issues.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm mb-2">Issues Found:</h4>
                    <ul className="text-sm space-y-1">
                      {result.issues.map((issue, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <AlertTriangle className="h-3 w-3 text-warning mt-0.5 flex-shrink-0" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <h4 className="font-medium text-sm mb-2">Recommendations:</h4>
                  <ul className="text-sm space-y-1">
                    {result.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </ProtectionCardContent>
            </ProtectionCard>
          ))}
        </div>
      )}
    </div>
  );
};