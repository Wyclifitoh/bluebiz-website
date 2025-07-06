import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  badge?: {
    icon: React.ElementType; 
    text: string;
  };
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  badge, 
  title, 
  subtitle, 
  className = "" 
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {badge && (
        <div className="inline-flex items-center px-4 py-2 bg-primary-orange/10 text-primary-orange rounded-full text-sm font-medium mb-6">
          <badge.icon className="w-4 h-4 mr-2" />
          {badge.text}
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl font-bold text-dark-grey mb-6">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-xl text-dark-grey/70 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;