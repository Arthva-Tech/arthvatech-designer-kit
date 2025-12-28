import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Smartphone, Shield, Lightbulb, Users, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  Rocket,
  Building2,
  GraduationCap,
  ShoppingCart,
  Truck,
  HeartPulse,
  Landmark,
  Briefcase,
} from "lucide-react";

const heroServices = [
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored solutions built for your unique business requirements and growth objectives.",
    benefits: "Scalable • Maintainable • Future-proof",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration and infrastructure management for optimal performance.",
    benefits: "Secure • Cost-effective • Reliable",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that engage and delight users.",
    benefits: "iOS • Android • Cross-platform",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    benefits: "Protection • Compliance • Peace of mind",
  },
  {
    icon: Lightbulb,
    title: "AI Solutions",
    description: "Intelligent automation and machine learning to transform your operations.",
    benefits: "Smart • Efficient • Innovative",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Strategic consulting to modernize your business for the digital era.",
    benefits: "Strategic • Impactful • Measurable",
  },
];

const whyChooseUs = [
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "We leverage cutting-edge technologies to deliver solutions that keep you ahead of the competition.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
  },
  {
    icon: Target,
    title: "Scalable Solutions",
    description: "Our architectures grow with your business, ensuring long-term value and adaptability.",
  },
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "Years of experience across diverse industries with a track record of successful deliveries.",
  },
];

const industries = [
  { icon: Rocket, name: "Startups" },
  { icon: Briefcase, name: "SMBs" },
  { icon: Building2, name: "Enterprises" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Landmark, name: "Finance" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Truck, name: "Logistics" },
];

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Innovative IT Solutions
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                Transform Your Business with{" "}
                <span className="gradient-text">Arthvatech</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                We deliver cutting-edge technology solutions that empower organizations to innovate, 
                scale, and succeed in the digital landscape.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="gradient-bg hover:opacity-90 transition-opacity px-8">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Comprehensive IT Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                From concept to deployment, we provide end-to-end technology services designed to accelerate your digital journey.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Arthvatech</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Your Trusted Technology Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At Arthvatech, we combine deep technical expertise with a genuine understanding of business challenges. 
                Our approach ensures that every solution we deliver creates measurable impact and lasting value.
              </p>
              <Button asChild className="gradient-bg hover:opacity-90">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <div className="bg-card rounded-xl p-6 border border-border hover-lift">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Industries We Serve</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Tailored Solutions for Every Sector
              </h2>
              <p className="text-muted-foreground text-lg">
                We understand the unique challenges of different industries and deliver solutions that address specific needs.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  to="/industries"
                  className="group flex items-center gap-3 px-6 py-4 bg-card rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <industry.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Technologies" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
