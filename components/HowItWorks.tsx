
import React, { useState } from 'react';

const lightTreatments = [
  {
    color: 'الأحمر',
    tailwind: 'rose',
    title: 'مكافحة الشيخوخة',
    description: 'يحفز إنتاج الكولاجين، يقلل التجاعيد والخطوط الدقيقة، ويعزز مرونة البشرة.',
  },
  {
    color: 'الأزرق',
    tailwind: 'blue',
    title: 'محاربة حب الشباب',
    description: 'يقتل البكتيريا المسببة لحب الشباب، يقلل الالتهابات، وينقي المسام.',
  },
  {
    color: 'الأخضر',
    tailwind: 'green',
    title: 'توحيد لون البشرة',
    description: 'يقلل التصبغات والبقع الداكنة، يهدئ البشرة، ويحسن مظهرها العام.',
  },
  {
    color: 'الأصفر',
    tailwind: 'yellow',
    title: 'تقليل الاحمرار',
    description: 'يهدئ البشرة الحساسة، يحسن الدورة الدموية، ويخفف من الاحمرار والتهيج.',
  },
  {
    color: 'البنفسجي',
    tailwind: 'purple',
    title: 'تجديد الخلايا',
    description: 'يجمع بين فوائد الضوء الأحمر والأزرق، يساعد على إصلاح البشرة وشفاء الندبات.',
  },
  {
    color: 'السماوي',
    tailwind: 'cyan',
    title: 'تعزيز الطاقة',
    description: 'يعزز طاقة الخلايا ويسرّع عملية الأيض في البشرة، مما يمنحها نضارة وحيوية.',
  },
  {
    color: 'الأبيض',
    tailwind: 'gray',
    title: 'اختراق عميق',
    description: 'يخترق البشرة بعمق لتسريع تجديد الأنسجة، شد البشرة، وتحسين مظهرها.',
  },
];

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeTreatment = lightTreatments[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900">كيف يعمل الجهاز؟</h2>
          <p className="mt-4 text-lg text-gray-600">
            يستخدم جهازنا تقنية LED المتقدمة بأطوال موجية مختلفة لاستهداف مشاكل البشرة من الأعماق. اختر اللون المناسب لاحتياجك.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {lightTreatments.map((treatment, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index 
                  ? `bg-${treatment.tailwind}-500 text-white shadow-lg` 
                  : `bg-gray-200 text-gray-700 hover:bg-${treatment.tailwind}-100`
              }`}
            >
              الضوء {treatment.color}
            </button>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
           <div className={`bg-gradient-to-br from-${activeTreatment.tailwind}-50 to-${activeTreatment.tailwind}-100 p-8 rounded-3xl shadow-xl transition-all duration-500`}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-right">
                        <h3 className={`text-3xl font-bold text-${activeTreatment.tailwind}-600`}>
                          {activeTreatment.title}
                        </h3>
                        <p className="mt-4 text-gray-700 text-lg">
                           {activeTreatment.description}
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={`https://picsum.photos/seed/${activeTreatment.color}/300/300`} alt={activeTreatment.title} className="rounded-2xl shadow-lg"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
