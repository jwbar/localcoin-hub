import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      title: "For Buyers",
      description: "Easy discovery, chat negotiations, zero banking needed. Support local reuse while finding great deals in your neighborhood.",
      stat: "0",
      statLabel: "Banking Required"
    },
    {
      title: "For Sellers", 
      description: "Instant LOC payments, direct communication, no POS required. List items quickly and get paid immediately.",
      stat: "2%",
      statLabel: "Platform Fee"
    },
    {
      title: "For Community",
      description: "Local reuse, neighborhood economy, decentralized alternative to big tech platforms. Keep value in your community.",
      stat: "$1",
      statLabel: "LOC Token Value"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bitter font-bold text-foreground mb-6">
            Built for Local Communities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">
            LocalCoin serves buyers, sellers, and communities with features that create sustainable local economies and strengthen neighborhood connections.
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
            Ready to Join the Local Economy?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-open-sans">
            Be part of a community-driven marketplace that keeps local value local while promoting sustainable reuse and stronger neighborhoods.
          </p>
         {/* 
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button variant="gold" size="lg" className="font-open-sans">
                Start Trading Today
              </Button>
            </a>
            <a href="#use-cases">
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-open-sans">
                See How It Works
              </Button>
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Benefits;