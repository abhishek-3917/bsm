
import { Search, Users, Target, PenTool, BarChart3, Mail, Smartphone, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingCursor from '@/components/FloatingCursor';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Boost your organic visibility and drive qualified traffic with our comprehensive SEO strategies.',
      features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audits', 'Link Building', 'Local SEO'],
      price: 'Starting at $1,500/month',
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build engaging communities and drive brand awareness across all major social platforms.',
      features: ['Content Strategy & Creation', 'Community Management', 'Paid Social Advertising', 'Influencer Partnerships', 'Analytics & Reporting'],
      price: 'Starting at $1,200/month',
    },
    {
      icon: Target,
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize ROI with targeted PPC campaigns across Google, Bing, and social media platforms.',
      features: ['Campaign Strategy & Setup', 'Ad Creation & Testing', 'Bid Management', 'Landing Page Optimization', 'Conversion Tracking'],
      price: 'Starting at $2,000/month',
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that engages your audience and drives meaningful conversions.',
      features: ['Content Strategy Development', 'Blog Writing & Management', 'Video Content Creation', 'Email Marketing', 'Content Distribution'],
      price: 'Starting at $1,800/month',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Gain deep insights into your marketing performance with comprehensive analytics and reporting.',
      features: ['Custom Dashboard Setup', 'Performance Tracking', 'ROI Analysis', 'Competitive Analysis', 'Monthly Strategy Reviews'],
      price: 'Starting at $800/month',
    },
    {
      icon: Globe,
      title: 'Web Development & Design',
      description: 'Create stunning, conversion-optimized websites that drive results and enhance user experience.',
      features: ['Responsive Web Design', 'E-commerce Development', 'CRO Implementation', 'Performance Optimization', 'Ongoing Maintenance'],
      price: 'Starting at $5,000/project',
    },
  ];

  const additionalServices = [
    'Marketing Automation Setup',
    'Brand Identity & Design',
    'Online Reputation Management',
    'Conversion Rate Optimization',
    'Marketing Strategy Consulting',
    'Training & Workshops',
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business, goals, and current digital presence.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our team creates a customized digital marketing strategy tailored to your objectives.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy with precision, ensuring every detail is optimized for success.',
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring and optimization to maximize results and ROI.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <FloatingCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gold-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to elevate your brand, 
              drive growth, and deliver measurable results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-gold/50 transition-all duration-300 hover:shadow-xl animate-fade-in">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 gradient-gold rounded-full">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <p className="text-gold font-semibold">{service.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/contact">
                      <Button className="w-full gradient-gold hover:opacity-90">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions to complement your digital marketing strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-gold mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              How we deliver exceptional results for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-gold rounded-full mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-gold px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss which services are right for your business and create a custom strategy that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-3">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-3">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
