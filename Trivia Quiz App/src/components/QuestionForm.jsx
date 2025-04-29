import React, { useEffect, useState } from 'react';

function QuestionForm({ userData, onAnswerSubmit }) {
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');
  const [apiError, setApiError] = useState('');
  

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=1&category=${userData.category}&difficulty=${userData.difficulty}&type=multiple`
        );
        const data = await res.json();
        const question = data.results[0];

        if (!question) {
          setApiError('Could not fetch a question. Please try again.');
          return;
        }

        const answers = [...question.incorrect_answers];
        const randomIndex = Math.floor(Math.random() * 4);
        answers.splice(randomIndex, 0, question.correct_answer);

        setQuestionData({ ...question, answers });
      } catch {
        setApiError('Looks like you outsmarted our database.');
      }
    };

    fetchQuestion();
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      setError('Please choose an answer.');
      return;
    }
    setError('');
    onAnswerSubmit({
      question: questionData.question,
      correct: questionData.correct_answer,
      selected: selectedAnswer
    });
  };

  if (apiError) return (
    <p>
      {apiError} <button onClick={() => window.location.reload()}>Try Again</button>
    </p>
  );
  if (!questionData) return <p>Loading question...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2 dangerouslySetInnerHTML={{ __html: questionData.question }} />
      {questionData.answers.map((answer, index) => (
        <label key={index}>
          <input
            type="radio"
            name="answer"
            value={answer}
            checked={selectedAnswer === answer}
            onChange={() => setSelectedAnswer(answer)}
          />
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </label>
      ))}
      {error && <p className="error">{error}</p>}
      <button type="submit">Submit Answer</button>
    </form>
  );
}

export default QuestionForm;