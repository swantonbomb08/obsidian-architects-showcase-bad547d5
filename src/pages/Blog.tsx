import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag,
  Search,
  User,
  TrendingUp
} from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Architecture', 'Design Trends', 'Sustainability', 'Technology', 'Case Studies'];

  const posts = [
    {
      id: '1',
      title: 'The Future of Sustainable Architecture: Trends Shaping 2024',
      excerpt: 'Exploring innovative approaches to eco-friendly design and how they\'re revolutionizing modern architecture.',
      image: project1,
      author: 'Sarah Chen',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Sustainability',
      featured: true,
      tags: ['Green Building', 'Innovation', 'Future Trends'],
    },
    {
      id: '2',
      title: 'Biophilic Design: Bringing Nature Into Modern Spaces',
      excerpt: 'How incorporating natural elements in architecture can improve well-being and create more harmonious living environments.',
      image: project2,
      author: 'Michael Rodriguez',
      date: '2024-03-12',
      readTime: '6 min read',
      category: 'Design Trends',
      tags: ['Biophilic', 'Wellness', 'Interior Design'],
    },
    {
      id: '3',
      title: 'Smart Homes: Integrating Technology in Luxury Residences',
      excerpt: 'The latest innovations in home automation and how they seamlessly blend with sophisticated architectural design.',
      image: project3,
      author: 'David Thompson',
      date: '2024-03-10',
      readTime: '10 min read',
      category: 'Technology',
      tags: ['Smart Homes', 'Technology', 'Luxury'],
    },
    {
      id: '4',
      title: 'Case Study: Skyline Residence - A Vision Realized',
      excerpt: 'Behind the scenes look at our award-winning Manhattan penthouse project and the challenges we overcame.',
      image: project1,
      author: 'Elena Kowalski',
      date: '2024-03-08',
      readTime: '12 min read',
      category: 'Case Studies',
      tags: ['Case Study', 'Residential', 'New York'],
    },
    {
      id: '5',
      title: 'Minimalism in Modern Architecture: Less is More',
      excerpt: 'Exploring how minimalist principles create powerful architectural statements and enhance user experience.',
      image: project2,
      author: 'Sarah Chen',
      date: '2024-03-05',
      readTime: '7 min read',
      category: 'Architecture',
      tags: ['Minimalism', 'Modern Design', 'Philosophy'],
    },
    {
      id: '6',
      title: 'Urban Planning for the Future: Creating Livable Cities',
      excerpt: 'How thoughtful urban design can address climate change, population growth, and quality of life challenges.',
      image: project3,
      author: 'Michael Rodriguez',
      date: '2024-03-03',
      readTime: '9 min read',
      category: 'Architecture',
      tags: ['Urban Planning', 'Future Cities', 'Sustainability'],
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              Architecture Insights
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              Explore the latest trends, innovations, and stories from the world of architecture and design.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-input-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'luxury' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'All' && searchTerm === '' && (
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Featured Article
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-foreground-muted">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-foreground-secondary leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{featuredPost.author}</div>
                        <div className="text-sm text-foreground-muted">Senior Architect</div>
                      </div>
                    </div>
                    
                    <Button variant="luxury" className="group">
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-20 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-foreground-secondary">
              Stay updated with insights from our expert team of architects and designers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-card rounded-lg border border-border/50 overflow-hidden luxury-hover group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-foreground-muted">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-2">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm text-foreground-secondary">{post.author}</span>
                    </div>
                    
                    <Button variant="minimal" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 pt-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-foreground-secondary">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Stay In The Loop
            </h2>
            <p className="text-lg text-foreground-secondary">
              Subscribe to our newsletter and get the latest architecture insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-input-border rounded-lg text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="luxury" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;