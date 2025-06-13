import React, { useState, useEffect } from 'react';
import { X, Gift, Clock, Star } from 'lucide-react';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  type: 'discount' | 'referral' | 'new-user' | 'seasonal';
  isActive: boolean;
}

const OfferBanner = () => {
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Mock offers data - in real app, this would come from API/admin panel
  const offers: Offer[] = [
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
    },
    {
      id: '3',
      title: '⭐ Premium Package',
      description: 'Full grooming package at special price',
      discount: '₹100 OFF',
      validUntil: '2024-02-15',
      type: 'seasonal',
      isActive: true
    }
  ];

  useEffect(() => {
    // Get active offers
    const activeOffers = offers.filter(offer => offer.isActive);
    if (activeOffers.length > 0) {
      // Rotate through offers every 5 seconds
      let currentIndex = 0;
      setCurrentOffer(activeOffers[0]);

      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % activeOffers.length;
        setCurrentOffer(activeOffers[currentIndex]);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  const getOfferIcon = (type: string) => {
    switch (type) {
      case 'discount':
        return <Gift className="h-5 w-5" />;
      case 'referral':
        return <Star className="h-5 w-5" />;
      case 'seasonal':
        return <Clock className="h-5 w-5" />;
      default:
        return <Gift className="h-5 w-5" />;
    }
  };

  const getOfferColor = (type: string) => {
    switch (type) {
      case 'discount':
        return 'from-purple-500 to-purple-600';
      case 'referral':
        return 'from-gold-500 to-gold-600';
      case 'seasonal':
        return 'from-green-500 to-green-600';
      case 'new-user':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-gold-500 to-gold-600';
    }
  };

  if (!currentOffer || !isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r ${getOfferColor(currentOffer.type)} text-white py-3 px-4 shadow-lg`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <div className="bg-white/20 p-2 rounded-full">
            {getOfferIcon(currentOffer.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-lg">{currentOffer.title}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                {currentOffer.discount}
              </span>
            </div>
            <p className="text-sm opacity-90">{currentOffer.description}</p>
          </div>
          <div className="hidden md:block text-sm opacity-90">
            Valid until: {new Date(currentOffer.validUntil).toLocaleDateString()}
          </div>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close offer banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      {/* Animated progress bar for offer rotation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-white/40 animate-pulse" style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default OfferBanner;