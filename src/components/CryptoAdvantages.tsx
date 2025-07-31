import { Button } from "@/components/ui/button";

const CryptoAdvantages = () => {
  const advantages = [
    {
      icon: "🏦",
      title: "No Banking Delays",
      description: "Instant blockchain settlements eliminate traditional banking bottlenecks. Vendors receive payments immediately, not days later."
    },
    {
      icon: "🔒",
      title: "Immutable Records",
      description: "Every transaction is permanently recorded on blockchain, providing complete transparency and eliminating fraud or disputes."
    },
    {
      icon: "📱",
      title: "Works Offline",
      description: "Private token system functions without internet connectivity, perfect for remote festivals and outdoor events."
    },
    {
      icon: "💰",
      title: "Lower Costs",
      description: "2.5% transaction fees vs 5-7% traditional payment processors. More money stays in your community economy."
    },
    {
      icon: "🎯",
      title: "Targeted Economics",
      description: "Custom tokens create closed-loop economies where money circulates within your event, boosting local vendor sales."
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Track spending patterns, popular vendors, and peak transaction times instantly - impossible with cash systems."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Blockchain Beats Traditional Payments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Traditional payment systems weren't designed for events and communities. 
            Blockchain technology solves fundamental problems that cost organizers thousands in lost revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Create Your Event's Digital Economy
              </h3>
              <p className="text-muted-foreground mb-6">
                Launch branded tokens that attendees purchase with fiat currency but spend like cash. 
                Create scarcity, exclusive access, and community ownership while you maintain full control.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Custom token branding and design
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Set your own exchange rates and fees
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Automatic vendor payouts to bank accounts
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Complete transaction visibility and control
                </li>
              </ul>
              <Button variant="secondary" size="lg">
                Learn About Token Economics
              </Button>
            </div>
            <div className="bg-secondary/20 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🪙</div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Your Festival Coin
              </h4>
              <p className="text-muted-foreground text-sm">
                Custom branded cryptocurrency for your event
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoAdvantages;