import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import { QuestionProp } from "./types";

function App() {
  const [questions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
