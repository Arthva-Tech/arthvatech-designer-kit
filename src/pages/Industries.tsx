import { Link } from "react-router-dom";
import {
  ArrowRight,
  Rocket,
  Building2,
  Building,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IndustryCard from "@/components/ui/IndustryCard";

const industries = [
  {
    icon: Rocket,
    title: "Startups",
    description: "We help startups move fast with MVPs, scalable architectures, and technology foundations that support rapid growth without compromising quality.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    description: "Cost-effective solutions that automate operations, improve customer engagement, and provide the digital tools SMBs need to compete effectively.",
  },
  {
    icon: Building,
    title: "Enterprises",
    description: "Enterprise-grade solutions with robust security, seamless integration capabilities, and the scalability required for large-scale operations.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-compliant healthcare solutions including patient portals, telemedicine platforms, and health data management systems.",
  },
  {
    icon: Landmark,
    title: "Finance & FinTech",
    description: "Secure financial applications, payment processing systems, and digital banking solutions built with regulatory compliance in mind.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "E-learning platforms, student management systems, and educational technology that enhance learning outcomes and administrative efficiency.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "End-to-end e-commerce solutions from custom storefronts to inventory management, payment integration, and customer analytics.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Fleet management, warehouse optimization, and supply chain visibility solutions that streamline operations and reduce costs.",
  },
];

const Industries = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Industries We Serve
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                Solutions for{" "}
                <span className="gradient-text">Every Sector</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We understand that each industry has unique challenges and requirements. 
                Our expertise spans multiple sectors, delivering tailored solutions that address specific needs.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title} delay={(index % 4) * 100}>
                <IndustryCard {...industry} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Domain Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Why Industry Knowledge Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Technology solutions that truly work require more than technical expertise. 
                  They demand a deep understanding of industry-specific workflows, regulations, 
                  and customer expectations.
                </p>
                <p>
                  At Arthvatech, we invest time in understanding your industry's nuances. This enables 
                  us to anticipate challenges, incorporate best practices, and deliver solutions that 
                  feel purpose-built for your sector.
                </p>
                <p>
                  From healthcare compliance requirements to fintech security standards, we bring the 
                  domain knowledge needed to create solutions that meet industry standards while exceeding 
                  your expectations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "8+", label: "Industries Served" },
                  { value: "100+", label: "Sector Projects" },
                  { value: "50+", label: "Domain Experts" },
                  { value: "99%", label: "Compliance Rate" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-card rounded-xl p-6 border border-border text-center hover-lift"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our expertise extends beyond the sectors listed. Reach out to discuss how we can 
                address your industry's unique technology challenges.
              </p>
              <Button asChild size="lg" className="gradient-bg hover:opacity-90">
                <Link to="/contact">
                  Let's Talk
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Industries;
