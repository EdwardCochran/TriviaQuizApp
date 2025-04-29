import React from 'react';

function Results({ result, userName, onRestart }) {
  const isCorrect = result.selected === result.correct;

return (
    <div className="results-page">
        <h2>
            {isCorrect ? (
                <>
                <div>
                    <img src="https://images.unsplash.com/photo-1454486837617-ce8e1ba5ebfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNlbGVicmF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='result-image' />
                </div>
                    Great job, {userName}! You got it right.
                </>
            ) : (
                <>
                <div>
                    <img src="https://images.unsplash.com/photo-1494158064015-7ff877b5bb2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGh1bWJzJTIwZG93bnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='result-image' />
                </div>
                    Better luck next time, {userName}. You got it wrong.    
                </>
            )}
        </h2>
        {!isCorrect && <p>The correct answer was: <strong dangerouslySetInnerHTML={{ __html: result.correct }} /></p>}
        <button onClick={onRestart}>Start Over</button>
    </div>
);
}

export default Results;