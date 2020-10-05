import React, { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [isQuestion, setIsQuestion] = useState(false);

  const handleInput = () => {
    setQuestion("");
  };

  const getAnswer = () => {
    setIsQuestion(true);
  };

  return (
    <section>
      <h3 className="title">
        Ask your question below and let this cool machine give you the right
        answer
      </h3>
      <input
        className="inputField"
        placeholder="Should I?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onClick={handleInput}
      />
      <button className="button" onClick={getAnswer}>
        Submit
      </button>

      {isQuestion && <p className="question">{question}</p>}
    </section>
  );
}

export default App;
