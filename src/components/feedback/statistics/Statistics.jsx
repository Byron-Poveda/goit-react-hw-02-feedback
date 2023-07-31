import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  feedback = 0,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total <= 0 ? (
        <span>There is no feedback</span>
      ) : (
        <ul className="statistics__list">
          <li className="statistics__item">
            Good:<span> {good}</span>
          </li>
          <li className="statistics__item">
            Neutral:<span> {neutral}</span>
          </li>
          <li className="statistics__item">
            Bad:<span> {bad}</span>
          </li>
          <li className="statistics__item">
            Total:<span> {total}</span>
          </li>
          <li className="statistics__item">
            Positive Feedback: <span>{feedback}%</span>
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  feedback: PropTypes.number,
};

export default Statistics;
