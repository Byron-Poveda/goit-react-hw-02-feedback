import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SectionContainer extends Component {
  static propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
  };
  static defaultProps = {
    title: '',
    PropTypes: '',
  };
  render() {
    const { title, children, name } = this.props;
    return (
      <section className={name}>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}
