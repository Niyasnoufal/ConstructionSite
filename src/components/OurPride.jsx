import civilImg from "../assets/images/heroImg.jpg";
import Button from "../components/Button"

const OurPride = () => {
  return (
   <section className="bg-mainBg pl-5 mt-5 pb-5" >
        <h1 className=" text-3xl sm:text-6xl font-bold text-textColor text-center  mb-4">Why us?</h1>
        <div className="sm:flex sm:justify-around">
            <div className="img" data-aos="fade-left">
                <img src={civilImg} alt="Best civil engineering works" className="w-400 h-full object-cover pb-5"/>
            </div>
            <div className="cont flex flex-col items-center justify-center" data-aos="fade-right">
                <h1 className="text-4xl text-textColor">We have a dream!</h1>
                <h3 className="text-mainbg bg-textColor px-3 mb-2">To make your dream House Come true....</h3>
                <p className="sm:px-5 sm:mx-10 text-sm text-textColor opacity-40">
                    Not because we have done more construction projects and bring hands on experience to the table, we have a dream, helping people to build their own dream house.
                    <span>Houses are not built using brick, gravel, sand or cement may be it is what you see physically.</span> 
                     <span> But,Truly constructing a house means buiding the basement of emotion, which firmly protects the house and brings joy, pride and fulfillness</span>

                </p>
                <Button name="Get Free" />
            </div>
        </div>
   </section>
  )
}

export default OurPride
