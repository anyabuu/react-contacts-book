import React, { useState } from "react";
import "./Form.css";

function Form({ toggleForm, handleAddItem, showForm }) {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    formError: "",
    formValid: true,
  });

  const onInputChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
      formValid: true,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (
      newContact.name.length === 0 ||
      newContact.email.length === 0 ||
      newContact.phone.length === 0
    ) {
      setNewContact({
        ...newContact,
        formError: "*All fields are required",
        formValid: false,
      });
      return;
    }

    handleAddItem(newContact);

    setNewContact({
      name: "",
      email: "",
      phone: "",
      formError: "",
      formValid: true,
    });
  };

  const cancelForm = () => {
    toggleForm();

    setNewContact({
      name: "",
      email: "",
      phone: "",

      formError: "",
      formValid: true,
    });
  };

  return (
    <section className={`${showForm === false ? "disable" : "form"}`}>
      <div className="container form__container">
        <form className="form__area" onSubmit={onHandleSubmit}>
          <h2 className="form__title">Creating new contact</h2>
          <div className="form__input-wrapper">
            <fieldset className="form__field">
              Name
              <input
                className="form__input"
                value={newContact.name}
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={onInputChange}
              />
            </fieldset>
            <fieldset className="form__field">
              Email
              <input
                className="form__input"
                value={newContact.email}
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={onInputChange}
              />
            </fieldset>
            <fieldset className="form__field">
              Phone number
              <input
                className="form__input"
                value={newContact.phone}
                type="number"
                name="phone"
                placeholder="Enter your phone number"
                onChange={onInputChange}
              />
            </fieldset>
          </div>
          <div className="form__error-message">{newContact.formError}</div>
          <div className="form__button-wrapper">
            <button
              className="form__submit-button button"
              disabled={!newContact.formValid}
            >
              Save
            </button>
            <button
              type={"reset"}
              className="form__cancel-button button"
              onClick={cancelForm}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
