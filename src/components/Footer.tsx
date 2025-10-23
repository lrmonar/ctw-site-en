
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-consulting-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CTW Celular Telefonia Web EIRL</h3>
            <p className="text-gray-300 mb-4">
              Your premier consulting partner for Cellular, Telephony, and Web Application solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:luis@cetevedoble.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Cellular Consulting</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Telephony Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Web Applications</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Technical Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>Av. Francisco de Cuellar 451</p>
              <p>Santiago de Surco, Lima 15023</p>
              <p className="mt-2">Phone: +51 (1) 436-8150</p>
              <p>Email: luis@cetevedoble.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} CTW Celular Telefonia Web EIRL. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



