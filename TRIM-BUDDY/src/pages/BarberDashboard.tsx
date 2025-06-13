import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Star, 
  TrendingUp, 
  User, 
  MapPin,
  Phone,
  Settings,
  Bell,
  CheckCircle,
  XCircle,
  Gift
} from 'lucide-react';
import ReferralSystem from '../components/ReferralSystem';

const BarberDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAvailable, setIsAvailable] = useState(true);

  const stats = [
    { label: 'Today\'s Bookings', value: '8', icon: Calendar, color: 'bg-blue-500' },
    { label: 'This Week Earnings', value: '₹4,200', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Average Rating', value: '4.8', icon: Star, color: 'bg-gold-500' },
    { label: 'Total Customers', value: '127', icon: User, color: 'bg-purple-500' }
  ];

  const todayBookings = [
    {
      id: 1,
      customer: 'Rajesh Kumar',
      service: 'Hair Cut',
      time: '10:00 AM',
      location: 'Dilsukhnagar',
      phone: '+91 98765 43210',
      amount: 150,
      status: 'confirmed'
    },
    {
      id: 2,
      customer: 'Priya Sharma',
      service: 'Beard Styling',
      time: '2:00 PM',
      location: 'Dilsukhnagar',
      phone: '+91 98765 43211',
      amount: 100,
      status: 'pending'
    },
    {
      id: 3,
      customer: 'Mohammed Ali',
      service: 'Full Grooming',
      time: '4:00 PM',
      location: 'Dilsukhnagar',
      phone: '+91 98765 43212',
      amount: 350,
      status: 'confirmed'
    }
  ];

  const weeklyEarnings = [
    { day: 'Mon', amount: 450 },
    { day: 'Tue', amount: 680 },
    { day: 'Wed', amount: 520 },
    { day: 'Thu', amount: 750 },
    { day: 'Fri', amount: 890 },
    { day: 'Sat', amount: 1200 },
    { day: 'Sun', amount: 720 }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-dark-900">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Toggle */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-dark-900">Availability Status</h3>
                  <p className="text-sm text-gray-600">
                    {isAvailable ? 'You are currently available for bookings' : 'You are currently unavailable'}
                  </p>
                </div>
                <button
                  onClick={() => setIsAvailable(!isAvailable)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 ${
                    isAvailable ? 'bg-gold-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                      isAvailable ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Today's Bookings */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Today's Bookings</h3>
              <div className="space-y-4">
                {todayBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h4 className="font-semibold text-dark-900">{booking.customer}</h4>
                            <p className="text-sm text-gray-600">{booking.service}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="flex items-center text-sm text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                {booking.time}
                              </span>
                              <span className="flex items-center text-sm text-gray-500">
                                <MapPin className="h-4 w-4 mr-1" />
                                {booking.location}
                              </span>
                              <span className="flex items-center text-sm text-gray-500">
                                <Phone className="h-4 w-4 mr-1" />
                                {booking.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-semibold text-gold-600">₹{booking.amount}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                        <div className="flex space-x-2">
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <XCircle className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Earnings Chart */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Weekly Earnings</h3>
              <div className="flex items-end space-x-2 h-48">
                {weeklyEarnings.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-gold-500 rounded-t-lg"
                      style={{
                        height: `${(day.amount / Math.max(...weeklyEarnings.map(d => d.amount))) * 160}px`
                      }}
                    />
                    <span className="text-xs text-gray-600 mt-2">{day.day}</span>
                    <span className="text-xs font-medium text-gray-800">₹{day.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-dark-900 mb-4">All Bookings</h3>
            <div className="space-y-4">
              {todayBookings.map((booking) => (
                <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h4 className="font-semibold text-dark-900">{booking.customer}</h4>
                          <p className="text-sm text-gray-600">{booking.service}</p>
                          <div className="flex items-center space-x-4 mt-1">
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
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-semibold text-gold-600">₹{booking.amount}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'earnings':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Today's Earnings</h3>
                <p className="text-2xl font-bold text-green-600">₹1,200</p>
                <p className="text-sm text-gray-500 mt-1">8 services completed</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">This Week</h3>
                <p className="text-2xl font-bold text-blue-600">₹4,200</p>
                <p className="text-sm text-gray-500 mt-1">28 services completed</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">This Month</h3>
                <p className="text-2xl font-bold text-purple-600">₹16,800</p>
                <p className="text-sm text-gray-500 mt-1">112 services completed</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Earnings Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Hair Cut Services</span>
                  <span className="font-semibold">₹2,400 (16 services)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Beard Styling</span>
                  <span className="font-semibold">₹800 (8 services)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Full Grooming</span>
                  <span className="font-semibold">₹1,000 (4 services)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Tips Received</span>
                  <span className="font-semibold text-green-600">₹450</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'referral':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-dark-900">Referral Program</h2>
            <ReferralSystem userType="barber" userId="BARB456" />
          </div>
        );

      case 'profile':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-dark-900 mb-6">Profile Settings</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <img
                  src="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-dark-900">Rajesh Kumar</h4>
                  <p className="text-gray-600">Professional Barber</p>
                  <button className="text-gold-600 hover:text-gold-700 text-sm font-medium mt-1">
                    Change Photo
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
                    defaultValue="Rajesh Kumar"
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
                    defaultValue="rajesh@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience
                  </label>
                  <input
                    type="text"
                    defaultValue="8 years"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Areas
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Qairathabad', 'Dilsukhnagar', 'Uppal'].map(area => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={area === 'Dilsukhnagar'}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialties
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Hair Cut', 'Beard Styling', 'Facial', 'Kids Cut', 'Full Grooming'].map(specialty => (
                    <label key={specialty} className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={['Hair Cut', 'Beard Styling'].includes(specialty)}
                        className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{specialty}</span>
                    </label>
                  ))}
                </div>
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
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-dark-900">Barber Dashboard</h1>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                isAvailable 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {isAvailable ? 'Available' : 'Unavailable'}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="h-5 w-5" />
              </button>
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
                  { id: 'overview', label: 'Overview', icon: TrendingUp },
                  { id: 'bookings', label: 'Bookings', icon: Calendar },
                  { id: 'earnings', label: 'Earnings', icon: DollarSign },
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

export default BarberDashboard;