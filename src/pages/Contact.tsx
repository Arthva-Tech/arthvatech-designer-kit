import { useState } from "react";
import { Send, CheckCircle, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Get in Touch
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                Let's Start a{" "}
                <span className="gradient-text">Conversation</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? Questions about our services? We'd love to hear from you. 
                Reach out and let's explore how we can help transform your business.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Info */}
            <AnimatedSection>
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Ready to Transform Your Ideas into Reality?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking to build a new application, modernize existing systems, 
                  or explore how technology can improve your operations, our team is here to help. 
                  Fill out the form and we'll respond promptly to discuss your needs.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quick Response</h3>
                      <p className="text-sm text-muted-foreground">
                        We aim to respond to all inquiries within 24 business hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us Directly</h3>
                      <p className="text-sm text-muted-foreground">
                        contact@arthvatech.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Side - Form */}
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. We'll be in touch soon.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-bg hover:opacity-90 transition-opacity h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="w-5 h-5" />
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Quick answers to common questions about working with Arthvatech.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope and complexity. A simple web application might take 4-8 weeks, while enterprise solutions can span several months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                q: "Do you work with startups and small businesses?",
                a: "Absolutely! We work with organizations of all sizes, from early-stage startups to established enterprises. We tailor our approach and solutions to fit your budget and requirements.",
              },
              {
                q: "What technologies do you specialize in?",
                a: "We're technology-agnostic and choose the best tools for each project. Our expertise includes React, Node.js, Python, cloud platforms (AWS, Azure, GCP), mobile development frameworks, and emerging technologies like AI/ML.",
              },
              {
                q: "Do you provide ongoing support after project completion?",
                a: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. We can discuss support options that fit your needs during our consultation.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
