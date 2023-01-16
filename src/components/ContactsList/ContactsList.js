import React from "react";
import "./ContactsList.css";
import ContactElement from "../ContactElement/ContactElement";

function ContactsList({ items, removeListItem, toggleForm }) {
  return (
    <section className="contacts">
      <div className="container contacts__container">
        <ul className="contacts__list">
          <li className="contacts-item title-item">
            <div className="contacts-item-cell">Name</div>
            <div className="contacts-item-cell">Surname</div>
            <div className="contacts-item-cell contacts-item-cell-phone">
              Phone number
            </div>
          </li>
          {items.map((item) => (
            <ContactElement
              removeListItem={removeListItem}
              key={item.id}
              id={item.id}
              name={item.name}
              surname={item.surname}
              number={item.number}
            />
          ))}
        </ul>
        <button
          className="contacts__create-contact-button button"
          onClick={toggleForm}
        >
          Add contact
        </button>
      </div>
    </section>
  );
}

export default ContactsList;
