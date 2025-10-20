
import React from 'react';
import { ShieldCheckIcon } from './Icons';

const Guarantee: React.FC = () => {
  return (
    <section className="bg-rose-50 py-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <ShieldCheckIcon className="w-24 h-24 text-rose-500" />
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-3xl font-extrabold text-gray-900">
              ضماننا الذهبي لاسترداد الأموال بنسبة 100%
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              نحن واثقون تمامًا من فعالية منتجنا. جربيه لمدة 60 يومًا بدون أي مخاطرة. إذا لم تحصلي على النتائج التي تتوقعينها، قومي بإرجاعه وسنعيد لكِ كامل المبلغ المدفوع. رضاكِ هو أولويتنا.
            </p>
            <a href="#buy-now" className="mt-6 inline-block bg-gray-800 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-900 transition-colors duration-300">
              اطلبيه الآن بدون مخاطرة
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
