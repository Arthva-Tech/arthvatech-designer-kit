import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  GitBranch,
  Plug,
  Building,
  Lightbulb,
  TestTube,
  Wrench,
  Shield,
  BarChart3,
  Brain,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions designed to address your specific business challenges and streamline operations.",
    benefits: "Tailored to your needs • Scalable architecture • Full ownership",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with the latest technologies for optimal performance and user experience.",
    benefits: "Progressive Web Apps • SEO-optimized • Cross-browser compatible",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless experiences.",
    benefits: "iOS & Android • React Native • Flutter",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create intuitive digital experiences.",
    benefits: "User research • Prototyping • Accessibility-first",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Migration",
    description: "Strategic cloud adoption and migration services to modernize infrastructure and reduce operational costs.",
    benefits: "AWS • Azure • Google Cloud",
  },
  {
    icon: GitBranch,
    title: "DevOps Services",
    description: "Streamlined development and operations through automation, continuous integration, and deployment pipelines.",
    benefits: "CI/CD • Infrastructure as Code • Monitoring",
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description: "Robust API solutions that connect systems, enable data flow, and power seamless third-party integrations.",
    benefits: "REST • GraphQL • Microservices",
  },
  {
    icon: Building,
    title: "Enterprise Software Solutions",
    description: "Large-scale enterprise systems including ERP, CRM, and custom platforms for complex organizational needs.",
    benefits: "Scalable • Secure • Integration-ready",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting & Digital Transformation",
    description: "Strategic guidance to help organizations navigate digital change and leverage technology for competitive advantage.",
    benefits: "Strategy • Roadmapping • Change management",
  },
  {
    icon: TestTube,
    title: "Quality Assurance & Testing",
    description: "Comprehensive testing services ensuring your software is reliable, performant, and bug-free before launch.",
    benefits: "Automated testing • Performance testing • Security testing",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support Services",
    description: "Ongoing support and maintenance to keep your applications running smoothly and up-to-date.",
    benefits: "24/7 support options • Updates • Optimization",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with comprehensive security assessments, implementation, and monitoring.",
    benefits: "Audits • Penetration testing • Compliance",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics, visualization, and reporting solutions.",
    benefits: "Dashboards • Predictive analytics • Data warehousing",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Intelligent systems that automate processes, predict outcomes, and unlock new business possibilities.",
    benefits: "Natural language processing • Computer vision • Predictive models",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "End-to-end e-commerce solutions that drive sales, enhance customer experience, and scale with your business.",
    benefits: "Custom storefronts • Payment integration • Inventory management",
  },
];

const Services = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Services
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                Comprehensive{" "}
                <span className="gradient-text">IT Solutions</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From concept to deployment and beyond, we offer a full spectrum of technology services 
                to help your business thrive in the digital age.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={(index % 6) * 100}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                How We Deliver Excellence
              </h2>
              <p className="text-muted-foreground text-lg">
                A structured yet flexible approach that ensures quality outcomes and client satisfaction.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Discovery", desc: "Understanding your needs" },
              { step: "2", title: "Planning", desc: "Crafting the roadmap" },
              { step: "3", title: "Development", desc: "Building your solution" },
              { step: "4", title: "Testing", desc: "Ensuring quality" },
              { step: "5", title: "Launch & Support", desc: "Going live and beyond" },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs perfectly.
              </p>
              <Button asChild size="lg" className="gradient-bg hover:opacity-90">
                <Link to="/contact">
                  Discuss Your Project
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

export default Services;
