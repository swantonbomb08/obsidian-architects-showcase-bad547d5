import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filters = ['All', 'Residential', 'Commercial', 'Interior', 'Urban Planning'];

  const projects = [
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
    {
      id: '4',
      title: 'Urban Loft Collection',
      location: 'Brooklyn, NY',
      year: '2023',
      category: 'Residential',
      image: project1,
      description: 'Contemporary loft spaces that celebrate industrial heritage while providing modern luxury amenities.',
      area: '120-180 m²',
    },
    {
      id: '5',
      title: 'Tech Campus Hub',
      location: 'Seattle, WA',
      year: '2024',
      category: 'Commercial',
      image: project2,
      description: 'Innovative workspace designed to inspire creativity and collaboration in the tech industry.',
      awards: ['Innovation in Design Award'],
      area: '5,200 m²',
    },
    {
      id: '6',
      title: 'Minimalist Retreat',
      location: 'Aspen, CO',
      year: '2023',
      category: 'Residential',
      image: project3,
      description: 'Mountain retreat that embraces minimalism while maximizing connection to the natural landscape.',
      area: '320 m²',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              Our Portfolio
            </h1>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Explore our collection of award-winning architectural projects that span residential, commercial, and urban planning initiatives across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'luxury' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="transition-all duration-300"
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* View Mode & Results Count */}
            <div className="flex items-center gap-4">
              <div className="text-sm text-foreground-secondary">
                Showing {filteredProjects.length} projects
              </div>
              <div className="flex border border-border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none border-r"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="fade-in animate"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <ProjectCard 
                  {...project}
                  featured={viewMode === 'list' ? false : project.featured}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-foreground-secondary">
                Try adjusting your filters to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Load More Section */}
      {filteredProjects.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Button variant="premium" size="lg">
              Load More Projects
            </Button>
            <div className="mt-4 text-sm text-foreground-muted">
              Showing 6 of 42 projects
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;