
import React from 'react';
import { CheckCircleIcon } from './Icons';

const featuresIncluded = [
  'جهاز العلاج الضوئي X7',
  'كابل شحن USB',
  'دليل المستخدم الكامل',
  'وصول حصري لمجتمعنا',
];

const CallToAction: React.FC = () => {
  return (
    <section id="buy-now" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">هل أنتِ مستعدة لبشرة أحلامك؟</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          انضمي لآلاف النساء اللواتي غيرن روتين العناية ببشرتهن. اطلبي جهازكِ اليوم وابدئي رحلتك نحو بشرة أكثر شبابًا ونضارة.
        </p>

        <div className="mt-12 max-w-2xl mx-auto bg-white text-gray-800 rounded-3xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                     <img 
                      src="https://picsum.photos/id/106/400/400" 
                      alt="محتويات العلبة" 
                      className="rounded-2xl shadow-lg"
                    />
                </div>
                <div className="text-right">
                    <h3 className="text-2xl font-bold mb-4">ماذا ستحصلين عليه:</h3>
                    <ul className="space-y-3">
                        {featuresIncluded.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3 space-x-reverse">
                                <CheckCircleIcon className="w-6 h-6 text-green-500"/>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-center items-baseline my-4">
              <span className="text-gray-500 line-through text-2xl mr-2">1200 ر.س</span>
              <span className="text-5xl font-extrabold text-rose-500">799 ر.س</span>
            </div>
            <p className="text-green-600 font-semibold mb-6">عرض لفترة محدودة! خصم 33% + شحن مجاني</p>
            <button className="w-full bg-rose-500 text-white font-bold py-4 px-10 rounded-full hover:bg-rose-600 transition-colors duration-300 shadow-xl text-xl animate-pulse">
              أضيفي إلى السلة - الدفع الآمن
            </button>
             <p className="text-sm text-gray-500 mt-4">شحن سريع لجميع مناطق المملكة. الدفع عند الاستلام متوفر.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
