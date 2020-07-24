import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';
import Form from './Form';

const allContactsName = items => {
  return items;
};

const mapStateToProps = ({ contacts: { items } }) => ({
  isExistName: allContactsName(items),
});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(contactsActions.addContacts(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
