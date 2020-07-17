import types from './contacts-types';
import shortid from 'shortid';

const addContacts = ({ name, number }) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContacts = contactId => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContacts, deleteContacts, changeFilter };
