import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="prose prose-lg max-w-none">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-full p-6 w-fit mx-auto mb-6">
              <Shield className="h-12 w-12 text-gold-600" />
            </div>
            <h1 className="text-3xl font-bold text-dark-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              <strong>Last updated:</strong> January 15, 2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Eye className="h-8 w-8 text-gold-600 mx-auto mb-3" />
              <h3 className="font-semibold text-dark-900 mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">We're clear about what data we collect and why</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Lock className="h-8 w-8 text-gold-600 mx-auto mb-3" />
              <h3 className="font-semibold text-dark-900 mb-2">Security</h3>
              <p className="text-sm text-gray-600">Your data is protected with industry-standard security</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-8 w-8 text-gold-600 mx-auto mb-3" />
              <h3 className="font-semibold text-dark-900 mb-2">Control</h3>
              <p className="text-sm text-gray-600">You have control over your personal information</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-dark-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use TrimBuddy, we collect information that you provide directly to us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Account Information:</strong> Name, email address, phone number, and password</li>
                <li><strong>Profile Information:</strong> Profile photo, service preferences, and location</li>
                <li><strong>Booking Information:</strong> Service details, appointment times, and addresses</li>
                <li><strong>Payment Information:</strong> Payment method details (processed securely by our payment partners)</li>
                <li><strong>Communication:</strong> Messages, reviews, and feedback you provide</li>
              </ul>

              <h3 className="text-xl font-medium text-dark-900 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system, and browser information</li>
                <li><strong>Usage Data:</strong> How you interact with our platform and services</li>
                <li><strong>Location Data:</strong> Approximate location to match you with nearby barbers</li>
                <li><strong>Cookies:</strong> Small data files to improve your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Process and manage your bookings and appointments</li>
                <li>Connect you with suitable barbers in your area</li>
                <li>Process payments and send transaction confirmations</li>
                <li>Send important updates about your bookings</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our platform and develop new features</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-medium text-dark-900 mb-3">With Service Providers</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Barbers you book services with (name, phone, address for the appointment)</li>
                <li>Payment processors to handle transactions</li>
                <li>SMS and email service providers for notifications</li>
                <li>Analytics providers to improve our services</li>
              </ul>

              <h3 className="text-xl font-medium text-dark-900 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required by law, court order, or to protect the 
                rights, property, or safety of TrimBuddy, our users, or others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure payment processing through certified providers</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several rights regarding your personal information:
              </p>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-dark-900">Access and Update</h4>
                  <p>You can access and update your account information through your profile settings.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark-900">Data Portability</h4>
                  <p>You can request a copy of your personal data in a structured, machine-readable format.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark-900">Deletion</h4>
                  <p>You can request deletion of your account and personal data, subject to legal requirements.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark-900">Marketing Communications</h4>
                  <p>You can opt out of promotional emails by clicking the unsubscribe link or contacting us.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark-900">Location Data</h4>
                  <p>You can disable location services through your device settings.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services 
                and fulfill the purposes outlined in this policy. We may retain certain information 
                for longer periods as required by law or for legitimate business purposes such as 
                fraud prevention and safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                TrimBuddy is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected personal information from a child under 13, we will take steps to delete 
                such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your personal information in 
                accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">9. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze how our platform is used</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure platform security</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings, but some features may not 
                function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on our platform and sending you an email 
                notification. Your continued use of TrimBuddy after such changes constitutes acceptance 
                of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-900 mb-4">11. Contact Us</h2>
              <div className="text-gray-700 space-y-2">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@trimbuddy.com</p>
                  <p><strong>Phone:</strong> +91 9876543210</p>
                  <p><strong>Address:</strong> TrimBuddy Technologies, Hyderabad, Telangana, India</p>
                  <p><strong>Data Protection Officer:</strong> dpo@trimbuddy.com</p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-gold-50 to-gold-100 rounded-lg border border-gold-200">
            <h3 className="font-semibold text-dark-900 mb-2">Your Privacy Matters</h3>
            <p className="text-sm text-gray-700">
              We are committed to protecting your privacy and being transparent about our data practices. 
              If you have any concerns or questions, please don't hesitate to reach out to us.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;