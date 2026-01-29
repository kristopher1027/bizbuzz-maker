import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Business Owner",
    image: "AJ",
    content: "DataFlow has been a game-changer for my business. I buy data in bulk for my staff and the prices are unbeatable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Chioma Okonkwo",
    role: "Student",
    image: "CO",
    content: "As a student, I need affordable data for my online classes. DataFlow offers the best prices and instant delivery. Never going back to bank apps!",
    rating: 5,
  },
  {
    name: "Emmanuel Nwosu",
    role: "Freelancer",
    image: "EN",
    content: "The wallet system is so convenient. I fund once and buy multiple times without the hassle of entering card details. Fast and secure!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Loved by{" "}
            <span className="text-gradient-primary">Thousands</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Don't just take our word for it—here's what our customers say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
