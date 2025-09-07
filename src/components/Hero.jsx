import heroImg from "../assets/images/heroImg.jpg"
import rodImg from "../assets/images/pexels-pixabay-46167.jpg"
import heroImg2 from "../assets/images/pexels-fox-58267-1254135.jpg"
import heroImg3 from "../assets/images/pexels-saikat-bhowmik-2148125667-33675462.jpg"
import Button from "../components/Button"
import ImageSwiper from "./ImageSwiper"

const Hero = () => {
  const images = [
    heroImg,
    heroImg2,
    heroImg3,
    rodImg
  ]
  return (
    <section className="heroMain" style={{marginTop:"50px", marginBottom:"50px"}} data-aos="fade-up">
        <div className="heroImg w-full max-w-6xl mx-auto">
            <ImageSwiper images={images} />
        </div>
        <div className="flex flex-col justify-center items-center sm:max-w-screen">
            <h1 className=" text-3xl sm:text-5xl text-textColor capitalize text-center mt-8">Build your dreams now</h1>
            <p className="text-textColor opacity-25 text-center max-w-2xl mx-auto px-4">Sometimes Dreams Come true, it happens at the right time at right place</p>
            <Button name = "Get My Quote" />
            

        </div>
    </section>
  )
}

export default Hero
