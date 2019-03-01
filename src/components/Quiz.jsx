import React from 'react';
import quizList from './quizList';
import Question from './Question';
import Results from './Results';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: 0,
      correctAnswers: 0,
    };
  }

    nextQuestion = () => {
      this.setState((state) => {
        const { questionId } = this.state;
        if (questionId < quizList.length) {
          return {
            questionId: state.questionId + 1,
          };
        }
        return null;
      });
    };

    correctAns = (id) => {
      const { questionId } = this.state;
      const quizCorrect = quizList[questionId];
      this.setState((state) => {
        if (id === quizCorrect.correctId) {
          return {
            correctAnswers: state.correctAnswers + 1,
          };
        }
        return null;
      });
    };

    getResults = () => {
      const { correctAnswers } = this.state;
      if (correctAnswers > 0) {
        return `Great job! You have answered correctly ${correctAnswers} questions!`;
      }
      return 'Wow, no correct answers';
    };

    restartQuiz = () => {
      this.setState({ questionId: 0, correctAnswers: 0 });
    };


    render() {
      const { questionId } = this.state;

      if (questionId < quizList.length) {
        return (
          <div className="questions">
            <Question
              quiz={quizList[questionId]}
              onClick={id => (this.nextQuestion(), this.correctAns(id))}
            />
          </div>
        );
      }
      return (
        <div className="results">
          <Results
            results={this.getResults()}
            onClick={this.restartQuiz}
          />
        </div>
      );
    }
}

export default Quiz;
