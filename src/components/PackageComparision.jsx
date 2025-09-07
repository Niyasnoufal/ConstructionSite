import { useState } from "react";
import { packages } from "../data";

const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg mb-3 shadow-sm w-full">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 bg-gray-100 font-semibold text-gray-800"
      >
        {title}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const PackageComparison = () => {
  const plans = ["Basic", "BasicPlus", "Premium"];
  const [activeId, setActiveId] = useState(null); 

  return (
    <div className="flex justify-center items-start w-full min-h-screen py-10">
      <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col items-center">
        {packages.map((pkg) => (
          <Accordion
            key={pkg.id}
            title={pkg.title}
            isOpen={activeId === pkg.id}
            onClick={() => setActiveId(activeId === pkg.id ? null : pkg.id)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan}
                  className="border rounded-lg shadow-sm p-4 bg-gray-50"
                >
                  <h3 className="text-md font-semibold text-blue-600 mb-2">
                    {plan}
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {pkg.plans[plan].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default PackageComparison;
