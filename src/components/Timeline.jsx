import { useEffect, useRef, useState } from "react";

const TimelineItem = ({ children, direction = "left" }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full md:w-1/2 px-6 ${
        direction === "left" ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`p-4 bg-textColor text-mainBg rounded-xl shadow-lg inline-block transition-all duration-700 ease-out transform opacity-0
        ${
          visible
            ? "opacity-100 translate-x-0"
            : direction === "left"
            ? "-translate-x-20"
            : "translate-x-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default function Timeline() {
  const events = [
    "Client Discusion",
    "Site Visit",
    "Estimation & Quotation",
    "Planning and Designing",
    "Project Execution",
    "Daily report to Client",
    "Project Completion"
  ];

  return (
    <div className="relative max-w-4xl mx-auto p-6 overflow-x-hidden">
      {/* Vertical center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

      {events.map((event, i) => (
        <div key={i} className="flex flex-col md:flex-row w-full relative mb-12">
          {/* Dot on center line (desktop only) */}
          <span className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-mainBg border-4 border-textColor rounded-full z-10"></span>

          {i % 2 === 0 ? (
            <>
              <TimelineItem direction="left">{event}</TimelineItem>
              <div className="hidden md:block w-1/2"></div>
            </>
          ) : (
            <>
              <div className="hidden md:block w-1/2"></div>
              <TimelineItem direction="right">{event}</TimelineItem>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
