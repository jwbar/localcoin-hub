import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      title: "For Attendees",
      description: "AI suggests relevant merchants and offers. Communicate in any language. Pay instantly without cash or international fees. Access only verified vendors for safety.",
      stat: "95%",
      statLabel: "User Satisfaction"
    },
    {
      title: "For Merchants", 
      description: "Get discovered by interested customers. Chat directly with potential clients. No expensive POS systems. Instant payments with minimal fees.",
      stat: "2.5%",
      statLabel: "Transaction Fee"
    },
    {
      title: "For Organizers",
      description: "Deploy whitelabel platform within days. Full branding control. Real-time analytics. Reduce payment complexity. Create new revenue streams.",
      stat: "0sec",
      statLabel: "Settlement Time"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bitter font-bold text-foreground mb-6">
            Benefits for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">
            LocalCoin creates value for attendees, merchants, and organizers through seamless integration 
            and innovative features that enhance every interaction.
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
              <h3 className="text-xl font-bitter font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-open-sans">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-12 text-center">
          <h3 className="text-2xl md:text-4xl font-bitter font-bold text-primary-foreground mb-6">
            Ready to Transform Your Event?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-open-sans">
            Join successful festivals, campuses, and communities using LocalCoin to enhance attendee experience 
            and boost merchant sales with seamless technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button variant="gold" size="lg" className="font-open-sans">
                Get Started Today
              </Button>
            </a>
            <a href="#use-cases">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-open-sans">
                View Success Stories
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;