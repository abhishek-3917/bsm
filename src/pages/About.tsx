
import { Users, Target, Award, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingCursor from '@/components/FloatingCursor';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that directly impact your bottom line.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships based on trust and transparency.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends to provide cutting-edge solutions for your business.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy to execution.',
    },
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: '10+ years in digital marketing with expertise in scaling businesses.',
    },
    {
      name: 'Sarah Kim',
      role: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b5c4c6f3?w=400&h=400&fit=crop&crop=face',
      description: 'Strategic marketing expert with a passion for data-driven campaigns.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Award-winning creative professional with 8+ years of brand experience.',
    },
    {
      name: 'Emily Chen',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Full-stack developer specializing in marketing technology solutions.',
    },
  ];

  const achievements = [
    'Certified Google Premier Partner',
    'Facebook Marketing Partner',
    'HubSpot Gold Partner',
    'Winner of Digital Marketing Excellence Award 2023',
    'ISO 27001 Certified for Data Security',
    'Listed in Top 50 Digital Agencies by Marketing Weekly',
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
              About <span className="text-gradient-gold">Brandskulpt Media</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're a team of passionate digital marketing experts dedicated to helping businesses 
              thrive in the digital landscape through innovative strategies and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, DigitalPro emerged from a simple belief: every business deserves 
                access to world-class digital marketing expertise. What started as a small team of 
                three digital enthusiasts has grown into a full-service agency serving clients globally.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We've helped over 500 businesses transform their digital presence, generating millions 
                in additional revenue through strategic campaigns, innovative solutions, and relentless 
                focus on results.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push boundaries, embrace new technologies, and deliver 
                exceptional value to our clients across various industries.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Our team collaborating" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-gold rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented individuals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 group animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gold font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300">
              Recognition and certifications that demonstrate our expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 animate-fade-in">
                <CheckCircle className="h-6 w-6 text-gold flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-gold px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your digital presence and drive real results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-gold hover:bg-gray-100 text-lg px-8 py-3">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
