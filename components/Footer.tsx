
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} AuraLight. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center space-x-4 space-x-reverse mt-4">
          <a href="#" className="hover:text-rose-500">سياسة الخصوصية</a>
          <span>|</span>
          <a href="#" className="hover:text-rose-500">شروط الخدمة</a>
          <span>|</span>
          <a href="#" className="hover:text-rose-500">اتصل بنا</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
