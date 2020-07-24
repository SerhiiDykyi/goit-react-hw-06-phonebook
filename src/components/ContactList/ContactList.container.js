import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
