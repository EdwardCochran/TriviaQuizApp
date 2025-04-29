import React, { useState } from 'react';
import CategoriesComponent from './components/HomePage.jsx';
import QuestionForm from './components/QuestionForm.jsx';
import Results from './components/Results.jsx';
import './App.css';

function App() {
  const [step, setStep] = useState('home');
  const [userData, setUserData] = useState({});
  const [resultData, setResultData] = useState(null);

  const handleStartQuiz = (data) => {
    setUserData(data);
    setStep('question');
  };

  const handleAnswerSubmit = (result) => {
    setResultData(result);
    setStep('results');
  };

  const handleRestart = () => {
    setUserData({});
    setResultData(null);
    setStep('home');
  };

  return (
    <div className="app-container">
      {step === 'home' && <CategoriesComponent onStartQuiz={handleStartQuiz} />}
      {step === 'question' && (
        <QuestionForm userData={userData} onAnswerSubmit={handleAnswerSubmit} />
      )}
      {step === 'results' && (
        <Results result={resultData} userName={userData.name} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;