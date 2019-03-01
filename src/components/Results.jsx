import React from 'react';
import PropTypes from 'prop-types';
import clapping from './assets/clapping.gif';

const Results = ({ results, onClick }) => (
  <div>
    <h2>{results}</h2>
    <img src={clapping} alt="Bravo!" />
    <div>
      <p
        className="restartButton"
        onClick={onClick}
      >
        Try again?
      </p>
    </div>
  </div>
);

Results.propTypes = {
  results: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Results;
