import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Home, Recycle, CreditCard, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  const useCases = [
    {
      title: "Campus Marketplace",
      description: "University of 25,000 students, semester transitions",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      challenges: ["Students struggled to buy/sell textbooks, furniture, and dorm items", "Facebook groups were chaotic and unsafe", "No secure payment system", "Difficult to find specific items"],
      solutions: ["LocalCoin campus marketplace with geolocation", "In-app chat for negotiations", "LOC payments for seamless student-to-student trade", "Safety verification and ratings"],
      results: ["40% savings on textbook costs", "8,000 successful transactions/semester", "95% positive feedback on safety", "Zero payment disputes"]
    },
    {
      title: "Neighborhood Exchange",
      description: "Local community of 5,000 residents, sustainable living focus",
      icon: <Home className="w-8 h-8 text-primary" />,
      challenges: ["Residents wanted to buy/sell locally", "Relied on Facebook groups with no payment system", "No safety verification", "Limited to cash transactions"],
      solutions: ["LocalCoin community app with neighbor verification", "Secure chat for coordination", "LOC payments for trusted local trade", "Reputation system for safety"],
      results: ["85% reduction in waste to landfill", "$50,000 in local trade/month", "90% resident participation", "Model adopted by 12 cities"]
    },
    {
      title: "Community Reuse Hub",
      description: "Citywide initiative, 50,000 residents, sustainability focus",
      icon: <Recycle className="w-8 h-8 text-primary" />,
      challenges: ["City wanted to reduce waste and promote circular economy", "Lacked platform for residents to trade reusable items", "No tracking of environmental impact", "Disconnected local businesses"],
      solutions: ["LocalCoin citywide marketplace with sustainability rewards", "Reuse tracking and impact dashboard", "Community challenges and incentives", "Local business integration"],
      results: ["500 tons waste diverted annually", "$1.2M in local economic activity", "75% resident engagement", "Regional sustainability award"]
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bitter font-bold text-foreground mb-6">
            LocalCoin in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-open-sans">
            See how LocalCoin powers local economies, from campus marketplaces to neighborhood exchanges, building stronger communities through peer-to-peer trade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-border/50 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
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
                    Challenge
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
                    LocalCoin Solution
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

        <div className="text-center">
          <a href="#contact">
            <Button variant="default" size="lg" className="font-open-sans">
              Join LocalCoin
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UseCases;