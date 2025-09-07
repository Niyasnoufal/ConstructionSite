import { useState } from "react";
import { Faqs } from "../data"

const Accordian =({question, answer}) => {
    const[isOpen, setIsOpen] = useState(false);

    const handleClick =() => {
        setIsOpen(!isOpen)
        console.log("accordian openend")
    }

    return (
        <div className="mb-4 rounded-2xl shadow-md overflow-hidden border border-gray-200 w-1/2">
            <button onClick={handleClick} className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors">
                <span>{question}</span>
                {isOpen ? "-" : "+"}
            </button>
           {
            isOpen && (
                <div className="px-4 py-3 text-gray-700 bg-white text-base leading-relaxed">
                    {answer}
                </div>
            )
           }
        </div>
    )
}


const Faq = () => {
  return (
    <section className="py-5 flex flex-col justify-center items-center">
           <h1 className="text-4xl text-textColor my-5">Frequently Asked Question (FAQ's)</h1>
                {
                    Faqs.map((item, i) => (
                       <Accordian
                        key={i}
                        question={item.question}
                        answer={item.answer}
                       />
                    ))
                }
           
    </section>
  )
}

export default Faq
