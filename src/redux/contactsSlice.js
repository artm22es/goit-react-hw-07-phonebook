import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      state.items = [...state.items, action.payload];
    },

    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.items;
