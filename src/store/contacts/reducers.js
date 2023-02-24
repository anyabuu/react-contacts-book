import {
  ACTION_SET_CONTACT,
  ACTION_CREATE_CONTACT,
  ACTION_REMOVE_CONTACT,
} from "./actions";

const initialState = sessionStorage.contacts
  ? JSON.parse(sessionStorage.contacts)
  : [];

export function contactsReducer(state = initialState, { type, payload }) {
  if (type === ACTION_SET_CONTACT) {
    return [...payload];
  }

  if (type === ACTION_CREATE_CONTACT) {
    return [
      ...state,
      {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
      },
    ];
  }

  if (type === ACTION_REMOVE_CONTACT) {
    return state.filter((contact) => {
      return contact.id !== payload;
    });
  }

  return state;
}
