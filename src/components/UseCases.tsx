import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Smartphone, CreditCard, MessageCircle, Shield } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      title: "Music Festival in Barcelona",
      description: "International festival with 50,000 attendees from 30+ countries",
      icon: <MapPin className="w-8 h-8 text-primary" />,
      challenges: ["Language barriers", "Currency exchange", "Long vendor lines", "Tourist payment fees"],
      solutions: ["Real-time translation in 20+ languages", "Single event cryptocurrency", "QR code instant payments", "No international transaction fees"],
      results: ["40% faster checkout times", "95% user satisfaction", "30% increase in vendor sales", "Zero payment disputes"]
    },
    {
      title: "University Campus Ecosystem",
      description: "Large campus with 25,000 students, staff, and daily visitors",
      icon: <Users className="w-8 h-8 text-primary" />,
      challenges: ["Multiple payment systems", "Limited merchant discovery", "Safety concerns", "Complex event coordination"],
      solutions: ["Unified campus wallet", "AI-powered recommendations", "Verified merchant network", "Integrated event promotion"],
      results: ["85% student adoption", "50% increase in local business visits", "99.9% transaction safety", "Streamlined campus commerce"]
    },
    {
      title: "Tourist Market in Prague",
      description: "Historic market serving 10,000+ daily international visitors",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      challenges: ["Tourist price inflation", "Communication difficulties", "Cash-only vendors", "Scam protection"],
      solutions: ["Pre-negotiated fair pricing", "Universal translation chat", "Digital payment integration", "Verified vendor program"],
      results: ["25% average savings for tourists", "Eliminated language barriers", "100% cashless option", "Zero reported scams"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bitter font-bold text-foreground mb-6">
            Real-World Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-open-sans">
            See how LocalCoin transforms local economies across different event types and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-border/50 shadow-soft hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {useCase.icon}
                  <div>
                    <CardTitle className="font-bitter text-xl">{useCase.title}</CardTitle>
                    <CardDescription className="font-open-sans">{useCase.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bitter font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-destructive" />
                    Challenges
                  </h4>
                  <ul className="space-y-2 font-open-sans">
                    {useCase.challenges.map((challenge, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bitter font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    LocalCoin Solutions
                  </h4>
                  <ul className="space-y-2 font-open-sans">
                    {useCase.solutions.map((solution, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bitter font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    Results
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {useCase.results.map((result, i) => (
                      <Badge key={i} variant="secondary" className="justify-start text-xs font-open-sans">
                        {result}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-open-sans text-muted-foreground mb-8">
            Ready to create your own success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block">
              <Badge variant="outline" className="px-6 py-3 text-base font-open-sans hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                Schedule a Demo
              </Badge>
            </a>
            <Badge variant="secondary" className="px-6 py-3 text-base font-open-sans">
              Custom pricing for your event size
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;