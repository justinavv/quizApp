import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ quiz, onClick }) => (
  <div>
    <div>
      <h2>{quiz.question}</h2>
    </div>
    <div>
      {quiz.answers.map((quizAnswer, index) => (
        <li
          className = "button"
          key = {quizAnswer.index}
          id = {index}
          onClick = {event => onClick(event.target.id)}
        >
          {quizAnswer.ans}
        </li>
      ))}
    </div>
  </div>
);

Question.propTypes = {
  quiz: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf({ ans: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Question;
