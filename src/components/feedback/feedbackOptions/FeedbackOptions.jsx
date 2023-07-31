import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options = {}, onLeaveFeedback = () => {} }) => {
  // option.charAt(0).toUpperCase() + option.slice(1) charAt devuelve el primer caracter de cualquier cadena de texto, luego la combierto en mayucula con toUpperCase(), y la uno a la cadena de texto desde la letra con indice #1 osea desde la segunda letra.
  return (
    <div className="warpper-buttons">
      {Object.keys(options).map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className="button-state"
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
