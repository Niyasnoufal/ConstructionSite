import Flrpln from "../assets/images/floorplan.jpg";
import sitePlan2 from "../assets/images/siteplan3.jpg";
import plumbing2 from "../assets/images/plumbing1.jpg";
import Electrical from "../assets/images/Electrical-drawing1.jpg";
import villa1 from "../assets/threeDImages/designs_3d.jpg";
import villa2 from "../assets/threeDImages/luxury_villa1.jpeg";
import villa3 from  "../assets/threeDImages/designs5_3d.jpg";
import villa4 from "../assets/threeDImages/designs7_3d.jpg";
import villa5 from "../assets/threeDImages/luxury_villa2.jpeg";
import { useState } from "react";
import DesignSwiper from "./DesignSwiper";

const DesignPlan = () => {
  const images = [Flrpln, sitePlan2, plumbing2, Electrical];

  const threeDImg = [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5,
  ]

  // default: show first image
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <section>
      <h1 className="text-textColor text-4xl pt-5 text-center">
        Best Architectural Designs
      </h1>

      {/* Gallery */}
      <div className="flex flex-col items-center gap-4 mt-6">
        {/* Main Image */}
        <div className="w-full sm:w-[500px] h-[400px] border-2 border-gray-300">
          <img
            src={images[selectedImg]}
            alt="Best civil engineers"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 sm:flex gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`w-[80px] h-[80px] object-cover cursor-pointer border-2 rounded-md ${
                selectedImg === index ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => setSelectedImg(index)}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-center py-3 text-3xl sm:text-5xl text-textColor ">Top Notch 3d Designs</h2>
          <DesignSwiper threeDImg={threeDImg} />
      </div>
    </section>
  );
};

export default DesignPlan;
