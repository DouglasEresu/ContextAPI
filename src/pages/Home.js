import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../ContextAPI/StateProvider";

export default function Home() {
  const [input, setInput] = useState("");
  const [ dispatch] = useStateValue();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    dispatch({
      type: "Term",
      data: input,
      email: input,
      password: input
      
    });

    navigate("/result");
  };

  return (
    <div className="App">
      <h1>Type anything here</h1>

      <form onSubmit={handleSubmit}>
        <label>
        <input 
         placeholder="Name"
          type="text"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </label>
      <input type="submit" onClick={handleSubmit} value="click" /> 
      </form>

{/* EMAIL */}
<form onSubmit={handleSubmit}>
     <label>
        <input 
        type="text"
         placeholder="Email" 
        // value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </label>
      <input type="submit" onClick={handleSubmit} value="click" /> 
      </form>

{/* PASSWORD */}
<form onSubmit={handleSubmit}>
      <label>
        <input 
        type="text"
         placeholder="Password" 
        value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </label>
      <input type="submit" onClick={handleSubmit} value="click" />  
      </form>
    </div>
  );
  }
