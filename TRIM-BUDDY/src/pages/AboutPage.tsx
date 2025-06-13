import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  ArrowLeft, 
  Scissors, 
  Users, 
  MapPin, 
  Star,
  Shield,
  Clock,
  Heart,
  Target,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Happy Customers', icon: Users },
    { number: '100+', label: 'Verified Barbers', icon: Scissors },
    { number: '3', label: 'Service Areas', icon: MapPin },
    { number: '4.8★', label: 'Average Rating', icon: Star }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'All our barbers are verified, trained, and background-checked for your peace of mind.'
    },
    {
      icon: Star,
      title: 'Quality Service',
      description: 'We maintain high standards through continuous training and customer feedback.'
    },
    {
      icon: Clock,
      title: 'Convenience',
      description: 'Professional grooming services at your doorstep, scheduled at your convenience.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go the extra mile to exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Ashoka Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Passionate about revolutionizing the grooming industry with technology and convenience.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Ensures smooth operations and maintains quality standards across all services.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Lead Barber Trainer',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Expert barber with 15+ years experience, training our network of professionals.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'TrimBuddy Founded',
      description: 'Started with a vision to bring professional grooming services to homes in Hyderabad.'
    },
    {
      year: '2024',
      title: 'First 100 Barbers',
      description: 'Reached our first milestone of 100 verified barbers across 3 areas.'
    },
    {
      year: '2024',
      title: '500+ Happy Customers',
      description: 'Served over 500 satisfied customers with 4.8+ average rating.'
    },
    {
      year: 'Future',
      title: 'Expansion Plans',
      description: 'Planning to expand to 10+ areas across Hyderabad and other cities.'
    }
  ];

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
            About TrimBuddy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the grooming industry by bringing professional 
            barber services directly to your doorstep, making quality grooming 
            convenient and accessible for everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-full p-4 w-fit mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-gold-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-dark-900 mb-1">{stat.number}</div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <Target className="h-12 w-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                To make professional grooming services accessible, convenient, and affordable 
                for everyone while empowering skilled barbers with flexible earning opportunities. 
                We believe that looking good should be effortless, and everyone deserves access 
                to quality grooming services in the comfort of their own home.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-gold-100 to-gold-50 rounded-full p-6 w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  TrimBuddy was born from a simple observation: getting a quality haircut 
                  or grooming service shouldn't require hours of waiting at a salon or 
                  compromising on quality due to location constraints.
                </p>
                <p>
                  Founded in 2023 in Hyderabad, we started with a mission to connect 
                  skilled barbers with customers who value convenience without compromising 
                  on quality. Our platform empowers barbers to work flexibly while 
                  providing customers with professional services at their doorstep.
                </p>
                <p>
                  Today, we're proud to serve customers across Qairathabad, Dilsukhnagar, 
                  and Uppal, with plans to expand throughout Hyderabad and beyond. Every 
                  haircut, every satisfied customer, and every successful barber partnership 
                  brings us closer to our vision of making quality grooming accessible to all.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Professional barber service"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-4 rounded-xl shadow-lg">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gold-500 text-white rounded-full p-2 flex-shrink-0">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold text-dark-900">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-dark-900 mb-1">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our services or want to join our team? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9663427720"
              className="inline-flex items-center px-6 py-3 bg-gold-600 text-white font-medium rounded-lg hover:bg-gold-700 transition-colors"
            >
              <Users className="h-4 w-4 mr-2" />
              Call: +91 9663427720
            </a>
            <a
              href="mailto:ashoka6031@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Users className="h-4 w-4 mr-2" />
              Email: ashoka6031@gmail.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;