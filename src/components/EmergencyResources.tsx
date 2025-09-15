import { Phone, MessageCircle, Globe, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  ProtectionCard, 
  ProtectionCardContent, 
  ProtectionCardDescription, 
  ProtectionCardHeader, 
  ProtectionCardTitle 
} from "@/components/ui/protection-card";

interface Resource {
  name: string;
  description: string;
  phone?: string;
  website?: string;
  available24h?: boolean;
  icon: React.ReactNode;
}

export const EmergencyResources = () => {
  const emergencyContacts: Resource[] = [
    {
      name: "National Domestic Violence Hotline",
      description: "24/7 confidential support for domestic violence survivors",
      phone: "1-800-799-7233",
      website: "https://www.thehotline.org",
      available24h: true,
      icon: <Phone className="h-5 w-5" />
    },
    {
      name: "Crisis Text Line",
      description: "Free 24/7 crisis support via text message",
      phone: "Text HOME to 741741",
      available24h: true,
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      name: "RAINN National Sexual Assault Hotline",
      description: "Confidential support from trained staff",
      phone: "1-800-656-4673",
      website: "https://www.rainn.org",
      available24h: true,
      icon: <Phone className="h-5 w-5" />
    },
    {
      name: "Cyber Civil Rights Initiative",
      description: "Support for victims of non-consensual intimate images",
      website: "https://www.cybercivilrights.org",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  const safetyTips = [
    "Document all incidents with screenshots and timestamps",
    "Keep records of harassing messages or posts",
    "Use privacy settings to limit who can contact you",
    "Trust your instincts - if something feels wrong, seek help",
    "Create a safety plan with trusted friends or family",
    "Consider using a different device for safety research"
  ];

  return (
    <div className="space-y-6">
      {/* Emergency Contacts */}
      <ProtectionCard variant="default">
        <ProtectionCardHeader>
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <div>
              <ProtectionCardTitle>Emergency Resources</ProtectionCardTitle>
              <ProtectionCardDescription>
                Immediate support and crisis intervention services
              </ProtectionCardDescription>
            </div>
          </div>
        </ProtectionCardHeader>
        
        <ProtectionCardContent>
          <div className="grid gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="text-primary mt-0.5">
                  {contact.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{contact.name}</h4>
                    {contact.available24h && (
                      <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                        24/7
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                  <div className="flex gap-2">
                    {contact.phone && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.location.href = `tel:${contact.phone}`}
                      >
                        <Phone className="h-3 w-3" />
                        {contact.phone}
                      </Button>
                    )}
                    {contact.website && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(contact.website, '_blank')}
                      >
                        <Globe className="h-3 w-3" />
                        Website
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ProtectionCardContent>
      </ProtectionCard>

      {/* Safety Tips */}
      <ProtectionCard variant="shield">
        <ProtectionCardHeader>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-shield" />
            <div>
              <ProtectionCardTitle>Safety Tips</ProtectionCardTitle>
              <ProtectionCardDescription>
                Essential practices to protect yourself online
              </ProtectionCardDescription>
            </div>
          </div>
        </ProtectionCardHeader>
        
        <ProtectionCardContent>
          <ul className="space-y-3">
            {safetyTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-shield rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </ProtectionCardContent>
      </ProtectionCard>

      {/* Emergency Action */}
      <ProtectionCard variant="default" className="border-destructive/20 bg-destructive/5">
        <ProtectionCardContent className="text-center py-6">
          <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">In Immediate Danger?</h3>
          <p className="text-muted-foreground mb-4">
            If you are in immediate physical danger, contact emergency services right away.
          </p>
          <Button 
            variant="emergency" 
            size="lg"
            onClick={() => window.location.href = "tel:911"}
            className="w-full max-w-xs"
          >
            <Phone className="h-5 w-5" />
            Call 911
          </Button>
        </ProtectionCardContent>
      </ProtectionCard>
    </div>
  );
};