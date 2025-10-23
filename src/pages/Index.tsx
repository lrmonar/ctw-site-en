
import React from 'react';
import NewsCarousel from '@/components/NewsCarousel';
import NewsPanel from '@/components/NewsPanel';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Phone, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const serviceData = [
    {
      title: "Cellular Consulting",
      description: "Expert guidance on cellular network technology and implementation.",
      icon: <Smartphone className="w-6 h-6" />,
      features: [
        "5G network planning and deployment",
        "IoT cellular connectivity solutions",
        "Private cellular network setup",
        "Network performance optimization"
      ]
    },
    {
      title: "Telephony Solutions",
      description: "Modern telephony systems designed for business efficiency.",
      icon: <Phone className="w-6 h-6" />,
      features: [
        "VoIP implementation and migration",
        "Call center setup and optimization",
        "Unified communications integration",
        "Cloud PBX solutions"
      ]
    },
    {
      title: "Web Applications",
      description: "Custom web applications tailored to your business needs.",
      icon: <Globe className="w-6 h-6" />,
      features: [
        "Progressive Web App development",
        "Cloud-based web solutions",
        "Enterprise web application design",
        "Legacy system modernization"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section with News Carousel */}
      <section className="bg-consulting-light">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-consulting-dark">
              Digital Consulting Solutions
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
              Expert consulting in Cellular, Telephony, and Web Applications to transform your business.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <NewsCarousel />
          </div>
        </div>
      </section>
      
      {/* News Sections */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-consulting-dark">
              Latest Industry News
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Stay updated with the latest developments in technology and consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsPanel title="Cellular News" category="cellular" />
            <NewsPanel title="Telephony News" category="telephony" />
            <NewsPanel title="Web Technology News" category="web" />
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-12 md:py-20 bg-consulting-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-consulting-dark">
              Our Services
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                iconComponent={service.icon}
                features={service.features}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-consulting-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our consultants are ready to help you navigate the complex world of modern technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="default" size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
