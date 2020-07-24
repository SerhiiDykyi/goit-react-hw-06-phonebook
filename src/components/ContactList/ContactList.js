import React from 'react';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className="contact_list">
        {contacts.map(({ id, name, number }) => (
          <li className="contact_item" key={id}>
            <span>
              {name}: {number}
            </span>
            <button className="button-del" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
