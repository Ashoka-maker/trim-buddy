import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919663427720'; // Your WhatsApp number
  const message = encodeURIComponent(`Hello 👋, welcome to TrimBuddy! How can we assist you today? ✂️💇

- Book a Barber
- View My Booking  
- Register as Barber
- Cancel / Reschedule

Please let us know how we can help!`);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce-gentle"
      aria-label="Chat with TrimBuddy on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <div className="absolute -top-12 right-0 bg-dark-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with TrimBuddy
      </div>
    </a>
  );
};

export default WhatsAppButton;