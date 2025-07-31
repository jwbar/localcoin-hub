import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      title: "Custom Event Coins",
      description: "Create branded tokens specific to your event that work offline and build community engagement. Attendees get exclusive access to your local economy ecosystem.",
      stat: "100%",
      statLabel: "Offline Capable"
    },
    {
      title: "Blockchain Security & Transparency",
      description: "Every transaction is recorded on blockchain for complete transparency. Real-time analytics show spending patterns while ensuring secure, instant settlements.",
      stat: "2.5%",
      statLabel: "Transaction Fee"
    },
    {
      title: "Controlled Economy",
      description: "Create a closed-loop system where your community coins circulate within your event, boosting local spending and giving you full control over the economy.",
      stat: "0sec",
      statLabel: "Settlement Time"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Blockchain & Community Coins Transform Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Harness the power of blockchain technology to create your own branded cryptocurrency. 
            Build stronger communities, reduce costs, and gain unprecedented control over your local economy.
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
            Launch Your Community Coin Today
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Create your own branded cryptocurrency for festivals, markets, or local businesses. 
            Complete blockchain infrastructure with zero technical complexity - just deploy and go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Start Your Coin
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;