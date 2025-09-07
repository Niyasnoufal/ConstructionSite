import { useState } from "react";
import { testimonialData } from "../data";
import Card from "./Card";
import { TbMathLower } from "react-icons/tb";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const[touchStartX, setTouchStartX] = useState(0);
  const[touchEndX, setTouchEndX] = useState(0);

  

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

//   Touch start
const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
}
// Touch move

const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX)
}

// Touch End

const handleTouchEnd = () => {
    if(touchStartX - touchEndX > 50) {
        nextSlide()
    }
    if(touchEndX - touchStartX > 50) {
        prevSlide()
    }
}



  return (
    <section className="relative pb-5 flex justify-center items-center bg-bluebg pt-10">
        <div className="absolute top-5">
            <h1 className="text-5xl underline" >Testimonials</h1>
        </div>
        
      {/* Outer container */}
      <div className="w-[600px] h-[400px] overflow-hidden relative bg-mainBg mt-8">
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
              className="flex-shrink-0 w-[600px] h-[400px] flex justify-center items-center relative"
            >
              <span className="text-bluebg absolute top-4 left-6 text-6xl select-none z-40">
                “
              </span>
              <Card item={item} className="flex" />
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
        className="hidden sm:flex p-4 bg-mainBg absolute sm:left-5 top-1/2 -translate-y-1/2 h rounded-full"
      >
        <TbMathLower className="text-textColor" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex p-4 bg-mainBg rotate-180 absolute sm:right-5 top-1/2 -translate-y-1/2  rounded-full"
      >
        <TbMathLower className="text-textColor" />
      </button>
    </section>
  );
};

export default Testimonial;
