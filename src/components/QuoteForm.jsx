import { useState } from "react";
import SuccessAlert from "./SuccessAlert";

const QuoteForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const[status, setStatus] = useState("");
  const[show, setShow] = useState(false);
  const[error, setError] = useState({});




  // Regex
  const nameRegex =/^[a-zA-Z\s]{2,50}$/;
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex =/^[6-9]\d{9}$/;
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = { name, email, phone, message };
    const newErrors = {}
    
    if(!nameRegex.test(name.trim()) ){
        newErrors.name = "Invalid Name"
    }

    if(!emailRegex.test(email)){
      newErrors.email = "Invalid Email"
    }

    if(!phoneRegex.test(phone)){
      newErrors.phone = "Invalid Phone"
    }

 setError(newErrors);

if (Object.keys(newErrors).length > 0) {
  setTimeout(() => {
    setError({});
  }, 3000);
  return;
}


    try {
      const response = await fetch("/.netlify/functions/sendQuote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error Fetching Data`);
      }

      // const data = await response.json();
      if (response.status === 200) {
      console.log("Success", response.status);
      setStatus(response.status);
      setShow(true);

      setTimeout(() => {
        setShow(false); 
      }, 3000);
}

    } catch (error) {
      console.log(`Error Message: ${error.message}`);

    } finally {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <section className="flex justify-center item-center relative">
      <form
      className="w-[500px] h-full bg-textColor rounded-lg flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="name flex justify-center gap-x-5 p-5">
        <label>Name:</label>
        <div>
          <input
          type="text"
          placeholder="Enter your Name"
          className="w-full h-[35px] border border-mainBg rounded-lg px-2"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
        </div> 
      </div>
      <div className="flex justify-center gap-x-5 p-5">
        <label>Email:</label>
        <div>
            <input type="email" placeholder="Enter your Email" className="w-full h-[35px] border border-mainBg rounded-lg px-2" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
           {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        </div>
        
      </div>
      <div className="phone flex justify-center gap-x-5 p-5">
        <label>Phone:</label>
        <div>
             <input
          type="number"
          placeholder="Enter your Mobile No"
          className="w-full h-[35px] border border-mainBg rounded-lg px-2"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
          {error.phone && <p className="text-red-500 text-sm">{error.phone}</p>}
        </div>
       
      </div>
      <div className="message flex justify-center gap-x-5 p-5">
        <label>Messsage:</label>
        <textarea
          placeholder="Enter your message"
          rows={6}
          cols={200}
          className="w-full h-full border border-mainBg px-2"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-center items-center">
        <button className="p-3 bg-mainBg mb-5 text-textColor rounded-3xl cursor-pointer">
          Get Details Now
        </button>
      </div>
    </form>
       <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        {
          show &&<SuccessAlert status={status}/>
        }
          
       </div>
    </section>
    
  );
};

export default QuoteForm;
