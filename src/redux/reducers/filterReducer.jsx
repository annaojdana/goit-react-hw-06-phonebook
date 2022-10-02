import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from 'redux/actions/filterActions';

const initialState = '';

const filterReducer = createReducer(initialState, {
  [setFilter]: (state, { payload }) => payload,
});

export default filterReducer;
