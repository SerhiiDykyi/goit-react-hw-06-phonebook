import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper.scss';

const Wrapper = ({ children }) => {
  return (
    <section className="wrapper">
      <h1>Phonebook</h1>
      {children}
    </section>
  );
};
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
