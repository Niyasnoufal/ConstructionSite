
import ConstructionTable from './ConstructionTable';
import PricingCard from './PricingCard';

const PricingCont = () => {
    

  return (
    <section className='bg-mainBg min-h-screen'>
            <h1 className='text-5xl text-mainBg px-10 '>Construction Package</h1>
              <PricingCard/>
              <div className='mt-8'>
                
                <ConstructionTable />
              </div>
    </section>
  )
}

export default PricingCont
