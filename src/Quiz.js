import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    }
  }

  render() {

    function showNextQuestion() {
      this.setState(this.state.quiz_position, k => { k + 1 })
    }

    const isQuizEnd = () => {
      if (quizData.quiz_questions.length === this.state.quiz_position - 1) {
        return true;
      } else {
        return false;
      }
    }

    return (
      <div className='QuizQuestion'>
        {isQuizEnd()
          ? <QuizEnd />
          : <QuizQuestion
            quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
            showNextQuestionHandler={showNextQuestion}
          />}
      </div>
    )
  }
}

export default Quiz;