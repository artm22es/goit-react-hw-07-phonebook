import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contacReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contacReducer,
    filter: filterReducer,
  },
});
