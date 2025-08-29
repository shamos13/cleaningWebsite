import React from 'react';
import { Home, Building, Sparkles, Truck, Sofa, Bug } from 'lucide-react';
import residentialImage from '@/assets/residential-cleaning.jpg';
import commercialImage from '@/assets/commercial-cleaning.jpg';
import deepCleaning from '@/assets/deep-cleaning.jpg';
import movers from '@/assets/movers.jpg';
import fumigation from '@/assets/fumigation.jpg'
import carpet from '@/assets/carpet.jpg'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services including kitchens, bathrooms, living areas, and bedrooms. Perfect for busy families.',
      icon: Home,
      image: residentialImage,
      features: ['Regular, weekly & monthly cleaning', 'Kitchen & bathroom deep clean', 'Dusting & vacuuming', 'Window cleaning','Pool Scrubbing and cleaning']
    },
    {
      id: 2,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning to maintain a healthy and productive work environment.',
      icon: Building,
      image: commercialImage,
      features: ['Office spaces', 'Restroom sanitization', 'Floor maintenance', 'Trash removal','Special Events/After party cleaning']
    },
    {
      id: 3,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service that reaches every corner, perfect for move-ins, special occasions, or seasonal cleaning.',
      icon: Sparkles,
      image: deepCleaning,
      features: ['Detailed appliance cleaning', 'Baseboards & trim', 'Tank Cleaning', 'Cabinet interiors','Floor Restoration and Maintenance']
    },
    {
      id: 4,
      title: 'Move-In/Move-Out & Post Construction Cleaning',
      description: 'Comprehensive cleaning for transitions, ensuring your new home is spotless or helping you get your deposit back.',
      icon: Truck,
      image: movers,
      features: ['Complete property cleaning','Cabinet cleaning', 'Floor deep clean']
    },
    {
      id: 5,
      title: 'Carpet & Upholstery',
      description: 'Professional carpet and furniture cleaning using advanced equipment and eco-friendly cleaning solutions.',
      icon: Sofa,
      image: carpet,
      features: ['Steam cleaning', 'Stain removal', 'Odor elimination', 'Fabric protection']
    },
    {
      id: 6,
      title: 'Fumigation & Pest Control',
      description: 'Complete pest control solutions to keep your property safe and pest-free with environmentally conscious methods.',
      icon: Bug,
      image: fumigation,
      features: ['Comprehensive inspection', 'Safe treatment methods', 'Prevention strategies', 'Follow-up service']
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Cleaning <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From regular home maintenance to specialized commercial cleaning, 
            we offer comprehensive solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="card-fresh hover-lift animate-bounce-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image or Icon */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-primary-light">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <IconComponent className="h-20 w-20 text-primary" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Service Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <button className="w-full btn-outline text-sm py-2">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#C04846] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and personalized quote. 
              Let us help you maintain a clean, healthy environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-accent/90 hover:scale-105">
                Get Free Quote
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105">
                Call Now: +254724681055
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;