import { useState, useRef } from "react";
import { testimonialData } from "../data";
import Card from "./Card";
import { TbMathLower } from "react-icons/tb";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
  };

  // Touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Touch move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Touch end
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  return (
    <section className="relative pb-5 flex flex-col justify-center items-center bg-bluebg pt-10">
      <h1 className="text-3xl sm:text-5xl underline text-center mb-6">
        Testimonials
      </h1>

      {/* Outer container */}
      <div className="w-full max-w-[600px] h-[400px] overflow-hidden relative bg-mainBg rounded-lg shadow-md">
        {/* Inner container for sliding */}
        <ul
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonialData.map((item, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-full h-[400px] flex justify-center items-center relative px-4"
            >
              <span className="text-bluebg absolute top-4 left-6 text-6xl select-none z-40">
                “
              </span>
              <Card item={item} />
              <span className="text-bluebg absolute bottom-4 right-6 text-6xl select-none">
                ”
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex p-4 bg-mainBg absolute sm:left-5 top-1/2 -translate-y-1/2 rounded-full shadow"
      >
        <TbMathLower className="text-textColor" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex p-4 bg-mainBg rotate-180 absolute sm:right-5 top-1/2 -translate-y-1/2 rounded-full shadow"
      >
        <TbMathLower className="text-textColor" />
      </button>
    </section>
  );
};

export default Testimonial;
