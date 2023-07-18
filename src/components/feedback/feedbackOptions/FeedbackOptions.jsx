import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
  };
  static defaultProps = {
    options: {},
    onLeaveFeedback: () => {},
  };
  // option.charAt(0).toUpperCase() + option.slice(1) charAt devuelve el primer caracter de cualquier cadena de texto, luego la combierto en mayucula con toUpperCase(), y la uno a la cadena de texto desde la letra con indice #1 osea desde la segunda letra.
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className="warpper-buttons">
        {options.map(option => (
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
  }
}
