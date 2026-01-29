import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: ["Mobile Data", "Airtime Top-Up", "Electricity Bills", "Cable TV", "Exam Pins"],
    Company: ["About Us", "Careers", "Press", "Blog", "Partners"],
    Support: ["Help Center", "Contact Us", "FAQs", "API Docs", "Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Refund Policy", "Cookies"],
  };

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                DataFlow
              </span>
            </a>
            <p className="text-primary-foreground/60 mb-6 max-w-sm">
              Your trusted platform for instant mobile data, airtime, and utility payments. 
              Fast, secure, and affordable.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@dataflow.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <Phone className="w-5 h-5 text-primary" />
                <span>+234 800 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-primary-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/60 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 DataFlow. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
