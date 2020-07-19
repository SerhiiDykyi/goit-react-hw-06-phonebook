import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';
import Form from './Form';

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(contactsActions.addContacts(contact)),
});

export default connect(null, mapDispatchToProps)(Form);
