
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { 
  Phone, 
  Smartphone, 
  Globe, 
  Signal, 
  Server, 
  Shield, 
  BookOpen,
  Workflow,
  Code
} from 'lucide-react';

const Services = () => {
  const servicesData = [
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
    },
    {
      title: "Network Infrastructure",
      description: "Design and implementation of robust network systems.",
      icon: <Signal className="w-6 h-6" />,
      features: [
        "Network architecture planning",
        "Hardware selection and deployment",
        "Network security audits",
        "Scalability solutions"
      ]
    },
    {
      title: "Cloud Migration",
      description: "Seamless transition of systems and applications to the cloud.",
      icon: <Server className="w-6 h-6" />,
      features: [
        "Cloud readiness assessment",
        "Migration strategy and planning",
        "Multi-cloud environments",
        "Cost optimization"
      ]
    },
    {
      title: "Security Consulting",
      description: "Protect your business with comprehensive security solutions.",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Security architecture review",
        "Vulnerability assessment",
        "Compliance consulting",
        "Security awareness training"
      ]
    },
    {
      title: "Technology Training",
      description: "Equip your team with the skills they need to succeed.",
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        "Custom training programs",
        "Technology workshops",
        "Certification preparation",
        "Knowledge transfer"
      ]
    },
    {
      title: "Process Optimization",
      description: "Streamline your business processes for maximum efficiency.",
      icon: <Workflow className="w-6 h-6" />,
      features: [
        "Business process analysis",
        "Workflow automation",
        "Digital transformation",
        "Productivity enhancements"
      ]
    },
    {
      title: "Custom Development",
      description: "Bespoke software solutions designed for your specific needs.",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Requirements engineering",
        "Agile development methodology",
        "Quality assurance & testing",
        "Ongoing support & maintenance"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-consulting-light py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-consulting-dark">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Comprehensive consulting solutions to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                iconComponent={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-consulting-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Need a Customized Solution?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We can create a tailored package that addresses your specific business challenges.
          </p>
          <a href="/contact">
            <button className="bg-white text-consulting-blue hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Our Team
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
