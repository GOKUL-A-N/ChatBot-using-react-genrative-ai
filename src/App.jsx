import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import AnsCard from "./components/AnsCard.jsx";
import sendButton from "./assets/sendButton.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [promptResponses, setpromptResponses] = useState([]);
  const genAI = new GoogleGenerativeAI(
    
    // add your api key here
  );
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const getResponseForGivenPrompt = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputValue);
      
      const response = result.response;
      const text = response.text();
      console.log(text);
      setpromptResponses([...promptResponses, {title:inputValue, ans:text}]);
      setInputValue("");
    } catch (error) {
      console.log(error);
      console.log("Something Went Wrong");
    }
  };
  return (
    <div className="bg-black h-screen overflow-y-auto w-full text-white p-4">
        <div>
        {
          promptResponses.map((promptResponse, index) => (
            <div key={index} >
             <AnsCard title={promptResponse.title} value={promptResponse.ans} />
            </div>
          ))
        }
        <h2 className="p-4 "><span className=""><span className="bg-[#0093d9]">$user@chatbot</span><span className="bg-[#1fbc0d]">/gen-ai</span> </span><span className='text-[#198147] font-bold'> ~ </span> <input type="text" onChange={handleInputChange} onKeyDown={(e) => {if(e.key === 'Enter') getResponseForGivenPrompt();e.value = "";}} className="outline-none cursor-none bg-transparent text-[#1fbc0d] font-semibold w-auto" />  </h2>
        </div>
    </div>
  );
}
export default App;
