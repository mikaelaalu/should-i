import React, { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [questionExist, setQuestionExist] = useState(false);
  const [answer, setAnswer] = useState("");
  const [possibleAnswers, setPossibleAnswers] = useState([]);
  const [decision, setDecision] = useState("");
  const [showPossibleAnswers, setShowPossibleAnswers] = useState(false);

  const updateValue = (e) => {
    setQuestionExist(false);
    setQuestion(e.target.value);
  };

  const displayQuestion = (e) => {
    e.preventDefault();
    setQuestionExist(true);
    setDecision(
      possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]
    );
    setShowPossibleAnswers(false);
  };

  const addAnswers = (e) => {
    e.preventDefault();
    setAnswer(e.target.value);
  };

  const addToAnswerList = (e) => {
    e.preventDefault();
    setPossibleAnswers(possibleAnswers.concat(answer));
    setShowPossibleAnswers(true);
  };

  return (
    <section>
      <h3 className="title">
        Ask your question below and let this cool machine give you the right
        answer
      </h3>
      <form>
        <label>Question</label>
        <input
          className="inputField"
          placeholder="Should I"
          value={question}
          onChange={updateValue}
          required
        />
      </form>
      <form onSubmit={addToAnswerList} className="answersForm">
        <div>
          <label>Possible answer</label>
          <input
            className="inputField"
            value={answer}
            onChange={addAnswers}
            placeholder="Answer.."
            required
          />
        </div>
        <button>Add answer to compot</button>
      </form>

      {showPossibleAnswers &&
        possibleAnswers.map((example, i) => <p key={i}>{example}</p>)}

      <button onClick={displayQuestion}> Show me answer</button>
      {questionExist && (
        <div className="questionContainer">
          <p className="question">{question}</p>
          <p className="answer">{decision}</p>
        </div>
      )}
    </section>
  );
}

export default App;
