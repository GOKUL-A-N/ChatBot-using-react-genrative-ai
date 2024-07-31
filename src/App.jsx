import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import AnsCard from "./components/AnsCard.jsx";
import sendButton from "./assets/sendButton.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [promptResponses, setpromptResponses] = useState([]);
  const genAI = new GoogleGenerativeAI(
    "API_KEY"
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

    <div className="flex relative items-center justify-center h-screen mesh-bg w-full">
      <div className="absolute top-2">
        {/* <h1 className="font-bold text-[25px] text-white">Chat Bot</h1> */}
      </div>
      <div className="fixed flex itesm-center justify-between border-2 bottom-5 rounded-md  bg-[#ddd] border-[#cbcbcb] h-[50px] w-[90%] ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ask Me Something You Want"
          className="w-[90%] h-[99%] bg-transparent outline-none text-black p-2"
        />
        <button onClick={getResponseForGivenPrompt} className="self-right right-0 mt-[1px] h-[50px] w-[40px]">
          <img src={sendButton} alt="send button" />
        </button>
      </div>
      <div className="w-full flex items-center justify-center text-white pr-10 over">
        <div className="w-full flex itesm-center justify-center gap-2 flex-col">
        {
          (promptResponses.length === 0) ? (
            <div className="flex items-center justify-center ">
              <h1 className="bg-transparent border-2 border-white p-2 rounded-md">What is on your mind</h1>
            </div>
          ):promptResponses.map((promptResponse, index) => (
            <div key={index} >
             <AnsCard title={promptResponse.title} value={promptResponse.ans} />
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}
export default App;
