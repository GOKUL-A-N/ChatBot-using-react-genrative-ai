import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [promptResponses, setpromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(
    "API_KEY"
// add your api key here
  );
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true)
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputValue);
      setInputValue('')
      const response = result.response;
      const text = response.text();
      console.log(text)
      setpromptResponses([...promptResponses,text]);
  
      setLoading(false)
    }
    catch (error) {
      console.log(error)
      console.log("Something Went Wrong");
      setLoading(false)
    }
  }
    ;

  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ask Me Something You Want"
          className="form-control"
        />
      </div>
      <div className="col-auto">
        <button onClick={getResponseForGivenPrompt} className="btn btn-primary">Send</button>
      </div>
    </div>
    {loading ? (
      <div className="text-center mt-3">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
       // This message is shown while your answer to your prompt is being generated
        </div>
      </div>
    ) : (
      promptResponses.map((promptResponse, index) => (
        <div key={index} >
          <div className={`response-text ${index === promptResponses.length - 1 ? 'fw-bold' : ''}`}>{promptResponse}</div>
     //the latest response shown in bold letters
        </div>
      ))
    )}
  </div>
  
  );

}
export default App;