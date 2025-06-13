import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Scissors, ArrowLeft, Upload } from 'lucide-react';
import Header from '../components/Header';
import { emailService } from '../services/emailService';

const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get('ref');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState('customer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    area: '',
    languages: [],
    specialties: [],
    experience: '',
    referralCode: referralCode || ''
  });

  const areas = ['Qairathabad', 'Dilsukhnagar', 'Uppal'];
  const languages = ['English', 'Hindi', 'Telugu'];
  const specialties = ['Hair Cut', 'Beard Styling', 'Facial', 'Kids Cut', 'Full Grooming'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call for registration
      console.log('Signup attempt:', { ...formData, userType });
      
      // Generate verification token (in real app, this comes from backend)
      const verificationToken = 'verification_' + Date.now();
      
      // Send verification email
      const emailSent = await emailService.sendVerificationEmail(
        formData.email,
        formData.name,
        verificationToken
      );

      if (emailSent) {
        alert(`Registration successful! Please check your email (${formData.email}) to verify your account.`);
        
        // Apply referral credit if referral code was used
        if (formData.referralCode) {
          console.log('Applying referral credit for code:', formData.referralCode);
          // In real app, this would credit both accounts
        }
        
        // Redirect to login page
        window.location.href = '/login';
      } else {
        throw new Error('Failed to send verification email');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    setFormData(prev => ({
      ...prev,
      [field]: isChecked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-3 rounded-full">
                <Scissors className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-dark-900 mb-2">Join TrimBuddy</h2>
            <p className="text-gray-600">Create your account and start your journey</p>
            
            {referralCode && (
              <div className="mt-4 p-3 bg-gold-50 border border-gold-200 rounded-lg">
                <p className="text-sm text-gold-700">
                  🎉 You're signing up with referral code: <strong>{referralCode}</strong>
                  <br />Both you and your friend will get ₹50 credit!
                </p>
              </div>
            )}
          </div>

          {/* User Type Selection */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setUserType('customer')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                userType === 'customer'
                  ? 'bg-white text-gold-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => setUserType('barber')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                userType === 'barber'
                  ? 'bg-white text-gold-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Barber
            </button>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Basic Information */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-dark-900 mb-4">Basic Information</h3>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Area Selection */}
              <div className="md:col-span-2">
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Area
                </label>
                <select
                  id="area"
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your area</option>
                  {areas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Referral Code */}
              <div className="md:col-span-2">
                <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Referral Code (Optional)
                </label>
                <input
                  id="referralCode"
                  name="referralCode"
                  type="text"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Enter referral code to get ₹50 credit"
                />
              </div>

              {/* Barber-specific fields */}
              {userType === 'barber' && (
                <>
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-dark-900 mb-4 mt-6">Professional Information</h3>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Languages Spoken
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {languages.map(language => (
                        <label key={language} className="flex items-center">
                          <input
                            type="checkbox"
                            value={language}
                            onChange={(e) => handleCheckboxChange(e, 'languages')}
                            className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{language}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Specialties
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {specialties.map(specialty => (
                        <label key={specialty} className="flex items-center">
                          <input
                            type="checkbox"
                            value={specialty}
                            onChange={(e) => handleCheckboxChange(e, 'specialties')}
                            className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{specialty}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Experience (Optional)
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your experience and training..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Photo
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gold-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/terms" className="text-gold-600 hover:text-gold-500 transition-colors">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-gold-600 hover:text-gold-500 transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating Account...' : `Create ${userType.charAt(0).toUpperCase() + userType.slice(1)} Account`}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-gold-600 hover:text-gold-500 transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;