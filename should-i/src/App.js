import React, { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [questionExist, setQuestionExist] = useState(false);
  const [answer, setAnswer] = useState('');
  const answers = ['Yes', 'No'];

  const updateValue = (e) => {
    setQuestionExist(false);
    setQuestion(e.target.value);
  };

  const displayQuestion = (e) => {
    setQuestionExist(true);
    setAnswer(answers[Math.floor(Math.random() * answers.length)]);

    e.preventDefault();
  };

  return (
    <section>
      <h3 className='title'>
        Ask your question below and let this cool machine give you the right
        answer
      </h3>
      <form onSubmit={displayQuestion}>
        <input
          className='inputField'
          placeholder='Should I'
          value={question}
          onChange={updateValue}
          required
        />
        <button className='button'>Help</button>
      </form>

      {questionExist && (
        <div className='questionContainer'>
          <p className='question'>{question}</p>
          <p className='answer'>{answer}</p>
        </div>
      )}
    </section>
  );
}

export default App;
