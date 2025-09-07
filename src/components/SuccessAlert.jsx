import { useEffect, useState } from "react"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";


const SuccessAlert = ({status}) => {
   const[visible, setVisible] = useState(true)
    useEffect(() => {
       
   const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)
   
   return () => clearTimeout(timer)

    },[])

    if(!visible) return null
  
  return (
    <>
        <div className="w-[300px] h-[100px] bg-mainBg">
                <div className={`w-[300px] h-[3px] ${status === 200 ? "bg-green-500" : "bg-red-500"}  animate-success`} ></div>
                <div>{
                        status === 200 ? <h1 className="text-green-500">Successfully Registered<IoIosCheckmarkCircle /></h1>
                         :<h1 className="text-red-500">Oops! Failed Try Again<IoMdCloseCircle/></h1>
                    }
                </div>
         </div>
    </>
  )
}

export default SuccessAlert
