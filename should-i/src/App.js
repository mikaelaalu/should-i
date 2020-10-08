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
    setAnswer("");
  };

  return (
    <section>
      <h3 className="title">
        Ask your question below and let this cool machine give you the right
        answer
      </h3>
      <form className="questionForm">
        <label>Question</label>
        <input
          className="inputFieldQuestion"
          placeholder="Should I"
          value={question}
          onChange={updateValue}
          required
        />
      </form>
      <form onSubmit={addToAnswerList} className="answersForm">
        <div className="possibleAnswer">
          <label>Possible answer</label>
          <input
            className="inputFieldAnswer"
            value={answer}
            onChange={addAnswers}
            placeholder="Answer.."
            required
          />
        </div>
        <button className="buttonAdd">Add</button>
      </form>

      {showPossibleAnswers &&
        possibleAnswers.map((possibleAnswer, i) => (
          <p key={i}>{possibleAnswer}</p>
        ))}

      <button className="button" onClick={displayQuestion}>
        Help
      </button>
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
