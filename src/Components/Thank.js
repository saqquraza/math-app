import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";
function Thank() {
  
const navigate=useNavigate()
  return (
    <div>
      <p className="heading-txt">Thank You To Visit NIOCLASS!</p>
      
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} >
       
        <input
            type="button"
            value="Go Home"
            id="prev-button"
            onClick={()=>navigate(routes.home)}
          />
      </div>
    
    </div>
  );
}

export default Thank;
