import { createReducer } from '@reduxjs/toolkit';
import contactsItems from 'data/contactsItems';
import { addContact, deleteContact } from 'redux/actions/contactsActions';



const initialState = contactsItems;

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => {
    return (state = [payload, ...state]);
  },
  [deleteContact]: (state, { payload }) => {
    return (state = state.filter(c => c.id !== payload));
  },
});

export default contactsReducer;
