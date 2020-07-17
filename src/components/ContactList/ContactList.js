import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';
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

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
