
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target, Award, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingCursor from '@/components/FloatingCursor';

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies.',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand loyalty across all social media platforms.',
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns that convert visitors into customers.',
    },
    {
      icon: Award,
      title: 'Content Marketing',
      description: 'Create compelling content that tells your story and drives meaningful engagement.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '98%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      text: 'Brandskulpt media transformed our online presence. Our traffic increased by 300% in just 6 months!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      text: 'The team is incredibly professional and delivers results. Highly recommend their services.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      company: 'StartupFlow',
      text: 'Outstanding work on our social media campaigns. We saw immediate engagement growth.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <FloatingCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gold-light/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Elevate Your
              <span className="text-gradient-gold animate-pulse"> Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in hover:text-gray-700 transition-colors duration-300" style={{ animationDelay: '200ms' }}>
              Transform your business with cutting-edge digital marketing strategies that drive results, 
              increase engagement, and accelerate growth in today's competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '400ms' }}>
              <Button size="lg" className="gradient-gold hover:opacity-90 hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-lg px-8 py-3 group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-lg px-8 py-3">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-gradient-gold transition-all duration-300">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-gold/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-500 group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-gold rounded-full mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-gradient-gold transition-all duration-300">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-700 transition-colors duration-300">
              Success stories from businesses we've helped transform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in group" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic group-hover:text-gray-700 transition-colors duration-300">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-gold transition-colors duration-300">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-gold px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 hover:text-white transition-colors duration-300">
            Join hundreds of successful businesses that trust Brandskulpt media for their marketing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100 hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-lg px-8 py-3 group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gold hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-lg px-8 py-3">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
