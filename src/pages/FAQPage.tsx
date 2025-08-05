import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-fresh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our cleaning services, 
              pricing, and policies. Can't find what you're looking for? Contact us!
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
};

export default FAQPage;