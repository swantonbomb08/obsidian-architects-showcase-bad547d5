import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, Users, Target, ArrowRight, Quote, Linkedin, Mail } from 'lucide-react';
import project2 from '@/assets/project-2.jpg';

const About = () => {
  const team = [
    {
      name: 'Michael Rodriguez',
      role: 'Principal Architect & Founder',
      description: 'Visionary architect with 20+ years of experience in luxury residential and commercial design.',
      image: project2,
    },
    {
      name: 'Sarah Chen',
      role: 'Senior Design Director',
      description: 'Award-winning designer specializing in sustainable architecture and urban planning.',
      image: project2,
    },
    {
      name: 'David Thompson',
      role: 'Project Manager',
      description: 'Expert in project coordination and client relations with international experience.',
      image: project2,
    },
    {
      name: 'Elena Kowalski',
      role: 'Interior Architect',
      description: 'Interior design specialist focused on creating harmonious living and working spaces.',
      image: project2,
    },
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Foundation',
      description: 'LUXARCH was established with a vision to redefine architectural excellence.',
    },
    {
      year: '2012',
      title: 'First Award',
      description: 'Received our first Architecture Excellence Award for the Riverside Complex project.',
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Opened offices in London and Dubai, expanding our global presence.',
    },
    {
      year: '2018',
      title: 'Sustainability Focus',
      description: 'Launched our Green Architecture initiative, committing to sustainable design practices.',
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Integrated AR/VR technologies into our design process for enhanced client experiences.',
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognized as one of the top 10 architecture firms globally by Architectural Digest.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, no matter the scale or complexity.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Pushing boundaries through cutting-edge technology and creative solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients, communities, and industry leaders.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              About LUXARCH
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              We are passionate architects, designers, and visionaries committed to creating spaces that inspire, function beautifully, and stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-foreground-secondary leading-relaxed">
                <p>
                  Founded in 2009, LUXARCH began with a simple yet ambitious vision: to redefine what architecture could be. We believed that great design shouldn't just serve function—it should elevate the human experience and contribute positively to the world around us.
                </p>
                <p>
                  Over the past 15 years, we've grown from a small studio to an internationally recognized firm, but our core values remain unchanged. We approach each project with fresh eyes, bringing together innovative design thinking, sustainable practices, and meticulous attention to detail.
                </p>
                <p>
                  Today, our portfolio spans luxury residences, cutting-edge commercial spaces, and transformative urban planning projects across five continents. We've earned over 50 prestigious awards, but our greatest achievement is the trust our clients place in us to bring their dreams to life.
                </p>
              </div>
              <Button variant="luxury" size="lg" className="group">
                View Our Portfolio
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-card rounded-lg border border-border/50 overflow-hidden">
                  <img 
                    src={project2} 
                    alt="Our Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-gradient-dark rounded-lg border border-border/50 p-6 flex items-end">
                  <div className="text-foreground">
                    <div className="font-display text-lg font-semibold mb-2">Global Presence</div>
                    <div className="text-sm text-foreground-secondary">Offices in New York, London, and Dubai</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] bg-gradient-dark rounded-lg border border-border/50 p-6 flex items-end">
                  <div className="text-foreground">
                    <div className="font-display text-lg font-semibold mb-2">Sustainable Future</div>
                    <div className="text-sm text-foreground-secondary">100% carbon neutral by 2025</div>
                  </div>
                </div>
                <div className="aspect-square bg-card rounded-lg border border-border/50 overflow-hidden">
                  <img 
                    src={project2} 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              These core principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center space-y-6 p-8 bg-background rounded-lg border border-border/50 luxury-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Key milestones that have shaped our growth and evolution as a leading architecture firm.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-border"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 md:-ml-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-card p-6 rounded-lg border border-border/50 luxury-hover">
                      <div className="font-display text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-foreground-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              The talented architects and designers behind our award-winning projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="text-center space-y-4 group"
              >
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2 justify-center">
                      <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background text-foreground">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background text-foreground">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium text-sm">
                    {member.role}
                  </div>
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Quote className="w-16 h-16 text-primary mx-auto" />
            <blockquote className="font-display text-2xl md:text-4xl font-medium text-foreground leading-relaxed">
              "Architecture is not just about creating buildings; it's about creating experiences, emotions, and connections that enrich human life."
            </blockquote>
            <div className="text-foreground-secondary">
              <div className="font-semibold">Michael Rodriguez</div>
              <div className="text-sm">Principal Architect & Founder</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;