
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-consulting-blue">CTW Celular Telefonia Web EIRL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-consulting-blue transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium hover:text-consulting-blue transition-colors">
              Services
            </Link>
            <Link to="/gallery" className="font-medium hover:text-consulting-blue transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="font-medium hover:text-consulting-blue transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block py-2 hover:text-consulting-blue transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/services" className="block py-2 hover:text-consulting-blue transition-colors" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/gallery" className="block py-2 hover:text-consulting-blue transition-colors" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link to="/contact" className="block py-2 hover:text-consulting-blue transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full">Register</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

