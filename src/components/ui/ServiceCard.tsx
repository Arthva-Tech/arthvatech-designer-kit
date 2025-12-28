import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string;
}

const ServiceCard = ({ icon: Icon, title, description, benefits }: ServiceCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl p-6 border border-border hover-lift cursor-pointer overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className="relative w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>

      {/* Content */}
      <h3 className="relative text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="relative text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Benefits - shown on hover */}
      <div className="relative overflow-hidden">
        <p className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {benefits}
        </p>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

export default ServiceCard;
