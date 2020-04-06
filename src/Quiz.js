import React, { useState } from 'react';

let quizData = require('./quiz_data.json');

function Quiz() {

  const [quizPosition, setQuizPosition] = useState(1);

  return (
    <div>
      <div className='QuizQuestion'>
        {quizData.quiz_questions[0].instruction_text}
      </div>
    </div>
  )
}

export default Quiz;