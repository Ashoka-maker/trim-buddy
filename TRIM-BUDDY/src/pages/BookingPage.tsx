import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { emailService } from '../services/emailService';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Calendar,
  CreditCard,
  User,
  Phone,
  CheckCircle
} from 'lucide-react';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingData, setBookingData] = useState({
    customerName: '',
    phone: '',
    address: '',
    area: '',
    notes: ''
  });

  const areas = ['Qairathabad', 'Dilsukhnagar', 'Uppal'];
  
  const services = [
    { id: 'haircut', name: 'Hair Cut', price: 150, duration: '30 min' },
    { id: 'beard', name: 'Beard Styling', price: 100, duration: '20 min' },
    { id: 'facial', name: 'Facial Treatment', price: 200, duration: '45 min' },
    { id: 'kids', name: 'Kids Cut', price: 120, duration: '25 min' },
    { id: 'grooming', name: 'Full Grooming', price: 350, duration: '60 min' }
  ];

  const barbers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 4.8,
      reviews: 127,
      experience: '8 years',
      specialties: ['Hair Cut', 'Beard Styling'],
      languages: ['Hindi', 'English'],
      area: 'Dilsukhnagar',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      available: true,
      email: 'rajesh@example.com'
    },
    {
      id: 2,
      name: 'Mohammed Ali',
      rating: 4.9,
      reviews: 89,
      experience: '6 years',
      specialties: ['Facial', 'Full Grooming'],
      languages: ['Urdu', 'Hindi', 'English'],
      area: 'Qairathabad',
      image: 'https://images.pexels.com/photos/1484801/pexels-photo-1484801.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      available: true,
      email: 'mohammed@example.com'
    },
    {
      id: 3,
      name: 'Venkat Reddy',
      rating: 4.7,
      reviews: 156,
      experience: '10 years',
      specialties: ['Hair Cut', 'Kids Cut'],
      languages: ['Telugu', 'Hindi'],
      area: 'Uppal',
      image: 'https://images.pexels.com/photos/1484825/pexels-photo-1484825.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      available: false,
      email: 'venkat@example.com'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleBookingConfirmation = async () => {
    try {
      const selectedServiceData = services.find(s => s.id === selectedService);
      const bookingId = 'TB' + Date.now().toString().slice(-6);
      
      // Prepare booking data for email
      const emailData = {
        customerEmail: 'customer@example.com', // In real app, get from auth
        barberEmail: selectedBarber?.email || '',
        customerName: bookingData.customerName,
        barberName: selectedBarber?.name || '',
        service: selectedServiceData?.name || '',
        date: selectedDate,
        time: selectedTime,
        address: bookingData.address,
        amount: selectedServiceData?.price || 0,
        bookingId: bookingId
      };

      // Send confirmation emails
      const emailSent = await emailService.sendBookingConfirmation(emailData);
      
      if (emailSent) {
        console.log('Booking confirmation emails sent successfully');
      } else {
        console.warn('Failed to send confirmation emails');
      }
      
      nextStep();
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Booking confirmed but there was an issue sending confirmation emails.');
      nextStep();
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark-900">Select Area & Service</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Area</label>
              <select
                value={bookingData.area}
                name="area"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              >
                <option value="">Select your area</option>
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Select Service</label>
              <div className="grid grid-cols-1 gap-4">
                {services.map(service => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-gold-500 bg-gold-50'
                        : 'border-gray-300 hover:border-gold-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-dark-900">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gold-600">₹{service.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextStep}
              disabled={!selectedService || !bookingData.area}
              className="w-full py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Continue
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark-900">Choose Your Barber</h2>
            
            <div className="space-y-4">
              {barbers
                .filter(barber => barber.area === bookingData.area)
                .map(barber => (
                <div
                  key={barber.id}
                  onClick={() => barber.available && setSelectedBarber(barber)}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedBarber?.id === barber.id
                      ? 'border-gold-500 bg-gold-50'
                      : barber.available
                      ? 'border-gray-300 hover:border-gold-300'
                      : 'border-gray-200 bg-gray-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={barber.image}
                      alt={barber.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-dark-900">{barber.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-gold-500 fill-current" />
                          <span className="text-sm font-medium">{barber.rating}</span>
                          <span className="text-sm text-gray-500">({barber.reviews})</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{barber.experience} experience</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {barber.specialties.join(', ')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">
                          Speaks: {barber.languages.join(', ')}
                        </span>
                      </div>
                      {!barber.available && (
                        <span className="text-xs text-red-500 font-medium">Currently Unavailable</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!selectedBarber}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark-900">Select Date & Time</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Available Time Slots</label>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 border rounded-lg text-sm font-medium transition-all ${
                      selectedTime === time
                        ? 'border-gold-500 bg-gold-50 text-gold-700'
                        : 'border-gray-300 hover:border-gold-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!selectedDate || !selectedTime}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark-900">Your Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={bookingData.customerName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address</label>
              <textarea
                name="address"
                value={bookingData.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                placeholder="Enter your complete address with landmarks"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes (Optional)</label>
              <textarea
                name="notes"
                value={bookingData.notes}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                placeholder="Any specific requirements or preferences..."
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                disabled={!bookingData.customerName || !bookingData.phone || !bookingData.address}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Review Booking
              </button>
            </div>
          </div>
        );

      case 5:
        const selectedServiceData = services.find(s => s.id === selectedService);
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dark-900">Booking Summary</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Service:</span>
                <span>{selectedServiceData?.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Barber:</span>
                <span>{selectedBarber?.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Date & Time:</span>
                <span>{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Location:</span>
                <span>{bookingData.area}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total Amount:</span>
                  <span className="text-gold-600">₹{selectedServiceData?.price}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-dark-900">Payment Method</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="payment" value="online" className="mr-2" />
                  <span>Pay Online (UPI/Card/Wallet)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" value="cash" className="mr-2" defaultChecked />
                  <span>Cash on Service</span>
                </label>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleBookingConfirmation}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center space-y-6">
            <div className="bg-green-100 rounded-full p-6 w-fit mx-auto">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-dark-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600">Your booking has been successfully confirmed.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-dark-900 mb-4">Booking Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Booking ID:</span> #TB{Date.now().toString().slice(-6)}</p>
                <p><span className="font-medium">Service:</span> {services.find(s => s.id === selectedService)?.name}</p>
                <p><span className="font-medium">Barber:</span> {selectedBarber?.name}</p>
                <p><span className="font-medium">Date & Time:</span> {selectedDate} at {selectedTime}</p>
                <p><span className="font-medium">Amount:</span> ₹{services.find(s => s.id === selectedService)?.price}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  📧 Confirmation emails have been sent to both you and your barber with all booking details.
                </p>
              </div>
              
              <p className="text-sm text-gray-600">
                You will receive a confirmation SMS with barber contact details. 
                The barber will call you 30 minutes before arrival.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/customer-dashboard"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all text-center"
                >
                  View My Bookings
                </Link>
                <Link
                  to="/"
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all text-center"
                >
                  Back to Home
                </Link>
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
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md">
          {/* Progress Bar */}
          <div className="px-6 py-4 border-b">
            <Link to="/" className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5, 6].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex items-center ${
                    stepNumber < 6 ? 'flex-1' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNumber
                        ? 'bg-gold-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 6 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > stepNumber ? 'bg-gold-500' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="px-6 py-8">
            {renderStepContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;