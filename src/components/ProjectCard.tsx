import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, MapPin, Calendar, Award } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  description: string;
  awards?: string[];
  area?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  location,
  year,
  category,
  image,
  description,
  awards,
  area,
  featured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-card rounded-lg border border-border/50 transition-all duration-500 luxury-hover ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground-secondary border border-border/50">
          {category}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground border border-primary/50">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Project Details */}
        <div className="flex flex-wrap gap-4 text-xs text-foreground-muted">
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {year}
          </div>
          {area && (
            <div className="flex items-center">
              <span className="w-3 h-3 mr-1 text-xs">□</span>
              {area}
            </div>
          )}
        </div>

        {/* Awards */}
        {awards && awards.length > 0 && (
          <div className="flex items-center flex-wrap gap-2">
            <Award className="w-4 h-4 text-primary" />
            <div className="flex flex-wrap gap-1">
              {awards.slice(0, 2).map((award, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                >
                  {award}
                </span>
              ))}
              {awards.length > 2 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                  +{awards.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action */}
        <div className="pt-2">
          <Button
            variant="minimal"
            className={`group/btn transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            View Project
            <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;