
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 animate-scale-in">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="p-2 gradient-gold rounded-lg group-hover:scale-110 transition-all duration-300 hover:rotate-12">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-gold">Brandskulpt media</span>
            </Link>
            <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
              Transforming businesses through innovative digital marketing strategies and cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-gold">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">SEO Optimization</span></li>
              <li><span className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">Social Media Marketing</span></li>
              <li><span className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">PPC Advertising</span></li>
              <li><span className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer">Content Marketing</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h3 className="text-lg font-semibold mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 hover:text-gold transition-colors duration-300 group">
                <Mail className="h-4 w-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400">info@brandskulptmedia.com</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-gold transition-colors duration-300 group">
                <Phone className="h-4 w-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-gold transition-colors duration-300 group">
                <MapPin className="h-4 w-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400">123 Digital Street, Tech City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © 2024 Brandskulpt media. All rights reserved. | Crafted with ❤️ for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
