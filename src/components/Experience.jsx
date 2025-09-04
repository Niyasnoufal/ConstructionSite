import Counter from "./Counter"



const Experience = () => {
   
    
  return (
   <section className="bg-gray-900 py-5">
  <div>
    <h1 className="text-5xl text-center text-textColor underline mb-8" style={{marginBottom:"20px"}}>
      Industry Experience
    </h1>
  </div>
  <ul className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-10 text-mainBg">
    <li className="text-2xl font-bold border border-mainBg bg-textColor transition delay-100 ease-in-out rounded-lg text-center px-6 py-4">
      Experience <Counter target={4} duration={2000} />
    </li>
    <li className="text-2xl font-bold border border-mainBg bg-textColor transition delay-100 ease-in-out rounded-lg text-center px-6 py-4">
      Projects Completed <Counter target={40} duration={2000} />
    </li>
    <li className="text-2xl font-bold border border-mainBg bg-textColor transition delay-100 ease-in-out rounded-lg text-center px-6 py-4">
      OnGoing Projects <Counter target={20} duration={2000} />
    </li>
  </ul>
</section>

  )
}

export default Experience
