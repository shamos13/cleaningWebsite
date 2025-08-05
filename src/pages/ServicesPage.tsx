import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-fresh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Cleaning <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional cleaning solutions tailored to your needs. From regular 
              maintenance to specialized deep cleaning, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;