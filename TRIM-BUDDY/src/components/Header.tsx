import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scissors, User, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-2 rounded-lg">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-dark-900">TrimBuddy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-dark-700 hover:text-gold-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/book-service" className="text-dark-700 hover:text-gold-600 transition-colors font-medium">
              Book Service
            </Link>
            <Link to="/become-barber" className="text-dark-700 hover:text-gold-600 transition-colors font-medium">
              Become a Barber
            </Link>
            <Link to="/about" className="text-dark-700 hover:text-gold-600 transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-2 text-dark-700 hover:text-gold-600 transition-colors font-medium"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-dark-700 hover:text-gold-600 hover:bg-gray-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link
                to="/"
                className="block px-3 py-2 text-dark-700 hover:text-gold-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/book-service"
                className="block px-3 py-2 text-dark-700 hover:text-gold-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Service
              </Link>
              <Link
                to="/become-barber"
                className="block px-3 py-2 text-dark-700 hover:text-gold-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Barber
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-dark-700 hover:text-gold-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="border-t border-gray-100 pt-4 pb-2">
                <Link
                  to="/login"
                  className="block px-3 py-2 text-dark-700 hover:text-gold-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block mx-3 mt-2 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;