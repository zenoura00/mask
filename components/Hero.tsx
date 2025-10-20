
import React from 'react';
import { ShieldCheckIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            استعيدي شباب بشرتكِ مع جهاز 
            <span className="text-rose-500"> العلاج الضوئي </span>
            المتطور
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            7 علاجات في جهاز واحد لجميع مشاكل البشرة. احصلي على بشرة نقية، مشدودة، وخالية من العيوب وأنتِ في منزلك.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#buy-now" className="w-full sm:w-auto bg-rose-500 text-white font-bold py-4 px-10 rounded-full hover:bg-rose-600 transition-colors duration-300 shadow-xl text-lg">
              اطلبيه الآن واستفيدي من الخصم
            </a>
          </div>
          <div className="mt-6 flex justify-center md:justify-start items-center space-x-3 space-x-reverse text-green-600 font-semibold">
            <ShieldCheckIcon className="w-6 h-6"/>
            <span>ضمان استرداد الأموال لمدة 60 يومًا</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <img 
              src="https://picsum.photos/id/17/500/500" 
              alt="جهاز العلاج الضوئي" 
              className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
