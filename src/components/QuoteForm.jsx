import { useState } from "react";

const QuoteForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, phone, message };
    console.log(formData);

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

      const data = await response.json();
      if (response.status == 200) {
        console.log("Success", response.status);
        console.log(data);
      }
    } catch (error) {
      console.log(`Error Message: ${error.message}`);
    } finally {
      setName("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <form
      className="w-[300px] h-full bg-textColor rounded-lg flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="name flex justify-center gap-x-5 p-5">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="w-1/2 h-[35px] border border-mainBg"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="phone flex justify-center gap-x-5 p-5">
        <label>Phone:</label>
        <input
          type="number"
          placeholder="Enter your Mobile No"
          className="w-1/2 h-[35px] border border-mainBg"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="message flex justify-center gap-x-5 p-5">
        <label>Messsage:</label>
        <textarea
          placeholder="Enter your message"
          className="w-full h-full border border-mainBg"
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
  );
};

export default QuoteForm;
