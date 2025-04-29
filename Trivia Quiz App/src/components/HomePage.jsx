import React, { useState } from 'react';

const categories = [
  { value: '9', label: 'General Knowledge' },
  { value: '18', label: 'Science: Computers' },
  { value: '21', label: 'Sports' },
  { value: '23', label: 'History' }
];

const difficulties = ['easy', 'medium', 'hard'];

function HomePage({ onStartQuiz }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    difficulty: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, category, difficulty } = formData;

    if (!name || !category || !difficulty) {
      setError('Please fill out all fields');
      return;
    }

    setError('');
    onStartQuiz(formData);
  };

return (
    <div className="home-page">
        <img src="https://images.unsplash.com/photo-1551086002-6eebfd453843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxicmFpbiUyMHRoaW5raW5nfGVufDB8fDB8fHww" alt="" className="thinking" />
        <h1>Ultimate Trivia Challenge</h1>
        <form onSubmit={handleSubmit}></form>
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Category:
                <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="">--Select--</option>
                    {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                            {cat.label}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Difficulty:
                <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
                    <option value="">--Select--</option>
                    {difficulties.map((level) => (
                        <option key={level} value={level}>
                            {level}
                        </option>
                    ))}
                </select>
            </label>
            {error && <p className="error">{error}</p>}
            <button type="submit">Start Quiz</button>
        </form>
    </div>
);
}

export default HomePage;