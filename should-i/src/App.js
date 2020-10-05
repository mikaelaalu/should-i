import React, { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [isQuestion, setIsQuestion] = useState(false);
  const [answer, setAnswer] = useState("");
  const handleInput = () => {
    //clear input field after submit
    setQuestion("");
  };

  const displayQuestion = () => {
    setIsQuestion(true);

    const answers = ["Yes", "No"];
    setAnswer(answers[Math.floor(Math.random() * answers.length)]);
  };

  return (
    <section>
      <h3 className="title">
        Ask your question below and let this cool machine give you the right
        answer
      </h3>
      <input
        className="inputField"
        placeholder="Should I"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onClick={handleInput}
      />
      <button className="button" onClick={displayQuestion}>
        Help
      </button>

      {isQuestion && (
        <div className="questionContainer">
          <p className="question">{question}</p>
          <p className="answer">{answer}</p>
        </div>
      )}
    </section>
  );
}

export default App;
