import React from "react";
import "./ContavtElement.css";

function ContactElement({ name, email, phone, id, removeListItem }) {
  return (
    <li className="contacts-item">
      <div className="contacts-item-cell">{name}</div>
      <div className="contacts-item-cell">{email}</div>
      <div className="contacts-item-cell">{phone}</div>
      <button
        className="contacts-item-button"
        onClick={(e) => removeListItem(e, id)}
        key={id}
      >
        Х
      </button>
    </li>
  );
}

export default ContactElement;
