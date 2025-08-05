import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-fresh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Customer <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear what our satisfied customers have to say about our cleaning services. 
              Their trust and satisfaction drive our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;