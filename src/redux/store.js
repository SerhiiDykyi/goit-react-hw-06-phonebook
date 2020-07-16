import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

const store = createStore(contactsReducer, composeWithDevTools());

export default store;
