
import React from 'react';
import { ZapIcon, SparklesIcon, TargetIcon, ClockIcon } from './Icons';

const features = [
  {
    icon: <ZapIcon className="w-10 h-10 text-rose-500" />,
    title: '7 ألوان علاجية',
    description: 'كل لون يستهدف مشكلة بشرة محددة، من التجاعيد إلى حب الشباب.',
  },
  {
    icon: <SparklesIcon className="w-10 h-10 text-rose-500" />,
    title: 'نتائج احترافية',
    description: 'احصلي على نتائج تضاهي جلسات العيادات التجميلية بتكلفة أقل.',
  },
  {
    icon: <TargetIcon className="w-10 h-10 text-rose-500" />,
    title: 'آمن وفعّال',
    description: 'تقنية غير جراحية، آمنة لجميع أنواع البشرة ومناسبة للاستخدام المنزلي.',
  },
  {
    icon: <ClockIcon className="w-10 h-10 text-rose-500" />,
    title: 'سهل الاستخدام',
    description: 'جلسات قصيرة مدتها 10-15 دقيقة فقط، 3-4 مرات في الأسبوع.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
