import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Users, Leaf, Award, Clock, CheckCircle } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'We build lasting relationships with our clients through consistent, dependable service and transparent communication.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Approach',
      description: 'We use environmentally safe products and practices to protect your family, pets, and our planet.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality means we never compromise on standards and always strive for perfection.'
    },
    {
      icon: Clock,
      title: 'Flexible Service',
      description: 'We work around your schedule with flexible timing and customized cleaning solutions.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Customers' },
    { number: '3+', label: 'Years of Service' },
    { number: '5.0', label: 'Average Rating' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-fresh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">TonyTosh Cleaning</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in creating clean, healthy, and beautiful spaces 
              for homes and businesses across Nairobi.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Mission Content */}
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At TonyTosh Cleaning Services, our mission is to provide exceptional 
                cleaning services that enhance the quality of life for our clients. 
                We believe that a clean environment is fundamental to health, 
                productivity, and peace of mind.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded with a commitment to excellence and customer satisfaction, 
                we have built our reputation on trust, reliability, and attention 
                to detail. Every cleaning job, whether big or small, receives our 
                full attention and professional expertise.
              </p>
              
              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground font-medium">Professional, trained, and insured staff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground font-medium">Eco-friendly cleaning products and methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground font-medium">100% satisfaction guarantee on all services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground font-medium">Flexible scheduling to fit your needs</span>
                </div>
              </div>
            </div>

            {/* Team Image */}
            <div className="animate-slide-up">
              <div className="relative">
                <img 
                  src={teamPhoto} 
                  alt="TonyTosh Cleaning Team" 
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="card-fresh text-center hover-lift animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="text-accent">Professional Team</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Our experienced team is the heart of our success. Each member is 
              carefully selected, thoroughly trained, and committed to delivering 
              exceptional service.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Trained Professionals</h3>
                  <p className="text-white/80">All team members undergo comprehensive training and background checks.</p>
                </div>
                <div>
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Insured & Bonded</h3>
                  <p className="text-white/80">Your property is protected with full insurance coverage.</p>
                </div>
                <div>
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Quality Focused</h3>
                  <p className="text-white/80">We maintain the highest standards in every cleaning job.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience the TonyTosh Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of satisfied customers who trust us with their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get Your Free Quote
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Call: +254724681055
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;