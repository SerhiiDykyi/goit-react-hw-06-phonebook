import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actoins';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.filter,
  isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
