import React from "react";
import "./ContavtElement.css";
import { removeContact } from "../../store/contacts/actions";
import { useDispatch } from "react-redux";

function ContactElement({ name, email, phone, id }) {
  const dispatch = useDispatch();

  return (
    <li className="contacts-item">
      <div className="contacts-item-cell">{name}</div>
      <div className="contacts-item-cell">{email}</div>
      <div className="contacts-item-cell">{phone}</div>
      <button
        className="contacts-item-button"
        onClick={() => dispatch(removeContact(id))}
      >
        Х
      </button>
    </li>
  );
}

export default ContactElement;
