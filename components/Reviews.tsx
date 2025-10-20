
import React from 'react';
import { StarIcon } from './Icons';

const reviews = [
  {
    name: 'سارة عبدالله',
    review: '"رائع! لاحظت فرقًا كبيرًا في نضارة بشرتي وتقليل الخطوط الدقيقة بعد أسابيع قليلة فقط من الاستخدام. أنصح به بشدة."',
    rating: 5,
    image: 'https://picsum.photos/id/237/100/100',
  },
  {
    name: 'نورة خالد',
    review: '"كنت أعاني من حب الشباب المستمر، والضوء الأزرق كان بمثابة المنقذ. بشرتي أصبحت أصفى بكثير. شكرًا لكم!"',
    rating: 5,
    image: 'https://picsum.photos/id/238/100/100',
  },
  {
    name: 'فاطمة أحمد',
    review: '"أفضل استثمار قمت به لبشرتي. سهل الاستخدام والنتائج حقيقية. ضمان استرداد الأموال أعطاني الثقة للشراء."',
    rating: 5,
    image: 'https://picsum.photos/id/239/100/100',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex justify-center space-x-1 space-x-reverse">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900">ماذا يقول عملاؤنا؟</h2>
          <p className="mt-4 text-lg text-gray-600">
            نحن فخورون بالنتائج التي يحققها عملاؤنا. هذه بعض من تجاربهم.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center flex flex-col items-center">
              <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full mb-4 border-4 border-rose-200" />
              <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
              <div className="my-3">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-600 flex-grow">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
