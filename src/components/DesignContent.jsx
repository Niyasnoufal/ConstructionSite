import myImg from "../assets/threeDImages/new_home1.jpeg";



import { ArchitectureSteps } from "../data";
const DesignContent = () => {
  return (
    <section className="py-8">
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-8 px-5"
        data-aos="fade-up"
      >
        <div className="flex-shrink-0">
          <img
            src={myImg}
            alt="3d Sketchup drawings"
            className="w-[450px] h-auto object-cover mx-auto sm:mx-0"
          />
        </div>

        <div className="text-center sm:text-left max-w-xl">
          <p className="text-textColor leading-7 text-sm">
            Architectural design is the art and science of shaping spaces where creativity meets functionality, blending modern architecture, sustainable design, and innovative construction techniques to create buildings that inspire and endure.
            </p>
          <p className="text-textColor leading-7 mt-3 text-sm">A powerful design ensures functional buildings with timeless aesthetics, maximizing natural light, enhancing energy     efficiency, and integrating human-centric planning that adapts to both residential and commercial needs.</p>
          <p className="text-textColor leading-7 mt-3 text-sm">By combining innovative spaces, eco-friendly solutions, and structural safety, architectural design delivers future-ready environments that reflect vision, elevate lifestyles, and establish a strong foundation for progress in the built world.</p>
        </div>
      </div>
      <hr className="text-textColor mt-8 w-4/5" />

      <div>
        <h1 className="text-textColor mt-5 text-5xl px-2">
          Best Architecture Practices
        </h1>
        <div>
            <div>
  {ArchitectureSteps.map((item) => (
    <div
      key={item.id}
      className={`flex flex-col sm:flex-row items-center justify-center gap-8 mb-10 ${
        item.id % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
      data-aos="fade-up"
    >

      <div>
        <img
          src={item.img}
          alt={item.title}
          className="w-[300px] h-auto object-cover rounded-lg shadow-md"
          data-aos="fade-right"
        />
      </div>

      <div className="max-w-md text-center sm:text-left" data-aos="fade-left">
        <h1 className="text-xl font-semibold mb-3 text-textColor underline">{item.title}</h1>
        <ul className="space-y-2">
          {item.steps.map((step, i) => (
            <li key={i} className="text-textColor">
            {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default DesignContent;
