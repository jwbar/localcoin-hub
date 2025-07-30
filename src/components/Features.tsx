import cryptoIcon from "@/assets/icon-crypto-payments.jpg";
import messagingIcon from "@/assets/icon-messaging.jpg";
import tourismIcon from "@/assets/icon-tourism.jpg";

const Features = () => {
  const features = [
    {
      icon: cryptoIcon,
      title: "Ready-to-Deploy Payment System",
      description: "Complete cryptocurrency payment infrastructure that works out-of-the-box for festivals, events, and local markets. No complex setup required."
    },
    {
      icon: messagingIcon,
      title: "Multi-Language Communication Hub",
      description: "Built-in messaging platform with AI translation for international events and diverse communities. Perfect for tourism-heavy locations."
    },
    {
      icon: tourismIcon,
      title: "Local Business Integration",
      description: "Seamlessly connect vendors, tourists, and local services through a unified platform that promotes economic growth and community engagement."
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Enterprise-Ready LocalCoin Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A complete, deployable solution for event organizers, city governments, and investors 
            looking to implement cutting-edge Web3 technology in their local economies.
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