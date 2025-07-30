import cryptoIcon from "@/assets/icon-crypto-payments.jpg";
import messagingIcon from "@/assets/icon-messaging.jpg";
import tourismIcon from "@/assets/icon-tourism.jpg";

const Features = () => {
  const features = [
    {
      icon: cryptoIcon,
      title: "Crypto-Based Payments",
      description: "Secure and efficient cryptocurrency payments that eliminate the need for traditional cash and POS systems. Built for the future of commerce."
    },
    {
      icon: messagingIcon,
      title: "Seamless Communication",
      description: "Built-in messaging services with AI-powered language barrier assistance, connecting communities across cultural and linguistic divides."
    },
    {
      icon: tourismIcon,
      title: "Tourism Promotion",
      description: "Empower tourists to discover local activities and make safe payments using cryptocurrency wallets while supporting local businesses."
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Platform Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            LocalCoin offers a centralized hub for all local economic activities, 
            combining the power of Web3 technology with community-focused solutions.
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