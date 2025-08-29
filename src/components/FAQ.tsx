import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What cleaning services do you offer?',
      answer: 'We offer comprehensive cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, carpet & upholstery cleaning, and fumigation & pest control. Our services are tailored to meet your specific needs.'
    },
    {
      question: 'Are your cleaning products safe and eco-friendly?',
      answer: 'Yes! We prioritize the health of our clients and the environment by using eco-friendly, non-toxic cleaning products. Our products are safe for children, pets, and people with sensitivities while still providing exceptional cleaning results.'
    },
    {
      question: 'How do you ensure quality and consistency?',
      answer: 'All our staff are thoroughly trained and vetted professionals. We use detailed checklists for each service, conduct regular quality inspections, and maintain open communication with our clients. We also offer a 100% satisfaction guarantee on all our services.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing depends on the type of service, size of the space, frequency of cleaning, and specific requirements. We offer competitive rates and provide free, no-obligation quotes. Contact us for a personalized estimate based on your needs.'
    },
    {
      question: 'Do you offer regular cleaning schedules?',
      answer: 'Absolutely! We offer flexible scheduling options including weekly, bi-weekly, monthly, or one-time cleaning services. We work around your schedule to ensure minimal disruption to your routine.'
    },
    {
      question: 'Are you insured and bonded?',
      answer: 'Yes, we are fully insured and bonded for your peace of mind. Our insurance covers any potential damages, and all our employees undergo background checks. Your property and belongings are protected when you choose our services.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. Here are some of the most common 
            questions we receive about our cleaning services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="card-fresh animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center p-6 hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#C04846] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly customer service 
              team is here to help. Contact us and we'll get back to you right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-accent/90 hover:scale-105">
                Contact Us
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105">
                Call: +254724681055
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;