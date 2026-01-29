import { Wifi, Phone, Zap, Tv, CreditCard, Droplets } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Mobile Data",
    description: "Buy affordable data bundles for all networks instantly",
    color: "primary",
  },
  {
    icon: Phone,
    title: "Airtime Top-Up",
    description: "Recharge any phone number within seconds",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Electricity Bills",
    description: "Pay your prepaid and postpaid electricity bills",
    color: "success",
  },
  {
    icon: Tv,
    title: "Cable TV",
    description: "Subscribe to DSTV, GOtv, and StarTimes easily",
    color: "primary",
  },
  {
    icon: CreditCard,
    title: "Exam Pins",
    description: "Buy WAEC, NECO, NABTEB, and JAMB result pins",
    color: "accent",
  },
  {
    icon: Droplets,
    title: "Utility Bills",
    description: "Pay water and other utility bills seamlessly",
    color: "success",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need,{" "}
            <span className="text-gradient-primary">One Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From mobile data to utility payments, we've got all your digital needs covered 
            with the best rates and instant delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                ${service.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' : ''}
                ${service.color === 'accent' ? 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground' : ''}
                ${service.color === 'success' ? 'bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground' : ''}
              `}>
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
