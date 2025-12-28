import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const IndustryCard = ({ icon: Icon, title, description }: IndustryCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl p-6 border border-border hover-lift text-center">
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default IndustryCard;
