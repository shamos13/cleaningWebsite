import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Residential Cleaning',
    'Commercial Cleaning', 
    'Deep Cleaning',
    'Move-In/Move-Out',
    'Carpet Cleaning',
    'Pest Control'
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">
                TonyTosh <span className="text-accent">Cleaning</span>
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Professional cleaning services you can trust. We provide top-quality 
              residential and commercial cleaning with a satisfaction guarantee.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/90">+254724681055</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/90">tonytosh90@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/90">Eldoret, Kenya</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-white/80 hover:text-accent transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & CTA */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Business Hours</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-white/90">Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div className="text-white/90">Sat: 9:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
            
            {/* Customer Rating */}
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">5.0</span>
              </div>
              <p className="text-white/80 text-sm">500+ Happy Customers</p>
            </div>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-accent/90 hover:scale-105 inline-block text-center w-full"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © {currentYear} TonyTosh Cleaning Services. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-white/80">Licensed & Insured</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">100% Satisfaction Guarantee</span>
              <span className="text-white/80">•</span>
              <span className="text-white/80">Eco-Friendly Products</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;