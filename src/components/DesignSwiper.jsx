
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';


const DesignSwiper = ({threeDImg}) => {
 
    
  return (
    <Swiper
        modules={[ Navigation ]}
        slidesPerView={3}
        navigation
        loop={false}

    >   
    {
      threeDImg.map((img, index) => (
            <SwiperSlide key={index}>
                <img src={img} alt="best home 3d designs" className="w-200 h-full object-cover hover:scale-120 transition delay-100 ease-in-out" />
            </SwiperSlide>
        ))
    }
        
    </Swiper>
  )
}

export default DesignSwiper
