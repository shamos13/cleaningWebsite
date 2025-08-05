import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'TonyTosh Cleaning Services has been a game-changer for our family. Their team is professional, thorough, and always leaves our home spotless. We\'ve been using their weekly service for over a year now.',
      rating: 5,
      avatar: 'S'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'As a business owner, maintaining a clean office environment is crucial. TonyTosh\'s commercial cleaning service is reliable, efficient, and their staff is always courteous. Highly recommended!',
      rating: 5,
      avatar: 'M'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'I manage several rental properties and TonyTosh handles all our move-out cleanings. They consistently deliver exceptional results, helping us get properties ready for new tenants quickly.',
      rating: 5,
      avatar: 'E'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Homeowner',
      content: 'The deep cleaning service exceeded our expectations. Every corner of our house was meticulously cleaned. The team used eco-friendly products, which was important to us with young children.',
      rating: 5,
      avatar: 'D'
    },
    {
      id: 5,
      name: 'Lisa Williams',
      role: 'Office Manager',
      content: 'Professional, punctual, and thorough. Our office has never looked better since we started using TonyTosh Cleaning Services. The staff is friendly and respects our workspace.',
      rating: 5,
      avatar: 'L'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-accent fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our cleaning services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="card-fresh hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional testimonials for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mt-8">
          {testimonials.slice(3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="card-fresh hover-lift animate-slide-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-primary/30" />
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-fresh rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Satisfied Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                <div className="text-muted-foreground">Average Rating</div>
                <div className="flex justify-center mt-2 space-x-1">
                  {renderStars(5)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the TonyTosh difference today. Get your free quote and see 
            why our customers trust us with their cleaning needs.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;