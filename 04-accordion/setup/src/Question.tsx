import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { QuestionProp } from "./types";
const Question = ({ title, info }: QuestionProp) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          type="button"
          className="btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

// <button type="button" onClick={() => setShow(!show)}>
//   {show ? { info } : "Expand"}
// </button>
