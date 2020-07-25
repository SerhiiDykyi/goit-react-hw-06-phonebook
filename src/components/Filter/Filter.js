import React from 'react';
import Loader from 'react-loader-spinner';
import './Filter.scss';

const Filter = ({ value, onChange, isLoadingContacts }) => {
  return (
    <>
      <div className="Filter_header">
        <h2>Contacts</h2>
        {isLoadingContacts && (
          <Loader
            type="Bars"
            color="#000000"
            height={50}
            width={100}
            visible={true}
          />
        )}
      </div>
      <p>Find contacts by name</p>
      <label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};

export default Filter;
