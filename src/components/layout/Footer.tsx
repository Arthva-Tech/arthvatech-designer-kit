import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Software Development", path: "/services" },
    { name: "Cloud Solutions", path: "/services" },
    { name: "Mobile Apps", path: "/services" },
    { name: "IT Consulting", path: "/services" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="container-custom py-16">
        <div className="gradient-bg rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Partner with Arthvatech to unlock innovative IT solutions tailored to your unique needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-6 py-3 rounded-lg hover:bg-background/90 transition-colors"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 border-t border-background/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logoSvg} alt="Arthvatech" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Delivering innovative IT solutions that empower businesses to thrive in the digital age.
            </p>
            <a
              href="mailto:contact@arthvatech.com"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
            >
              <Mail size={16} />
              contact@arthvatech.com
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-background mb-4">Stay Updated</h3>
            <p className="text-background/70 text-sm mb-4">
              Get the latest insights on technology trends and innovations.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 text-sm focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="p-2 rounded-lg gradient-bg hover:opacity-90 transition-opacity"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom py-6 border-t border-background/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Arthvatech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
