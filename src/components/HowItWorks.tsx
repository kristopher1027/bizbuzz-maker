import { UserPlus, CreditCard, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up in seconds with just your phone number and email address",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Fund Your Wallet",
    description: "Add money using bank transfer, card payment, or USSD",
  },
  {
    icon: Zap,
    step: "03",
    title: "Select Service",
    description: "Choose from data, airtime, or any utility service you need",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Instant Delivery",
    description: "Receive your purchase instantly—no delays, no hassle",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Get Started in{" "}
            <span className="text-gradient-primary">4 Easy Steps</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Our simple process gets you from signup to purchase in under 2 minutes
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              <div className="relative">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-display font-bold text-lg shadow-accent z-10">
                  {step.step}
                </div>

                {/* Card */}
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
