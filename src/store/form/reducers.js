import { FORM_ERROR, FORM_RESET, FORM_SET, FORM_TOGGLE } from "./actions";

const initialState = {
  name: "",
  email: "",
  phone: "",
  formError: "",
  formValid: true,
  showForm: false,
};

export function formReducer(state = initialState, { type, payload }) {
  if (type === FORM_SET) {
    return {
      ...state,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      formError: "",
      formValid: true,
    };
  }

  if (type === FORM_ERROR) {
    return {
      ...state,
      formError: "*All fields are required",
      formValid: false,
    };
  }

  if (type === FORM_TOGGLE) {
    return {
      ...state,
      name: "",
      email: "",
      phone: "",
      formError: "",
      formValid: true,
      showForm: !state.showForm,
    };
  }

  if (type === FORM_RESET) {
    return {
      ...state,
      name: "",
      email: "",
      phone: "",
      formError: "",
      formValid: true,
    };
  }

  return state;
}
