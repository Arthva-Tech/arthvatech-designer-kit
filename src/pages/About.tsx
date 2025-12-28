import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, Users, Award, Heart, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore emerging technologies and creative approaches to deliver forward-thinking solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparency and honesty guide every interaction, building trust that lasts beyond project completion.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, from code quality to client communication.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "True partnership with our clients ensures solutions that genuinely address their business needs.",
  },
];

const approach = [
  {
    step: "01",
    title: "Understand",
    description: "We begin by deeply understanding your business goals, challenges, and the outcomes you envision.",
  },
  {
    step: "02",
    title: "Strategize",
    description: "Our experts craft a tailored roadmap that aligns technology solutions with your strategic objectives.",
  },
  {
    step: "03",
    title: "Build",
    description: "Using agile methodologies, we develop robust solutions with regular feedback loops and quality checkpoints.",
  },
  {
    step: "04",
    title: "Scale",
    description: "We design for growth, ensuring your solutions can evolve and expand as your business succeeds.",
  },
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Arthvatech
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                Empowering Businesses Through{" "}
                <span className="gradient-text">Technology</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Arthvatech is a forward-thinking IT services company dedicated to helping organizations 
                harness the power of technology to achieve their goals and drive meaningful growth.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <Zap className="w-24 h-24 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold gradient-text">Innovation at Core</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                A Team Passionate About Technology
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between complex technology and practical business solutions, 
                  Arthvatech has grown into a trusted partner for organizations seeking digital excellence.
                </p>
                <p>
                  Our team of skilled professionals brings together diverse expertise across software development, 
                  cloud architecture, mobile applications, and emerging technologies like AI and machine learning.
                </p>
                <p>
                  We believe that technology should simplify, not complicate. Every solution we create is designed 
                  with user experience and business value at its heart, ensuring that innovation translates into 
                  real-world results.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border h-full">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with innovative, reliable, and scalable technology solutions 
                  that drive efficiency, foster growth, and create lasting competitive advantages in an 
                  ever-evolving digital landscape.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-card rounded-2xl p-8 md:p-10 border border-border h-full">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized globally as a premier technology partner known for innovation, excellence, 
                  and unwavering commitment to client success. We envision a future where every business, 
                  regardless of size, can leverage world-class technology.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">What Guides Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                These principles shape our culture, guide our decisions, and define how we work with every client.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border border-border hover-lift text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Our Approach
              </h2>
              <p className="text-muted-foreground text-lg">
                A proven methodology that ensures successful outcomes and client satisfaction.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <div className="relative bg-card rounded-xl p-6 border border-border h-full">
                  <span className="text-5xl font-bold gradient-text opacity-30">{item.step}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
              <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how Arthvatech can help transform your business with innovative technology solutions.
              </p>
              <Button asChild size="lg" className="gradient-bg hover:opacity-90">
                <Link to="/contact">
                  Start a Conversation
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

export default About;
