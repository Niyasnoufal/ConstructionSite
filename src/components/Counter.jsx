import { useState, useEffect, useRef } from "react";


const Counter = ({target, duration}) => {

    const[count, setCount] = useState(0);
    const ref = useRef(null);
    const[isanimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting && !isanimated){
                setIsAnimated(true);

                let start = 0;
                

                const increment = target / (duration / 10);

                const timer = setInterval(() => {
                    start += increment;

                    if(start >= target) {
                        clearInterval(timer)
                        setCount(target)
                        
                    } else {
                        setCount(Math.ceil(start))
                    }
                    
                },10)
                
            } 
        },
         { threshold: 0.5} )
         if(ref.current){
             observer.observe(ref.current)
            }
        return () => {
            if(ref.current) observer.unobserve(ref.current)
        }

    },[target, duration, isanimated])

   


  return (
    <div ref={ref} className="text-3xl font-bold">
        {count}+
    </div>
  )
}

export default Counter
