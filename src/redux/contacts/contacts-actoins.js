import types from './contacts-types';
import shortid from 'shortid';

const addContacts = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});
export default { addContacts };
// export const del = value => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: value,
// });
