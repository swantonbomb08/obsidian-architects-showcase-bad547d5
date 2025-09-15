import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  const offices = [
    {
      city: 'New York',
      address: '123 Architecture Avenue, Design District, NY 10001',
      phone: '+1 (234) 567-8900',
      email: 'ny@luxarch.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    },
    {
      city: 'London',
      address: '456 Design Square, Shoreditch, London EC2A 4DN',
      phone: '+44 20 7123 4567',
      email: 'london@luxarch.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT'
    },
    {
      city: 'Dubai',
      address: '789 Innovation Boulevard, DIFC, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'dubai@luxarch.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              Let's Create Together
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              Ready to bring your architectural vision to life? We'd love to discuss your project and explore how we can make it extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Start Your Project
                </h2>
                <p className="text-foreground-secondary">
                  Tell us about your vision, and we'll get back to you within 24 hours with a personalized consultation plan.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-input-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-input-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="interior">Interior Design</option>
                      <option value="renovation">Renovation</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-input-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-plus">$1M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-input-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="1-year">Within 1 year</option>
                    <option value="planning">Still planning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-input-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Describe your vision, requirements, and any specific needs you have for this project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="luxury"
                  size="lg"
                  className="w-full group"
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </div>
                  ) : formStatus === 'success' ? (
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent Successfully!
                    </div>
                  ) : formStatus === 'error' ? (
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Try Again
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Send Message
                      <Send className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  )}
                </Button>

                {formStatus === 'success' && (
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                    <p className="text-success text-sm">
                      Thank you for your message! We'll get back to you within 24 hours with a personalized consultation plan.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Get In Touch
                </h2>
                <p className="text-foreground-secondary mb-8">
                  Prefer to reach out directly? We're available through multiple channels and have offices worldwide.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="space-y-4 p-6 bg-background-secondary rounded-lg border border-border/50">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <a 
                      href="mailto:hello@luxarch.com" 
                      className="text-foreground-secondary hover:text-primary transition-colors"
                    >
                      hello@luxarch.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <a 
                      href="tel:+1234567890" 
                      className="text-foreground-secondary hover:text-primary transition-colors"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="p-6 bg-card rounded-lg border border-border/50 luxury-hover">
                      <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                        {office.city}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground-secondary">
                            {office.address}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <a 
                            href={`tel:${office.phone}`} 
                            className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <a 
                            href={`mailto:${office.email}`} 
                            className="text-sm text-foreground-secondary hover:text-primary transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-sm text-foreground-secondary">
                            {office.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Quick answers to common questions about our design process and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  What's your typical project timeline?
                </h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  Project timelines vary based on scope and complexity. Residential projects typically take 3-8 months, while commercial projects can range from 6-18 months.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Do you work internationally?
                </h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  Yes, we have offices in New York, London, and Dubai, and we work on projects worldwide. We're experienced in navigating international building codes and regulations.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  What services do you offer?
                </h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  We provide complete architectural services including design, planning, project management, interior architecture, and consultation for residential and commercial projects.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  How do you ensure sustainability?
                </h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  Sustainability is core to our design philosophy. We use eco-friendly materials, energy-efficient systems, and design principles that minimize environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;