import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Target } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Home = () => {
  const featuredProjects = [
    {
      id: '1',
      title: 'Skyline Residence',
      location: 'Manhattan, NY',
      year: '2024',
      category: 'Residential',
      image: project1,
      description: 'A luxury penthouse that redefines urban living with panoramic city views and cutting-edge smart home technology.',
      awards: ['Architecture Award 2024', 'Design Excellence'],
      area: '450 m²',
      featured: true,
    },
    {
      id: '2',
      title: 'Corporate Nexus',
      location: 'Downtown, CA',
      year: '2023',
      category: 'Commercial',
      image: project2,
      description: 'Modern office complex designed to foster collaboration and innovation in the heart of the business district.',
      awards: ['Green Building Award'],
      area: '2,800 m²',
    },
    {
      id: '3',
      title: 'Villa Serenity',
      location: 'Malibu, CA',
      year: '2024',
      category: 'Residential',
      image: project3,
      description: 'Coastal villa masterpiece blending indoor-outdoor living with sustainable architecture principles.',
      awards: ['Sustainable Design Award', 'Coastal Architecture Prize'],
      area: '650 m²',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Discover our most prestigious architectural achievements that showcase our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="luxury" size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-32 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Defining the Future of Architecture
                </h2>
                <p className="text-lg text-foreground-secondary leading-relaxed mb-6">
                  For over 15 years, we've been at the forefront of architectural innovation, creating spaces that inspire, function beautifully, and stand the test of time. Our award-winning team combines visionary design with sustainable practices.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  From luxury residences to iconic commercial spaces, we transform concepts into architectural masterpieces that define skylines and enhance communities worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-foreground-secondary">Awards</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">250+</div>
                  <div className="text-sm text-foreground-secondary">Projects</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-display text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-foreground-secondary">Years</div>
                </div>
              </div>

              <Button variant="premium" size="lg" className="group">
                Learn About Us
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-dark rounded-lg border border-border/50 p-6 flex items-end">
                  <div className="text-foreground">
                    <div className="font-display text-lg font-semibold mb-2">Sustainable Design</div>
                    <div className="text-sm text-foreground-secondary">Eco-conscious architecture for a better tomorrow</div>
                  </div>
                </div>
                <div className="aspect-[4/3] bg-card rounded-lg border border-border/50 overflow-hidden">
                  <img 
                    src={project2} 
                    alt="Our Process" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] bg-card rounded-lg border border-border/50 overflow-hidden">
                  <img 
                    src={project1} 
                    alt="Innovation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gradient-dark rounded-lg border border-border/50 p-6 flex items-end">
                  <div className="text-foreground">
                    <div className="font-display text-lg font-semibold mb-2">Innovation</div>
                    <div className="text-sm text-foreground-secondary">Pushing boundaries with cutting-edge technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Ready to Create Something
              <span className="block text-gradient">Extraordinary?</span>
            </h2>
            <p className="text-lg text-foreground-secondary">
              Let's collaborate to bring your architectural vision to life. 
              From concept to completion, we're here to exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl" className="group">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="premium" size="xl">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;