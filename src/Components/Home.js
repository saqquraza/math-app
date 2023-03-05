import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
function Home() {
  
const navigate=useNavigate()
  return (
    <div>
      <p className="heading-txt">WELCOME TO NIOCLASS </p>
      
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} >
       <h2>MATH QUESTIONS</h2>
        <input
            type="button"
            value="Question"
            id="prev-button"
            onClick={()=>navigate(routes.mathQues)}
          />
      </div>
    
    </div>
  );
}

export default Home;
