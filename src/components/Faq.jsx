import { useState } from "react";
import { Faqs } from "../data";

const Accordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 rounded-2xl shadow-md overflow-hidden border border-gray-200 w-full">
  
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? "−" : "+"}
      </button>

     
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 text-gray-700 bg-white text-base leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-textColor my-5 text-center">
        Frequently Asked Question (FAQ's)
      </h1>

      
      <div className="w-full lg:w-1/2 px-4">
        {Faqs.map((item, i) => (
          <Accordion
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onClick={() => toggleAccordion(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
