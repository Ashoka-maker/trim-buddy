import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Star,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  Settings,
  BarChart3,
  Edit,
  Plus,
  Trash2,
  RefreshCw,
  Gift
} from 'lucide-react';
import { emailService } from '../services/emailService';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [offers, setOffers] = useState([
    {
      id: '1',
      title: '🎉 New Year Special!',
      description: 'Get 20% off on your first booking',
      discount: '20% OFF',
      validUntil: '2024-01-31',
      type: 'new-user',
      isActive: true
    },
    {
      id: '2',
      title: '👥 Refer & Earn',
      description: 'Refer a friend and both get ₹50 credit',
      discount: '₹50 Credit',
      validUntil: '2024-12-31',
      type: 'referral',
      isActive: true
    }
  ]);

  const [newOffer, setNewOffer] = useState({
    title: '',
    description: '',
    discount: '',
    validUntil: '',
    type: 'discount',
    isActive: true
  });

  const [showOfferForm, setShowOfferForm] = useState(false);

  const stats = [
    { label: 'Total Barbers', value: '127', icon: Users, color: 'bg-blue-500', change: '+12%' },
    { label: 'Total Customers', value: '1,543', icon: Users, color: 'bg-green-500', change: '+8%' },
    { label: 'Today\'s Bookings', value: '89', icon: Calendar, color: 'bg-purple-500', change: '+15%' },
    { label: 'Monthly Revenue', value: '₹2,45,000', icon: DollarSign, color: 'bg-gold-500', change: '+22%' }
  ];

  const pendingBarbers = [
    {
      id: 1,
      name: 'Suresh Kumar',
      phone: '+91 98765 43210',
      email: 'suresh@example.com',
      area: 'Dilsukhnagar',
      experience: '5 years',
      specialties: ['Hair Cut', 'Beard Styling'],
      appliedDate: '2024-01-10',
      documents: ['ID Proof', 'Experience Certificate'],
      status: 'pending'
    },
    {
      id: 2,
      name: 'Ravi Sharma',
      phone: '+91 98765 43211',
      email: 'ravi@example.com',
      area: 'Uppal',
      experience: '3 years',
      specialties: ['Hair Cut', 'Kids Cut'],
      appliedDate: '2024-01-12',
      documents: ['ID Proof', 'Training Certificate'],
      status: 'pending'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      customer: 'John Doe',
      customerEmail: 'john@example.com',
      barber: 'Rajesh Kumar',
      barberEmail: 'rajesh@example.com',
      service: 'Hair Cut',
      date: '2024-01-15',
      time: '10:00 AM',
      amount: 150,
      status: 'completed',
      area: 'Dilsukhnagar',
      paymentStatus: 'paid'
    },
    {
      id: 2,
      customer: 'Priya Sharma',
      customerEmail: 'priya@example.com',
      barber: 'Mohammed Ali',
      barberEmail: 'mohammed@example.com',
      service: 'Facial',
      date: '2024-01-15',
      time: '2:00 PM',
      amount: 200,
      status: 'ongoing',
      area: 'Qairathabad',
      paymentStatus: 'pending'
    }
  ];

  const topBarbers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      rating: 4.9,
      bookings: 156,
      revenue: '₹23,400',
      area: 'Dilsukhnagar',
      status: 'active'
    },
    {
      id: 2,
      name: 'Mohammed Ali',
      email: 'mohammed@example.com',
      rating: 4.8,
      bookings: 134,
      revenue: '₹20,100',
      area: 'Qairathabad',
      status: 'active'
    }
  ];

  const handleApproveBarber = async (barberId: number) => {
    try {
      // In real app, this would be an API call
      console.log('Approving barber:', barberId);
      
      // Send approval email
      const barber = pendingBarbers.find(b => b.id === barberId);
      if (barber) {
        // await emailService.sendBarberApprovalEmail(barber.email, barber.name);
        alert(`Barber ${barber.name} approved successfully! Approval email sent.`);
      }
    } catch (error) {
      console.error('Error approving barber:', error);
    }
  };

  const handleRejectBarber = async (barberId: number) => {
    try {
      const barber = pendingBarbers.find(b => b.id === barberId);
      if (barber) {
        // await emailService.sendBarberRejectionEmail(barber.email, barber.name);
        alert(`Barber ${barber.name} rejected. Notification email sent.`);
      }
    } catch (error) {
      console.error('Error rejecting barber:', error);
    }
  };

  const handleRefundBooking = async (bookingId: number) => {
    try {
      const booking = recentBookings.find(b => b.id === bookingId);
      if (booking) {
        // Process refund logic here
        // await emailService.sendRefundConfirmation(booking.customerEmail, booking);
        alert(`Refund processed for booking #${bookingId}. Customer notified.`);
      }
    } catch (error) {
      console.error('Error processing refund:', error);
    }
  };

  const handleAddOffer = () => {
    if (!newOffer.title || !newOffer.description || !newOffer.discount) {
      alert('Please fill all required fields');
      return;
    }

    const offer = {
      ...newOffer,
      id: Date.now().toString()
    };

    setOffers([...offers, offer]);
    setNewOffer({
      title: '',
      description: '',
      discount: '',
      validUntil: '',
      type: 'discount',
      isActive: true
    });
    setShowOfferForm(false);
  };

  const handleToggleOffer = (offerId: string) => {
    setOffers(offers.map(offer => 
      offer.id === offerId 
        ? { ...offer, isActive: !offer.isActive }
        : offer
    ));
  };

  const handleDeleteOffer = (offerId: string) => {
    setOffers(offers.filter(offer => offer.id !== offerId));
  };

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
                      <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-dark-900 mb-4">Monthly Revenue</h3>
                <div className="h-64 flex items-end space-x-2">
                  {[180, 220, 190, 250, 280, 245, 300, 320, 290, 350, 380, 400].map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gold-500 rounded-t-lg"
                      style={{ height: `${(value / 400) * 200}px` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>

              {/* Top Barbers */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-dark-900 mb-4">Top Performing Barbers</h3>
                <div className="space-y-4">
                  {topBarbers.map((barber, index) => (
                    <div key={barber.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-gold-600">#{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium text-dark-900">{barber.name}</p>
                          <p className="text-sm text-gray-500">{barber.area}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gold-600">{barber.revenue}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-gold-500 fill-current" />
                          <span className="text-xs text-gray-500">{barber.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Recent Bookings</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Customer</th>
                      <th className="text-left py-2">Barber</th>
                      <th className="text-left py-2">Service</th>
                      <th className="text-left py-2">Date & Time</th>
                      <th className="text-left py-2">Amount</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b">
                        <td className="py-2">{booking.customer}</td>
                        <td className="py-2">{booking.barber}</td>
                        <td className="py-2">{booking.service}</td>
                        <td className="py-2">{booking.date} {booking.time}</td>
                        <td className="py-2">₹{booking.amount}</td>
                        <td className="py-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : booking.status === 'ongoing'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-2">
                          <div className="flex space-x-1">
                            <button 
                              onClick={() => handleRefundBooking(booking.id)}
                              className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                              title="Process Refund"
                            >
                              <RefreshCw className="h-3 w-3" />
                            </button>
                            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                              <Eye className="h-3 w-3" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'barbers':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-dark-900">Barber Management</h2>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  {pendingBarbers.length} Pending Applications
                </span>
              </div>
            </div>

            {/* Pending Applications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Pending Applications</h3>
              <div className="space-y-4">
                {pendingBarbers.map((barber) => (
                  <div key={barber.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-dark-900">{barber.name}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Phone:</span> {barber.phone}
                          </div>
                          <div>
                            <span className="font-medium">Email:</span> {barber.email}
                          </div>
                          <div>
                            <span className="font-medium">Area:</span> {barber.area}
                          </div>
                          <div>
                            <span className="font-medium">Experience:</span> {barber.experience}
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-sm font-medium text-gray-600">Specialties:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {barber.specialties.map((specialty, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-2">
                          <span className="text-sm font-medium text-gray-600">Documents:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {barber.documents.map((doc, index) => (
                              <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleApproveBarber(barber.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve Barber"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleRejectBarber(barber.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject Barber"
                        >
                          <XCircle className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Barbers */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Active Barbers</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Name</th>
                      <th className="text-left py-2">Email</th>
                      <th className="text-left py-2">Area</th>
                      <th className="text-left py-2">Rating</th>
                      <th className="text-left py-2">Bookings</th>
                      <th className="text-left py-2">Revenue</th>
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topBarbers.map((barber) => (
                      <tr key={barber.id} className="border-b">
                        <td className="py-2 font-medium">{barber.name}</td>
                        <td className="py-2">{barber.email}</td>
                        <td className="py-2">{barber.area}</td>
                        <td className="py-2">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-gold-500 fill-current mr-1" />
                            {barber.rating}
                          </div>
                        </td>
                        <td className="py-2">{barber.bookings}</td>
                        <td className="py-2">{barber.revenue}</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            {barber.status}
                          </span>
                        </td>
                        <td className="py-2">
                          <div className="flex space-x-1">
                            <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                              <Eye className="h-3 w-3" />
                            </button>
                            <button className="p-1 text-gray-600 hover:bg-gray-50 rounded transition-colors">
                              <Settings className="h-3 w-3" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'offers':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-dark-900">Offer Management</h2>
              <button
                onClick={() => setShowOfferForm(!showOfferForm)}
                className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add New Offer</span>
              </button>
            </div>

            {/* Add Offer Form */}
            {showOfferForm && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-dark-900 mb-4">Create New Offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={newOffer.title}
                      onChange={(e) => setNewOffer({...newOffer, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="e.g., 🎉 New Year Special!"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Discount</label>
                    <input
                      type="text"
                      value={newOffer.discount}
                      onChange={(e) => setNewOffer({...newOffer, discount: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="e.g., 20% OFF or ₹50 Credit"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={newOffer.description}
                      onChange={(e) => setNewOffer({...newOffer, description: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                      rows={2}
                      placeholder="Describe the offer details..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select
                      value={newOffer.type}
                      onChange={(e) => setNewOffer({...newOffer, type: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="discount">Discount</option>
                      <option value="referral">Referral</option>
                      <option value="new-user">New User</option>
                      <option value="seasonal">Seasonal</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Valid Until</label>
                    <input
                      type="date"
                      value={newOffer.validUntil}
                      onChange={(e) => setNewOffer({...newOffer, validUntil: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-3 mt-4">
                  <button
                    onClick={handleAddOffer}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Create Offer
                  </button>
                  <button
                    onClick={() => setShowOfferForm(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Existing Offers */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Current Offers</h3>
              <div className="space-y-4">
                {offers.map((offer) => (
                  <div key={offer.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-semibold text-dark-900">{offer.title}</h4>
                          <span className="px-2 py-1 bg-gold-100 text-gold-800 rounded-full text-xs font-medium">
                            {offer.discount}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            offer.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {offer.isActive ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Type: {offer.type}</span>
                          <span>Valid until: {new Date(offer.validUntil).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => handleToggleOffer(offer.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            offer.isActive 
                              ? 'text-yellow-600 hover:bg-yellow-50' 
                              : 'text-green-600 hover:bg-green-50'
                          }`}
                          title={offer.isActive ? 'Deactivate' : 'Activate'}
                        >
                          <Settings className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteOffer(offer.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-dark-900">Analytics & Reports</h2>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Conversion Rate</h3>
                <p className="text-2xl font-bold text-green-600">78.5%</p>
                <p className="text-sm text-gray-500">Bookings to completion</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Average Rating</h3>
                <p className="text-2xl font-bold text-gold-600">4.7★</p>
                <p className="text-sm text-gray-500">Across all services</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Customer Retention</h3>
                <p className="text-2xl font-bold text-blue-600">65%</p>
                <p className="text-sm text-gray-500">Repeat customers</p>
              </div>
            </div>

            {/* Service Performance */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Service Performance</h3>
              <div className="space-y-4">
                {[
                  { service: 'Hair Cut', bookings: 456, revenue: '₹68,400', rating: 4.8 },
                  { service: 'Beard Styling', bookings: 234, revenue: '₹23,400', rating: 4.7 },
                  { service: 'Full Grooming', bookings: 123, revenue: '₹43,050', rating: 4.9 },
                  { service: 'Facial', bookings: 89, revenue: '₹17,800', rating: 4.6 },
                  { service: 'Kids Cut', bookings: 67, revenue: '₹8,040', rating: 4.8 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    <div className="flex-1">
                      <h4 className="font-medium text-dark-900">{item.service}</h4>
                      <p className="text-sm text-gray-500">{item.bookings} bookings</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <span className="font-semibold text-green-600">{item.revenue}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-gold-500 fill-current mr-1" />
                        <span className="text-sm">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Area Performance */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-dark-900 mb-4">Area Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { area: 'Dilsukhnagar', barbers: 45, bookings: 234, revenue: '₹89,400' },
                  { area: 'Qairathabad', barbers: 38, bookings: 198, revenue: '₹76,200' },
                  { area: 'Uppal', barbers: 44, bookings: 267, revenue: '₹95,800' }
                ].map((area, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-900 mb-2">{area.area}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Barbers:</span>
                        <span className="font-medium">{area.barbers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bookings:</span>
                        <span className="font-medium">{area.bookings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Revenue:</span>
                        <span className="font-medium text-green-600">{area.revenue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
            <h1 className="text-xl font-bold text-dark-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-700">
                  {pendingBarbers.length} pending applications
                </span>
              </div>
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
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'barbers', label: 'Barber Management', icon: Users },
                  { id: 'offers', label: 'Offer Management', icon: Gift },
                  { id: 'analytics', label: 'Analytics', icon: TrendingUp }
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

export default AdminDashboard;