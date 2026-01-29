import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Smartphone, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-16 lg:py-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Instant Data & Airtime Delivery</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Stay Connected,{" "}
              <span className="text-gradient-primary">Anytime</span>
              <br />
              Anywhere
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Buy mobile data, airtime, and utility payments in seconds. 
              Fast, secure, and affordable—trusted by over 1 million users nationwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" className="group">
                Buy Data Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View All Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-sm text-primary-foreground/60">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-primary-foreground/60">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary-foreground/60">All Networks</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Card */}
          <div className="flex-1 w-full max-w-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
              
              {/* Main Card */}
              <div className="relative bg-card/10 backdrop-blur-xl rounded-3xl border border-primary-foreground/10 p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">Quick Top-Up</h3>
                  <p className="text-primary-foreground/60">Choose a data plan below</p>
                </div>

                {/* Quick Buy Options */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { amount: "1GB", price: "₦300", validity: "1 Day" },
                    { amount: "2GB", price: "₦500", validity: "7 Days" },
                    { amount: "5GB", price: "₦1,200", validity: "30 Days" },
                    { amount: "10GB", price: "₦2,000", validity: "30 Days" },
                  ].map((plan) => (
                    <button
                      key={plan.amount}
                      className="group p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <div className="font-display font-bold text-xl text-primary-foreground group-hover:text-primary transition-colors">
                        {plan.amount}
                      </div>
                      <div className="text-accent font-semibold">{plan.price}</div>
                      <div className="text-xs text-primary-foreground/50">{plan.validity}</div>
                    </button>
                  ))}
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  <Wifi className="w-5 h-5" />
                  Buy Now
                </Button>

                {/* Network Logos Placeholder */}
                <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                  <p className="text-xs text-primary-foreground/40 text-center mb-3">Supported Networks</p>
                  <div className="flex justify-center gap-4">
                    {["MTN", "GLO", "Airtel", "9Mobile"].map((network) => (
                      <div
                        key={network}
                        className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-bold text-primary-foreground/60"
                      >
                        {network.slice(0, 3)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
