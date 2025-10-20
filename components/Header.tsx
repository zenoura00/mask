
import React from 'react';
import { LogoIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 space-x-reverse">
          <LogoIcon className="w-8 h-8 text-rose-500" />
          <h1 className="text-xl font-bold text-gray-800">AuraLight</h1>
        </div>
        <a 
          href="#buy-now" 
          className="bg-rose-500 text-white font-bold py-2 px-6 rounded-full hover:bg-rose-600 transition-colors duration-300 shadow-lg"
        >
          اطلب الآن
        </a>
      </div>
    </header>
  );
};

export default Header;
