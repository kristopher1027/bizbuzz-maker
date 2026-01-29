import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-hero rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Stay{" "}
                <span className="text-gradient-primary">Connected?</span>
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl">
                Join over 1 million Nigerians who trust DataFlow for their data, 
                airtime, and utility needs. Get started in seconds!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" className="group">
                  Create Free Account
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="hero-outline" size="xl">
                  <Smartphone className="w-5 h-5" />
                  Download App
                </Button>
              </div>
            </div>

            {/* App Preview */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30" />
                <div className="relative w-64 h-[500px] bg-secondary rounded-[40px] border-4 border-primary-foreground/20 shadow-2xl overflow-hidden">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-secondary rounded-b-2xl z-10" />
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-hero p-6 pt-12">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-3 flex items-center justify-center shadow-glow">
                        <Smartphone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="font-display font-bold text-primary-foreground">DataFlow</div>
                    </div>
                    
                    {/* Balance Card */}
                    <div className="bg-primary/20 rounded-2xl p-4 mb-4">
                      <div className="text-xs text-primary-foreground/60 mb-1">Wallet Balance</div>
                      <div className="font-display text-2xl font-bold text-primary-foreground">₦25,450.00</div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-3">
                      {["Data", "Airtime", "Bills"].map((action) => (
                        <div
                          key={action}
                          className="bg-primary-foreground/10 rounded-xl p-3 text-center"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/30 mx-auto mb-2" />
                          <div className="text-xs text-primary-foreground/70">{action}</div>
                        </div>
                      ))}
                    </div>
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

export default CTA;
