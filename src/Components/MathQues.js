import React, { useState } from "react";
import { Data } from "../Data/Data";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes";

function MathQues() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate=useNavigate();

  const changeQuestion = () => {
    if (currentQuestion < Data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(routes.thank)
    }
  };
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
        navigate(routes.home);
    }
  };

  return (
    <MathJaxContext>
      <p className="heading-txt">NIOCLASS MATH QUESTIONS</p>
      <div className="container">
        <div className="question">
        <span id="question-number">{currentQuestion + 1}. </span>
         <MathJax id="question-text">{Data[currentQuestion].question}</MathJax> 
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="button"
            value="Previous"
            id="prev-button"
            onClick={prevQuestion}
          />
          <input
            type="button"
            value="Next"
            id="next-button"
            onClick={changeQuestion}
          />
        </div>
      </div>
      </MathJaxContext>
  );
}

export default MathQues;
