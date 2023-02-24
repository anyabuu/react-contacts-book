import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {contactsReducer} from "./contacts/reducers";
import {formReducer} from "./form/reducers";

const reducers = combineReducers({
    contacts: contactsReducer,
    form: formReducer
})

export const store = createStore(reducers, applyMiddleware(thunk));

export default store;
