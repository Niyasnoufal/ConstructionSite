import Faq from '../components/Faq'
import QuoteForm from '../components/QuoteForm'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center my-8'>
        <h1 className='text-mainBg text-5xl bg-textColor p-3'>Get Quote and Free Consultation Now</h1>
      </div>
      <QuoteForm />
      <div>
        <Faq />
      </div>
    </div>
  )
}

export default Contact
