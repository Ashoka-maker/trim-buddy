import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, Loader, Mail, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const EmailVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading');
  const [message, setMessage] = useState('');
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setVerificationStatus('error');
      setMessage('Invalid verification link. Please check your email for the correct link.');
      return;
    }

    // Simulate email verification API call
    const verifyEmail = async () => {
      try {
        // In a real app, this would be an API call to your backend
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
        
        // Mock verification logic
        if (token === 'expired') {
          setVerificationStatus('expired');
          setMessage('This verification link has expired. Please request a new one.');
        } else if (token.length > 10) {
          setVerificationStatus('success');
          setMessage('Your email has been successfully verified! You can now log in to your account.');
        } else {
          setVerificationStatus('error');
          setMessage('Invalid verification token. Please check your email for the correct link.');
        }
      } catch (error) {
        setVerificationStatus('error');
        setMessage('An error occurred during verification. Please try again later.');
      }
    };

    verifyEmail();
  }, [token]);

  const resendVerificationEmail = async () => {
    try {
      // In a real app, this would trigger a new verification email
      console.log('Resending verification email...');
      alert('A new verification email has been sent to your email address.');
    } catch (error) {
      console.error('Error resending verification email:', error);
      alert('Failed to resend verification email. Please try again later.');
    }
  };

  const getStatusIcon = () => {
    switch (verificationStatus) {
      case 'loading':
        return <Loader className="h-16 w-16 text-blue-500 animate-spin" />;
      case 'success':
        return <CheckCircle className="h-16 w-16 text-green-500" />;
      case 'error':
      case 'expired':
        return <XCircle className="h-16 w-16 text-red-500" />;
      default:
        return <Mail className="h-16 w-16 text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch (verificationStatus) {
      case 'loading':
        return 'text-blue-600';
      case 'success':
        return 'text-green-600';
      case 'error':
      case 'expired':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusTitle = () => {
    switch (verificationStatus) {
      case 'loading':
        return 'Verifying Your Email...';
      case 'success':
        return 'Email Verified Successfully!';
      case 'error':
        return 'Verification Failed';
      case 'expired':
        return 'Link Expired';
      default:
        return 'Email Verification';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex justify-center mb-6">
              {getStatusIcon()}
            </div>
            
            <h2 className={`text-3xl font-bold mb-4 ${getStatusColor()}`}>
              {getStatusTitle()}
            </h2>
            
            <p className="text-gray-600 mb-8">
              {message}
            </p>

            {verificationStatus === 'success' && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-700">
                    🎉 Welcome to TrimBuddy! Your account is now active and ready to use.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/login"
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all text-center"
                  >
                    Sign In Now
                  </Link>
                  <Link
                    to="/book-service"
                    className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all text-center"
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            )}

            {(verificationStatus === 'error' || verificationStatus === 'expired') && (
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-700">
                    Don't worry! You can request a new verification email below.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={resendVerificationEmail}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all"
                  >
                    Resend Verification Email
                  </button>
                  <Link
                    to="/signup"
                    className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all text-center"
                  >
                    Sign Up Again
                  </Link>
                </div>
              </div>
            )}

            {verificationStatus === 'loading' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  Please wait while we verify your email address...
                </p>
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>Need help?</p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:ashoka6031@gmail.com"
                className="text-gold-600 hover:text-gold-700 transition-colors"
              >
                Email Support
              </a>
              <span>•</span>
              <a
                href="https://wa.me/919663427720"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:text-gold-700 transition-colors"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;