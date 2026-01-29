import { Check, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const dataPricings = [
  {
    network: "MTN",
    color: "bg-yellow-500",
    plans: [
      { data: "500MB", price: "₦150", validity: "1 Day" },
      { data: "1GB", price: "₦300", validity: "1 Day" },
      { data: "2GB", price: "₦500", validity: "7 Days" },
      { data: "3GB", price: "₦750", validity: "30 Days" },
      { data: "5GB", price: "₦1,200", validity: "30 Days" },
      { data: "10GB", price: "₦2,000", validity: "30 Days" },
    ],
  },
  {
    network: "Airtel",
    color: "bg-red-500",
    plans: [
      { data: "500MB", price: "₦140", validity: "1 Day" },
      { data: "1GB", price: "₦280", validity: "1 Day" },
      { data: "2GB", price: "₦480", validity: "7 Days" },
      { data: "3GB", price: "₦700", validity: "30 Days" },
      { data: "5GB", price: "₦1,100", validity: "30 Days" },
      { data: "10GB", price: "₦1,900", validity: "30 Days" },
    ],
  },
  {
    network: "Glo",
    color: "bg-green-600",
    plans: [
      { data: "500MB", price: "₦130", validity: "1 Day" },
      { data: "1GB", price: "₦260", validity: "1 Day" },
      { data: "2GB", price: "₦450", validity: "7 Days" },
      { data: "3GB", price: "₦680", validity: "30 Days" },
      { data: "5GB", price: "₦1,050", validity: "30 Days" },
      { data: "10GB", price: "₦1,800", validity: "30 Days" },
    ],
  },
  {
    network: "9Mobile",
    color: "bg-teal-500",
    plans: [
      { data: "500MB", price: "₦145", validity: "1 Day" },
      { data: "1GB", price: "₦290", validity: "1 Day" },
      { data: "2GB", price: "₦490", validity: "7 Days" },
      { data: "3GB", price: "₦720", validity: "30 Days" },
      { data: "5GB", price: "₦1,150", validity: "30 Days" },
      { data: "10GB", price: "₦1,950", validity: "30 Days" },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Data Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unbeatable{" "}
            <span className="text-gradient-primary">Data Prices</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare prices across all networks and choose the best plan for you
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataPricings.map((network) => (
            <div
              key={network.network}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Network Header */}
              <div className={`${network.color} px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-xl text-white">
                    {network.network}
                  </span>
                  <Wifi className="w-6 h-6 text-white/80" />
                </div>
              </div>

              {/* Plans */}
              <div className="p-6">
                <div className="space-y-3">
                  {network.plans.map((plan) => (
                    <div
                      key={plan.data}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <div>
                        <span className="font-semibold text-foreground">{plan.data}</span>
                        <span className="text-xs text-muted-foreground ml-2">({plan.validity})</span>
                      </div>
                      <span className="font-bold text-primary">{plan.price}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6" variant="default">
                  <Check className="w-4 h-4" />
                  Buy {network.network} Data
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Discount Banner */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }} />
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              🎉 Get 5% Off Your First Purchase!
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Sign up today and use code <span className="font-bold">WELCOME5</span> at checkout 
              to enjoy 5% discount on all data purchases.
            </p>
            <Button variant="hero" size="lg">
              Claim Your Discount
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
