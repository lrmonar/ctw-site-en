
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-consulting-light py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-consulting-dark">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Have questions or ready to start a project? Get in touch with our consulting team.
          </p>
        </div>
      </section>
      
      {/* Contact Details & Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-consulting-blue/10 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-consulting-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">luis@cetevedoble.com</p>
                      <p className="text-gray-600">apoyo@cetevedoble.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-consulting-blue/10 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-consulting-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">+51 (1) 436-8150</p>
                      <p className="text-gray-600">+51 986-265-192</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-consulting-blue/10 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-consulting-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office Location</h3>
                      <p className="text-gray-600">
                        Av. Francisco de Cuellar 451,<br />
                        Santiago de Surco, Lima 15023<br />
                        PERU
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-consulting-blue/10 p-3 rounded-full">
                      <Clock className="w-5 h-5 text-consulting-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-600">Saturday: 10am - 3pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map (Placeholder) */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                <div className="h-72 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Would Be Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-consulting-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Check out our frequently asked questions or schedule a call with one of our consultants.
          </p>
          <button className="bg-consulting-blue text-white hover:bg-consulting-blue/90 px-8 py-3 rounded-md font-semibold transition-colors">
            Schedule a Call
          </button>
        </div>
      </section>
    </main>
  );
};

export default Contact;







