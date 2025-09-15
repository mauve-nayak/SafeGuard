import { useState } from "react";
import { Shield, Scan, MessageSquare, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PrivacyScanner } from "@/components/PrivacyScanner";
import { HarassmentDetector } from "@/components/HarassmentDetector";
import { EmergencyResources } from "@/components/EmergencyResources";
import heroImage from "@/assets/hero-protection.jpg";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Scan className="h-8 w-8" />,
      title: "Privacy Scanner",
      description: "Analyze your social media settings for privacy vulnerabilities and get personalized recommendations.",
      color: "shield"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Harassment Detection",
      description: "AI-powered analysis to identify threatening or harassing content before it affects you.",
      color: "safety"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Emergency Resources",
      description: "Quick access to crisis support services and safety planning tools when you need help.",
      color: "default"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Navigation */}
      <nav className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-shield" />
              <span className="text-xl font-bold">SafeGuard</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">
                Protection Tools
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t py-4 space-y-4">
              <a href="#tools" className="block text-muted-foreground hover:text-foreground transition-colors">
                Protection Tools
              </a>
              <a href="#resources" className="block text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <Button variant="hero" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-shield/10 via-transparent to-safety/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Protect Yourself
                <span className="block text-transparent bg-gradient-primary bg-clip-text">
                  Online
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Comprehensive tools to safeguard your digital privacy, detect harassment, 
                and access emergency resources when you need them most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  <Shield className="h-5 w-5" />
                  Start Protection Scan
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Digital protection and safety" 
                className="rounded-xl shadow-protection w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shield/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-card/30" id="tools">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Your Digital Safety Toolkit
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful protection tools designed specifically for women's online safety and privacy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-protection transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-${feature.color}/10 flex items-center justify-center text-${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tools Section */}
      <section className="py-20" id="tools-detail">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="privacy" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 h-14">
                <TabsTrigger value="privacy" className="flex items-center gap-2">
                  <Scan className="h-4 w-4" />
                  <span className="hidden sm:inline">Privacy Scanner</span>
                  <span className="sm:hidden">Privacy</span>
                </TabsTrigger>
                <TabsTrigger value="harassment" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden sm:inline">Harassment Detection</span>
                  <span className="sm:hidden">Detection</span>
                </TabsTrigger>
                <TabsTrigger value="emergency" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">Emergency Resources</span>
                  <span className="sm:hidden">Emergency</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="privacy">
                <PrivacyScanner />
              </TabsContent>
              
              <TabsContent value="harassment">
                <HarassmentDetector />
              </TabsContent>
              
              <TabsContent value="emergency" id="resources">
                <EmergencyResources />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-shield" />
                <span className="text-lg font-bold">SafeGuard</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering women with tools for digital safety and privacy protection.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Scanner</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Harassment Detection</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Safety Education</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Emergency Contacts</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Safety Planning</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Legal Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SafeGuard. All rights reserved. Made with care for digital safety.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;