import React from 'react';
// import { Quote } from 'lucide-react';
import { TfiAngleRight } from "react-icons/tfi";
const subFooter  = () => { 
  const testimonials = [
    {
      text: "ACE, carries a powerful and inspiring message, by associating it with the concept ACE.We're not just selling clothing but selling a mindset, lifestyle, and a symbol of strength, confidence, amd excellence.",
      author: "ACE",
      position: "CEO, ACE FASHION CONCEPTS"
    },
    {
      text: "ACE is more than clothing, it's a symbol of strength, confidence and the drive to be the best. When you wear ACE, you're not just wearing a brand but embodying the spirit of ACE.",
      author: "David Keener",
      position: "CEO, Premiere Group"
    },
    {
      text: "Professional, responsive, and highly skilled. Would definitely recommend to anyone looking for quality solutions.",
      author: "Sophia Richards",
      position: "Founder, InnovateCo"
    }
  ];

  return (
    <div className="mt-24 px-4 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h3 className="font-bold text-4xl">
          <span className="text-[#223D12]">ABOUT</span>
          {' '}
          <span className="text-[#008413]">ACE FASHION</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            {/* <Quote className="text-[#008413] mb-4" size={32} aria-label="Quote Icon" /> */}
            
            <p className="font-semibold text-gray-700 mb-6">
              {testimonial.text}
            </p>
            
            <div className="border-t pt-4">
              <p className="font-bold text-gray-900 mt-4">
                {testimonial.author}
              </p>
              <p className="text-gray-600 mt-1">
                {testimonial.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {/* <button 
          className="bg-[rgb(34,61,18)] px-6 py-2 sm:px-8 sm:py-3 rounded text-white font-semibold flex"
          aria-label="See more customer reviews"
        >
          See More Reviews
           <TfiAngleRight className="text-lg mt-1 ms-3  " />
        </button> */}
      </div>
    </div>
  );
};

export default subFooter;
