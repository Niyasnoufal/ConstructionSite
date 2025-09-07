import { useState } from "react";
import heroVid from "../assets/video/workers.mp4";
import Button from "./Button";
import Timeline from "./Timeline";
import ColmImg from "../assets/images/Column-Exa.jpeg";
import ColmMark from "../assets/images/column_marking2.jpeg";
import colMark2 from "../assets/images/Column-marking.jpeg";
import partWall from "../assets/images/Partition-Wall2.jpeg";
import plasterImg1 from "../assets/images/plastering work.jpeg";
import plasterImg2 from "../assets/images/plastering work1.jpeg";


const Construction = () => {
    const [videoReady, setVideoReady] = useState(false);
  return (
    <section > 
        <h1 className="text-textColor text-3xl sm:text-5xl text-center py-5">Home Constructions</h1>
           <div className="relative w-full h-screen  flex justify-center items-center">
      {!videoReady && (
        <div className="flex space-x-2 text-6xl">
          <span className="animate-bounce text-white ">.</span>
          <span className="animate-bounce animation-delay-200 text-white ">.</span>
          <span className="animate-bounce animation-delay-400 text-white ">.</span>
        </div>
      )}

      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => setVideoReady(true)}
      >
        <source src={heroVid} type="video/mp4" />
      </video>
    </div>

        <div>
             <h2 className="text-2xl sm:text-4xl text-textColor text-center my-5">Our 7 Step Process</h2>   
            <Timeline/>
        </div>
        <div className="mt-8 sm:flex justify-center sm:items-center gap-x-8">
            <div className="wrapper">
                <div className="wrapOne col-span-1 row-start-1 row-end-3">
                    <img src={ColmMark} alt="construction column marking" className="w-full h-full object-cover"/>
                </div>
                <div className="wrapTwo col-start-2 col-end-4 row-start-1 row-end-3">
                    <img src={colMark2} alt="construction column marking" className="w-full h-full object-cover"/>
                </div>
                <div className="wrapThree col-start-1 col-end-3">
                    <img src={ColmImg} alt="construction column marking and detailing" className="w-full h-full object-cover" />
                </div>
                <div className="wrapFour">
                    <img src={partWall} alt="plastering wall" className="w-full h-full object-cover"/>
                </div>
                <div className="wrapFive col-span-2 row-span-2">
                    <img src={plasterImg1} alt="plastering wall with pure cement" className="w-full h-full object-cover" />
                </div>
                
                <div className="wrapSix row-span-3 ">
                    <img src={plasterImg2} alt="plastering wall with pure cement with m25 grade" className="w-full h-full object-cover" />
                </div>
                <div className="w-full bg-textColor col-span-2">
                </div>
            </div>
            <div className="text-textColor text-center mt-8" data-aos="fade-right">
                <h5 className="text-xl sm:text-4xl ">Construction works done </h5>
                <p className="text-sm px-5">The development projects are very much intrested, Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, praesentium!</p>
                 <div className="flex justify-center">
                <Button name="Start your plan"/>
            </div>
            </div>
           
        </div>
    
    </section>
  )
}

export default Construction
