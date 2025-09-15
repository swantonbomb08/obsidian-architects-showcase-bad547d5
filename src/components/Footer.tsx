import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-sm"></div>
              <span className="font-display text-xl font-semibold text-foreground">
                LUXARCH
              </span>
            </Link>
            <p className="text-foreground-secondary leading-relaxed">
              Crafting architectural excellence that defines the future of living. 
              Award-winning designs that transform visionary concepts into reality.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              {[
                'Residential Architecture',
                'Commercial Design',
                'Interior Architecture',
                'Urban Planning',
                'Renovation Projects',
                'Consultancy'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/portfolio" 
                    className="text-foreground-secondary hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Careers', path: '/careers' },
                { name: 'Press', path: '/press' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-foreground-secondary hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-foreground-secondary text-sm">
                    123 Architecture Avenue<br />
                    Design District, NY 10001<br />
                    United States
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+1234567890" 
                  className="text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:hello@luxarch.com" 
                  className="text-foreground-secondary hover:text-primary transition-colors duration-300"
                >
                  hello@luxarch.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button variant="luxury" className="w-full group">
                Start Your Project
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                Stay Updated
              </h4>
              <p className="text-foreground-secondary">
                Get the latest architectural insights and project updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-input-border rounded-md text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="luxury">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-foreground-muted">
            © 2024 LUXARCH. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link 
              to="/privacy" 
              className="text-foreground-muted hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-foreground-muted hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;