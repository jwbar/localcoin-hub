import cryptoIcon from "@/assets/icon-crypto-payments.jpg";
import messagingIcon from "@/assets/icon-messaging.jpg";
import tourismIcon from "@/assets/icon-tourism.jpg";

const Features = () => {
  const features = [
    {
      icon: cryptoIcon,
      title: "Instant Crypto Payments",
      description: "One-tap payments like WeChat Pay, but with cryptocurrency. Users pay effortlessly while merchants receive instant, secure transactions without traditional banking delays."
    },
    {
      icon: messagingIcon,
      title: "AI-Powered Universal Communication",
      description: "Real-time translation breaks all language barriers. Tourists, locals, and merchants communicate seamlessly in their native languages within the integrated messaging system."
    },
    {
      icon: tourismIcon,
      title: "Intelligent Merchant Discovery",
      description: "Users discover nearby businesses, services, and experiences through location-based recommendations. Like WeChat's mini-programs, but for your entire local economy ecosystem."
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Complete "Everything App" Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Like WeChat revolutionized China's digital economy, LocalCoin creates a unified ecosystem where 
            payments, communication, and commerce converge. Deploy this comprehensive solution to transform any local economy.
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
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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