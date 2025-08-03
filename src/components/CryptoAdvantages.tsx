import { Button } from "@/components/ui/button";

const CryptoAdvantages = () => {
  const advantages = [
    {
      icon: "⚡",
      title: "Zero Banking Delays",
      description: "Instant LOC settlements mean buyers and sellers trade immediately without waiting for bank transfers."
    },
    {
      icon: "🔒",
      title: "Transparent Transactions",
      description: "Solana blockchain ensures all trades are visible and secure, building trust in your local marketplace."
    },
    {
      icon: "💰",
      title: "Lower Fees (2%)",
      description: "Forget 8-15% platform fees. LocalCoin takes only 2% to sustain operations and user support."
    },
    {
      icon: "🎯",
      title: "No Banking Required",
      description: "Perfect for underbanked communities. Buy LOC, trade locally, sellers cash out when convenient."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bitter font-bold text-foreground mb-6">
            Why LocalCoin & Blockchain?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">
            Blockchain technology enables true peer-to-peer trade without traditional banking barriers, perfect for local circular economies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bitter font-semibold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-open-sans">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bitter font-bold text-foreground mb-4">
                LOC Token Economics
              </h3>
              <p className="text-muted-foreground mb-6 font-open-sans">
                LocalCoin (LOC) is pegged to $1 USD, running on Solana for fast, low-cost transactions that keep local value local.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-muted-foreground font-open-sans">
                  <span className="text-primary mr-2">✓</span>
                  Stable $1 USD peg
                </li>
                <li className="flex items-center text-muted-foreground font-open-sans">
                  <span className="text-primary mr-2">✓</span>
                  Fast Solana transactions
                </li>
                <li className="flex items-center text-muted-foreground font-open-sans">
                  <span className="text-primary mr-2">✓</span>
                  Works without banking
                </li>
                <li className="flex items-center text-muted-foreground font-open-sans">
                  <span className="text-primary mr-2">✓</span>
                  2% platform fee only
                </li>
              </ul>
              <a href="#contact">
                <Button variant="secondary" size="lg" className="font-open-sans">
                  Learn More About LOC
                </Button>
              </a>
            </div>
            <div className="bg-secondary/20 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🪙</div>
              <h4 className="text-xl font-bitter font-semibold text-foreground mb-2">
                LocalCoin
              </h4>
              <p className="text-muted-foreground text-sm font-open-sans">
                1 LOC = $1 USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoAdvantages;