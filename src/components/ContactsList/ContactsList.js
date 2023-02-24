import React, { useEffect } from "react";
import "./ContactsList.css";
import ContactElement from "../ContactElement/ContactElement";
import { useDispatch, useSelector } from "react-redux";
import { getContactsSelector } from "../../store/contacts/selectors";
import { fetchContacts } from "../../store/contacts/actions";
import { formToggle } from "../../store/form/actions";

function ContactsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector(getContactsSelector);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onToggle = () => {
    dispatch(formToggle());
  };

  return (
    <section className="contacts">
      <div className="container contacts__container">
        <ul className="contacts__list">
          <li className="contacts-item title-item">
            <div className="contacts-item-cell">Name</div>
            <div className="contacts-item-cell">Email</div>
            <div className="contacts-item-cell contacts-item-cell-phone">
              Phone number
            </div>
          </li>
          {contacts.map(({ id, name, email, phone }) => {
            return (
              <ContactElement
                key={crypto.randomUUID()}
                id={id}
                name={name}
                email={email}
                phone={phone}
              />
            );
          })}
        </ul>
        <button
          className="contacts__create-contact-button button"
          onClick={onToggle}
        >
          Add contact
        </button>
      </div>
    </section>
  );
}

export default ContactsList;
