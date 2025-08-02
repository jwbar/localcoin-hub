import cryptoIcon from "@/assets/icon-crypto-payments.jpg";
import messagingIcon from "@/assets/icon-messaging.jpg";
import tourismIcon from "@/assets/icon-tourism.jpg";

const Features = () => {
  const features = [
    {
      icon: cryptoIcon,
      title: "AI-Driven Merchant Discovery",
      description: "Smart recommendations help attendees find relevant vendors, services, and experiences based on preferences and location."
    },
    {
      icon: messagingIcon,
      title: "Multilingual Communication",
      description: "Real-time translation and universal chat system breaks language barriers, perfect for international events and tourist areas."
    },
    {
      icon: tourismIcon,
      title: "Seamless Crypto Payments",
      description: "Instant settlements, QR code scanning, and custom event tokens eliminate payment friction and international fees."
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bitter font-bold text-foreground mb-6">
            The Complete Platform for Your Event
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-open-sans">
            Everything attendees and merchants need in one seamless app. 
            Deploy within days, customize to your brand, and transform your event experience.
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