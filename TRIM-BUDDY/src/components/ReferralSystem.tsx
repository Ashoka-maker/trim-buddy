import React, { useState } from 'react';
import { Copy, Gift, Users, Check } from 'lucide-react';

interface ReferralSystemProps {
  userType: 'customer' | 'barber';
  userId: string;
}

const ReferralSystem: React.FC<ReferralSystemProps> = ({ userType, userId }) => {
  const [copied, setCopied] = useState(false);
  
  // Generate referral code based on user ID and type
  const referralCode = `TB${userType.toUpperCase().slice(0, 1)}${userId.slice(-4)}`;
  const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(
      `🎉 Join TrimBuddy with my referral code and get ₹50 credit! 

Use code: ${referralCode}
Or click: ${referralLink}

TrimBuddy - Professional barber services at your doorstep! ✂️💇`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-6 border border-gold-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-gold-500 p-2 rounded-full">
          <Gift className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-dark-900">Refer & Earn</h3>
          <p className="text-sm text-gray-600">Invite friends and earn ₹50 credit each!</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Referral Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Referral Code
          </label>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 font-mono text-lg font-semibold text-center text-gold-600">
              {referralCode}
            </div>
            <button
              onClick={() => copyToClipboard(referralCode)}
              className="p-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
              title="Copy code"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Referral Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Referral Link
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
            <button
              onClick={() => copyToClipboard(referralLink)}
              className="p-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
              title="Copy link"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="flex space-x-3">
          <button
            onClick={shareOnWhatsApp}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
          >
            Share on WhatsApp
          </button>
          <button
            onClick={() => copyToClipboard(`Use my TrimBuddy referral code: ${referralCode} and get ₹50 credit!`)}
            className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            Copy Message
          </button>
        </div>

        {/* Referral Stats */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h4 className="font-medium text-dark-900 mb-3 flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Referral Stats
          </h4>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gold-600">5</div>
              <div className="text-xs text-gray-500">Friends Referred</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">₹250</div>
              <div className="text-xs text-gray-500">Credits Earned</div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="text-xs text-gray-600 space-y-1">
          <p className="font-medium">How it works:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Share your referral code with friends</li>
            <li>They sign up using your code</li>
            <li>Both of you get ₹50 credit</li>
            <li>Credits can be used for bookings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReferralSystem;