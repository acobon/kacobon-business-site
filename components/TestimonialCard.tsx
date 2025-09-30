
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex-grow">
        <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
      </div>
      <div>
        <p className="font-bold text-primary">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
