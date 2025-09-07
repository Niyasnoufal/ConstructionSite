import DesignPricing from "../components/DesignPricing"
import PricingCont from "../components/PricingCont"


const Pricing = () => {
  return (
    <div>
      <div>
         <PricingCont />
         <hr className="text-textColor w-4/5 mt-5"/>
      </div>
      <div>
        <div className="flex justify-center items-center">
        <h1 className="text-3xl text-center my-5 py-3 text-mainBg bg-textColor w-100">Architectural Package</h1>

        </div>
           <DesignPricing />
            <hr className="text-textColor w-4/5 mt-5"/> 
      </div>
      
    </div>
  )
}

export default Pricing
