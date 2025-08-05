import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Leaf, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-cleaning.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional cleaning services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Professional 
              <span className="text-accent block">Cleaning Services</span>
              You Can Trust
            </h1>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Transform your space with TonyTosh Cleaning Services. We provide 
              top-quality residential and commercial cleaning with a satisfaction 
              guarantee. Experience the difference of a truly clean environment.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-accent" />
                <span className="text-sm">Eco-Friendly Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent" />
                <span className="text-sm">Trained Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm">Flexible Scheduling</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:scale-105 active:scale-95 text-center"
              >
                Book a Cleaning
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95 text-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Right column - Stats or additional info */}
          <div className="lg:text-right animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose TonyTosh?</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/80">Happy Customers</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">5★</div>
                  <div className="text-white/80">Average Rating</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-white/80">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;