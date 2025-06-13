import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Star, 
  MapPin, 
  Phone,
  User,
  CreditCard,
  History,
  Settings,
  Plus,
  MessageSquare,
  Gift
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ReferralSystem from '../components/ReferralSystem';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  const bookings = [
    {
      id: 1,
      barber: 'Rajesh Kumar',
      service: 'Hair Cut',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'upcoming',
      amount: 150,
      barberImage: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Dilsukhnagar'
    },
    {
      id: 2,
      barber: 'Mohammed Ali',
      service: 'Beard Styling',
      date: '2024-01-10',
      time: '2:00 PM',
      status: 'completed',
      amount: 100,
      barberImage: 'https://images.pexels.com/photos/1484801/pexels-photo-1484801.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Qairathabad',
      rating: 5
    },
    {
      id: 3,
      barber: 'Venkat Reddy',
      service: 'Full Grooming',
      date: '2024-01-05',
      time: '4:00 PM',
      status: 'completed',
      amount: 350,
      barberImage: 'https://images.pexels.com/photos/1484825/pexels-photo-1484825.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Uppal',
      rating: 4
    }
  ];

  const favoriteBarbers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 4.8,
      reviews: 127,
      specialties: ['Hair Cut', 'Beard Styling'],
      location: 'Dilsukhnagar',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Mohammed Ali',
      rating: 4.9,
      reviews: 89,
      specialties: ['Facial', 'Full Grooming'],
      location: 'Qairathabad',
      image: 'https://images.pexels.com/photos/1484801/pexels-photo-1484801.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'bookings':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-dark-900">My Bookings</h2>
              <Link
                to="/book-service"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all"
              >
                <Plus className="h-4 w-4 mr-2" />
                Book New Service
              </Link>
            </div>

            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={booking.barberImage}
                        alt={booking.barber}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-dark-900">{booking.barber}</h3>
                        <p className="text-sm text-gray-600">{booking.service}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {booking.date}
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {booking.time}
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            {booking.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gold-600">₹{booking.amount}</p>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                          booking.status === 'upcoming'
                            ? 'bg-blue-100 text-blue-800'
                            : booking.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {booking.status}
                      </span>
                      
                      {booking.status === 'completed' && booking.rating && (
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < booking.rating ? 'text-gold-500 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {booking.status === 'upcoming' && (
                    <div className="flex space-x-3 mt-4 pt-4 border-t">
                      <button className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors">
                        Reschedule
                      </button>
                      <button className="flex-1 py-2 px-4 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 text-sm font-medium transition-colors">
                        Cancel
                      </button>
                      <button className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium transition-colors flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </button>
                    </div>
                  )}
                  
                  {booking.status === 'completed' && !booking.rating && (
                    <div className="mt-4 pt-4 border-t">
                      <button className="w-full py-2 px-4 bg-gold-600 text-white rounded-lg hover:bg-gold-700 text-sm font-medium transition-colors">
                        Rate & Review
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'favorites':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-dark-900">Favorite Barbers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteBarbers.map((barber) => (
                <div key={barber.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={barber.image}
                      alt={barber.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-dark-900">{barber.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-gold-500 fill-current" />
                          <span className="text-sm font-medium ml-1">{barber.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({barber.reviews} reviews)</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{barber.specialties.join(', ')}</p>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {barber.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4">
                    <Link
                      to="/book-service"
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-lg hover:from-gold-600 hover:to-gold-700 text-sm font-medium text-center transition-all"
                    >
                      Book Now
                    </Link>
                    <button className="py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'referral':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-dark-900">Referral Program</h2>
            <ReferralSystem userType="customer" userId="CUST123" />
          </div>
        );

      case 'profile':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-dark-900 mb-6">Profile Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900">John Doe</h3>
                  <p className="text-gray-600">Customer since Jan 2024</p>
                  <button className="text-gold-600 hover:text-gold-700 text-sm font-medium mt-1">
                    Upload Photo
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Area
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500">
                    <option>Dilsukhnagar</option>
                    <option>Qairathabad</option>
                    <option>Uppal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Address
                </label>
                <textarea
                  rows={3}
                  defaultValue="123 Main Street, Dilsukhnagar, Hyderabad - 500036"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>

              <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-dark-900">My Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link
                to="/book-service"
                className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                {[
                  { id: 'bookings', label: 'My Bookings', icon: Calendar },
                  { id: 'favorites', label: 'Favorite Barbers', icon: Star },
                  { id: 'referral', label: 'Refer & Earn', icon: Gift },
                  { id: 'profile', label: 'Profile', icon: User }
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gold-100 text-gold-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;