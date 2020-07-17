import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
