import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ImageSwiper = ({ images }) => {
  const [loaded, setLoaded] = useState(false);

  // Wait for images to load
  useEffect(() => {
    const promises = images.map((img) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = img;
        image.onload = resolve;
      });
    });

    Promise.all(promises).then(() => setLoaded(true));
  }, [images]);

  if (!loaded) return <p className="text-center py-20">Loading...</p>;

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
      className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
