import cryptoIcon from "@/assets/icon-crypto-payments.jpg";
import messagingIcon from "@/assets/icon-messaging.jpg";
import tourismIcon from "@/assets/icon-tourism.jpg";

const Features = () => {
  const features = [
    {
      icon: cryptoIcon,
      title: "Seamless Wallet & Payment System",
      description: "Built-in wallet with LOC balance display. Buy and sell without traditional banking - vendors cash out when ready."
    },
    {
      icon: messagingIcon,
      title: "In-App Chat",
      description: "Direct buyer-seller communication for negotiating deals, coordinating handoffs, and building trust in your local community."
    },
    {
      icon: tourismIcon,
      title: "Smart Listing System",
      description: "Geolocation-based listings with personalized feeds. Discover secondhand goods and services in your neighborhood."
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bitter font-bold text-foreground mb-6">
            Everything You Need for Local Trade
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">
            Supporting local reuse and sustainability while strengthening neighborhood economies. 
            An alternative to centralized marketplace platforms with 2% platform fee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16 rounded-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bitter font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-open-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;