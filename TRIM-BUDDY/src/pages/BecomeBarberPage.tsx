import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  ArrowLeft, 
  CheckCircle, 
  Star, 
  DollarSign, 
  Clock, 
  Users,
  Scissors,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

const BecomeBarberPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    area: '',
    specialties: []
  });

  const benefits = [
    {
      icon: DollarSign,
      title: 'Flexible Earnings',
      description: 'Earn ₹15,000 - ₹40,000 per month working on your own schedule'
    },
    {
      icon: Clock,
      title: 'Work on Your Time',
      description: 'Set your own availability and work when it suits you best'
    },
    {
      icon: Users,
      title: 'Growing Customer Base',
      description: 'Access to thousands of customers across Hyderabad'
    },
    {
      icon: Star,
      title: 'Build Your Reputation',
      description: 'Get rated and reviewed to build a strong professional profile'
    }
  ];

  const requirements = [
    'Minimum 2 years of professional barber experience',
    'Valid government ID proof',
    'Professional barber tools and equipment',
    'Ability to travel to customer locations',
    'Good communication skills in local languages',
    'Professional appearance and hygiene standards'
  ];

  const areas = ['Qairathabad', 'Dilsukhnagar', 'Uppal'];
  const specialties = ['Hair Cut', 'Beard Styling', 'Facial', 'Kids Cut', 'Full Grooming'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    setFormData(prev => ({
      ...prev,
      specialties: isChecked 
        ? [...prev.specialties, value]
        : prev.specialties.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Barber application:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-full p-6 w-fit mx-auto mb-6">
            <Scissors className="h-12 w-12 text-gold-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Become a TrimBuddy Barber
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our network of professional barbers and start earning by providing 
            quality grooming services at customers' homes
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Why Join TrimBuddy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-full p-6 w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-8">Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-dark-900 text-center mb-8">Apply Now</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Service Area *
                </label>
                <select
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <option value="">Select your preferred area</option>
                  {areas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Specialties *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {specialties.map(specialty => (
                    <label key={specialty} className="flex items-center">
                      <input
                        type="checkbox"
                        value={specialty}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{specialty}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience & Background
                </label>
                <textarea
                  name="experience"
                  rows={4}
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Tell us about your experience, training, and why you want to join TrimBuddy..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Submit Application
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Already have an account? <Link to="/login" className="text-gold-600 hover:text-gold-700 font-medium">Sign in here</Link></p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6">Our team is here to help you get started</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9663427720"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call: +91 9663427720
            </a>
            <a
              href="mailto:ashoka6031@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email: ashoka6031@gmail.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BecomeBarberPage;