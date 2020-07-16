import { combineReducers } from 'redux';
import types from './contacts-types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  contacts,
  filter,
});
