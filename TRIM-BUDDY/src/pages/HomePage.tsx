import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OfferBanner from '../components/OfferBanner';
import { 
  Scissors, 
  Star, 
  Clock, 
  Shield, 
  MapPin, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Hair Cut',
      description: 'Professional haircuts tailored to your style',
      price: 'Starting from ₹150'
    },
    {
      icon: Users,
      title: 'Beard Styling',
      description: 'Expert beard trimming and styling',
      price: 'Starting from ₹100'
    },
    {
      icon: Star,
      title: 'Facial Treatment',
      description: 'Relaxing facial treatments for healthy skin',
      price: 'Starting from ₹200'
    },
    {
      icon: CheckCircle,
      title: 'Kids Cut',
      description: 'Gentle and fun haircuts for children',
      price: 'Starting from ₹120'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Flexible Booking',
      description: 'Book appointments at your convenience, 7 days a week'
    },
    {
      icon: Shield,
      title: 'Verified Barbers',
      description: 'All barbers are verified and professionally trained'
    },
    {
      icon: MapPin,
      title: 'Home Service',
      description: 'Professional grooming services at your doorstep'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Rated by customers, guaranteed satisfaction'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Dilsukhnagar',
      rating: 5,
      comment: 'Excellent service! The barber was professional and gave me exactly the haircut I wanted. Very convenient.'
    },
    {
      name: 'Priya Sharma',
      location: 'Qairathabad',
      rating: 5,
      comment: 'Booked for my husband and kids. Great experience, will definitely use TrimBuddy again!'
    },
    {
      name: 'Mohammed Ali',
      location: 'Uppal',
      rating: 5,
      comment: 'Fast booking, reasonable prices, and quality service. Highly recommended!'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Offer Banner */}
      <OfferBanner />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  Barber Services
                </span>
                <span className="block">at Your Doorstep</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Book trusted, verified barbers for home visits. Premium grooming services 
                in Qairathabad, Dilsukhnagar, and Uppal areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-service"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-gold-400 font-semibold rounded-lg hover:bg-gold-500 hover:text-white transition-all duration-300"
                >
                  Become a Barber
                </Link>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-gold-400" />
                  <span>100+ Verified Barbers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-gold-400" />
                  <span>4.8+ Rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative bg-gradient-to-br from-gold-100 to-gold-50 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                  alt="Professional Barber Service"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Play className="h-8 w-8 text-gold-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional grooming services delivered by skilled barbers at your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-lg p-4 w-fit mb-4 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-gold-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-gold-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900">Why Choose TrimBuddy?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional grooming experiences with convenience and quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-full p-6 w-fit mx-auto">
                  <feature.icon className="h-8 w-8 text-gold-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-dark-900 to-dark-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">500+</div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">100+</div>
              <p className="text-gray-300">Verified Barbers</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">3</div>
              <p className="text-gray-300">Service Areas</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">4.8★</div>
              <p className="text-gray-300">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from satisfied customers across Hyderabad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-dark-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold-500 to-gold-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for Your Perfect Trim?</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Book your appointment today and experience professional grooming at home. 
            It's quick, convenient, and guaranteed to exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-service"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gold-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Book Your Service
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gold-600 transition-all duration-300"
            >
              Join as Barber
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;