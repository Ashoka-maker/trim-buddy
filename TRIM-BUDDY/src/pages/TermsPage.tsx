import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-dark-900 mb-8">Terms & Conditions</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 15, 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using TrimBuddy's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TrimBuddy is a platform that connects customers with professional barbers for home-based 
                grooming services. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Hair cutting and styling</li>
                <li>Beard trimming and styling</li>
                <li>Facial treatments</li>
                <li>Kids haircuts</li>
                <li>Complete grooming packages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">3. User Responsibilities</h2>
              
              <h3 className="text-xl font-medium text-dark-900 mb-3">For Customers:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide accurate contact information and address</li>
                <li>Be present at the scheduled appointment time</li>
                <li>Ensure a safe and appropriate environment for the service</li>
                <li>Make payment as agreed upon booking</li>
                <li>Treat barbers with respect and professionalism</li>
              </ul>

              <h3 className="text-xl font-medium text-dark-900 mb-3">For Barbers:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Maintain professional standards and hygiene</li>
                <li>Arrive punctually for scheduled appointments</li>
                <li>Provide services as described and agreed upon</li>
                <li>Carry proper identification and certification</li>
                <li>Respect customer privacy and property</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">4. Booking and Cancellation Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Booking:</strong> All bookings must be made through the TrimBuddy platform. 
                  Confirmation is subject to barber availability.
                </p>
                <p>
                  <strong>Cancellation by Customer:</strong> Customers may cancel bookings up to 2 hours 
                  before the scheduled time without penalty. Cancellations within 2 hours may incur a 
                  cancellation fee.
                </p>
                <p>
                  <strong>Cancellation by Barber:</strong> Barbers must provide at least 4 hours notice 
                  for cancellations. Emergency cancellations will be handled case by case.
                </p>
                <p>
                  <strong>No-Show Policy:</strong> Customers who are not available at the scheduled time 
                  may be charged the full service fee.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">5. Payment Terms</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Payment can be made via cash, UPI, debit/credit cards, or digital wallets</li>
                <li>Service charges are as displayed on the platform at the time of booking</li>
                <li>Additional charges may apply for premium services or special requests</li>
                <li>Tips are optional and at the customer's discretion</li>
                <li>Refunds will be processed according to our refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">6. Quality Assurance</h2>
              <p className="text-gray-700 leading-relaxed">
                All barbers on our platform are verified and trained professionals. However, TrimBuddy 
                acts as a facilitator and does not directly provide the services. We encourage customers 
                to rate and review services to maintain quality standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">7. Liability and Insurance</h2>
              <p className="text-gray-700 leading-relaxed">
                TrimBuddy maintains appropriate insurance coverage. However, customers and barbers are 
                responsible for their own safety and any personal belongings. TrimBuddy is not liable 
                for any damages, injuries, or losses that may occur during service provision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">8. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We respect your privacy and are committed to protecting your personal data. Please refer 
                to our Privacy Policy for detailed information on how we collect, use, and protect your 
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">9. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from the use of TrimBuddy services will be resolved through 
                mediation. If mediation fails, disputes will be subject to the jurisdiction of 
                Hyderabad courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">10. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                TrimBuddy reserves the right to modify these terms at any time. Users will be notified 
                of significant changes via email or platform notifications. Continued use of the service 
                constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">11. Contact Information</h2>
              <div className="text-gray-700 space-y-2">
                <p>For questions about these Terms & Conditions, please contact us:</p>
                <p><strong>Email:</strong> legal@trimbuddy.com</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
                <p><strong>Address:</strong> TrimBuddy Technologies, Hyderabad, Telangana, India</p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              By using TrimBuddy's services, you acknowledge that you have read, understood, and agree 
              to be bound by these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;