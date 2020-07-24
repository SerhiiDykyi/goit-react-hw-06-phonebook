import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actoins from './contacts-actoins';

const items = createReducer([], {
  [actoins.addContacts]: (state, { payload }) => [...state, payload],
  [[actoins.deleteContacts]]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actoins.changeFilter]: (_, actoin) => actoin.payload,
});

export default combineReducers({
  items,
  filter,
});
