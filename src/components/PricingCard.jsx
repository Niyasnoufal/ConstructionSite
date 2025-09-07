import { PricingData } from "../data"
import { MdWorkspacePremium } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";



const PricingCard = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-x-8" >
        {
            PricingData.map((item) => (
            
             
                <div className={`w-[300px] ${item.id % 2 === 0 ? "scale-125 bg-mainBg text-amber-200 border-3 border-amber-200" : "bg-textColor border-2 border-mainBg main-Bg "} h-[400px] rounded-2xl sm:mt-[50px] mb-[100px] shadow-md `} key={item.id}>
                    <h1 className="text-3xl py-2  capitalize font-bold flex justify-center">{item.name}
                       <span>{
                        item.id === 2 && <MdWorkspacePremium />
                        }
                        </span></h1>
                    <p className="text-2xl px-5 font-bold text-center">{item.Price}/sqft</p>
                    <ul className="mt-5">
                      {item.Offers.map((listItem, index) => (
                       
                        <li key={index} className="px-3 text-sm flex items-center gap-x-6 leading-7">
                          <span><IoCheckmarkCircleSharp /></span>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                </div>
            ))
        }
    </div>
  )
}

export default PricingCard
