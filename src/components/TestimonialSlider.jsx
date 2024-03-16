import React, { useState, useEffect } from 'react';
import Section from "./Section";

const TestimonialSlider = ({ testimonials, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(intervalId);
    }
  }, [testimonials, interval]);

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available</div>;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full">
            <div className="p-6 w-26 h-66 bg-yellow-200 shadow-md rounded-lg">
              <img src={testimonial.image} alt={testimonial.name} className="w-46 h-16 rounded-full mx-auto mb-4" />
              <p className="text-lg">{testimonial.testimonial}</p>
              <p className="text-gray-600 mt-2">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      testimonial: 'This is a fantastic product! I highly recommend it.',
    },
    // Add more testimonials as needed...
  ];

  return (
    <Section crosses>
      <div className="App">
        <div className="flex flex-wrap">
          <TestimonialSlider testimonials={testimonials} interval={3000} />
          <TestimonialSlider testimonials={testimonials} interval={5000} />
          <TestimonialSlider testimonials={testimonials} interval={7000} />
        </div>
      </div>
    </Section>
  );
};

export default App;
