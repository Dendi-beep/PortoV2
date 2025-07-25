import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-gray-400">by Dendy Setiawan</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;