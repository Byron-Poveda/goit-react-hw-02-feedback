import React from 'react';
import PropTypes from 'prop-types';

function SectionContainer({ title = '', name = '', children }) {
  return (
    <section className={name}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

SectionContainer.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

export default SectionContainer;
