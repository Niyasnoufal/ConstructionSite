import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

const plans = ["Basic", "Premium", "Basic Plus"];

const features = [
  { name: "Scheme Drawing: All Floors (2D)", values: [true, true, true] },
  { name: "Furniture Layout: All Floors (2D)", values: [true, true, true] },
  { name: "Elevation Design (3D)", values: [true, true, true] },
  { name: "Electrical Drawings: All Floors (2D)", values: [false, true, true] },
  { name: "Plumbing Drawing: All Floors (2D)", values: [false, true, true] },
  { name: "Working Drawing: All Floors (2D)", values: [false, true, false] },
  { name: "SOIL TESTING REPORT", values: [false, true, true] },
  { name: "STRUCTURAL DRAWINGS", values: [false, true, true] },
  { name: "SITE ASSESSMENT & SITE PLAN", values: [false, true, true] },
  { name: "ELEVATION DETAIL DRAWING (2D)", values: [false, true, true] },
  { name: "HALF LAYOUT: ALL FLOORS (3D)", values: [false, true, true] },
  { name: "INTERIOR VIEWS: ALL ROOMS (3D)", values: [false, true, true] },
  { name: "INTERIOR DETAILING: ALL ROOMS (2D)", values: [false, true, true] },
  { name: "MATERIAL & BRAND SELECTION", values: [false, true, false] },
  { name: "LANDSCAPING ARCHITECTURE DESIGNS", values: [false, true, false] },
  { name: "TOPOGRAPHICAL SURVEY", values: [false, true, false] },
  { name: "APPROVAL DRAWING", values: [false, true, false] },
  { name: "OFFICE VISITS", values: [false, true, true] },
  { name: "CONSTRUCTION QUOTATION", values: [false, true, true] },
  { name: "Interior Quotation", values: [false, true, false] },
];

const Table = () => {
  return (
    <div className="flex justify-center px-4 py-10 ">
      <div className="overflow-x-auto rounded-lg shadow-lg max-w-6xl w-full bg-white p-6">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="bg-gray-100 text-left px-6 py-4 font-semibold text-gray-700">
                Features
              </th>
              {plans.map((plan, i) => (
                <th
                  key={i}
                  className={`px-6 py-4 font-bold text-white text-center ${
                    i === 0
                      ? "bg-teal-600"
                      : i === 1
                      ? "bg-mainBg"
                      : "bg-red-500"
                  }`}
                >
                  {plan}
                  <p className="text-sm font-normal">
                    ₹{[45, 240, 140][i]} per sqft
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {features.map((feature, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="px-6 py-4 text-gray-700 font-medium text-left border">
                  {feature.name}
                </td>
                {feature.values.map((val, i) => (
                  <td key={i} className="px-6 py-4 text-center border">
                    {val ? (
                      <IoCheckmarkSharp className="text-green-500 inline-block text-lg" />
                    ) : (
                      <IoCloseSharp className="text-red-500 inline-block text-lg" />
                    )}
                  </td>
                ))}
              </tr>
            ))}

              <tr className="bg-mainBg text-textColor font-semibold">
                <td className="px-6 py-4 border">Delivery Time</td>
                <td className="px-6 py-4 text-center border">6 Working Days</td>
                <td className="px-6 py-4 text-center border">30 Working Days</td>
                <td className="px-6 py-4 text-center border">20 Working Days</td>
             </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
