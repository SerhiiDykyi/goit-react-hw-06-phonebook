import React from 'react';

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

export default Filter;
