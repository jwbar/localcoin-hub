import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      title: "Economic Empowerment",
      description: "LocalCoin empowers local economies by providing accessible and inclusive financial services that work for everyone.",
      stat: "100%",
      statLabel: "Inclusive Access"
    },
    {
      title: "Community Engagement",
      description: "Foster stronger community connections through seamless communication and shared economic opportunities.",
      stat: "24/7",
      statLabel: "Community Support"
    },
    {
      title: "Scalable Solution",
      description: "Perfect for local businesses, large festivals, and events where traditional payment systems may be limited.",
      stat: "∞",
      statLabel: "Growth Potential"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose LocalCoin?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your local economy with our comprehensive Web3 platform designed 
            for businesses, entrepreneurs, and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-gradient-card border border-border hover:shadow-soft transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {benefit.stat}
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                {benefit.statLabel}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Local Economy?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the Web3 revolution and empower your community with LocalCoin's 
            comprehensive platform for local commerce and communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="earth" size="lg">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;