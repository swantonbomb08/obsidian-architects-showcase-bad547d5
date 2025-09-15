import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-architecture.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.5;
        heroRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 fade-in animate">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-background-secondary/80 backdrop-blur-sm rounded-full border border-border/50 text-sm font-medium text-foreground-secondary">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Award-Winning Architecture Firm
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight">
              Crafting
              <span className="block text-gradient">Architectural</span>
              Excellence
            </h1>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              We transform visionary concepts into breathtaking architectural realities. 
              From luxury residences to iconic commercial spaces, our designs define the future of living.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="luxury" size="xl" className="group">
              Explore Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button variant="hero" size="xl" className="group">
              <Play className="mr-2 w-5 h-5" />
              Watch Showreel
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/30">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">250+</div>
              <div className="text-sm text-foreground-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-foreground-secondary">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-foreground-secondary">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-xs text-foreground-secondary mb-2">Scroll to explore</div>
        <ArrowDown className="w-5 h-5 text-foreground-secondary animate-bounce mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;