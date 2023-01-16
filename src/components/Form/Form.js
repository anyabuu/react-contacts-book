import React, { useState } from "react";
import "./Form.css";

function Form({ toggleForm, handleAddItem, showForm }) {
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    number: "",
    formError: "",
    formValid: true,
  });

  const onInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
      formValid: true,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (
      contact.name.length === 0 ||
      contact.surname.length === 0 ||
      contact.number.length === 0
    ) {
      setContact({
        ...contact,
        formError: "*All fields are required",
        formValid: false,
      });
      return;
    }

    handleAddItem(contact);

    setContact({
      name: "",
      surname: "",
      number: "",
      formError: "",
      formValid: true,
    });
  };

  const cancelForm = () => {
    toggleForm();

    setContact({
      name: "",
      surname: "",
      number: "",

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
                value={contact.name}
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={onInputChange}
              />
            </fieldset>
            <fieldset className="form__field">
              Surname
              <input
                className="form__input"
                value={contact.surname}
                type="text"
                name="surname"
                placeholder="Enter your surname"
                onChange={onInputChange}
              />
            </fieldset>
            <fieldset className="form__field">
              Phone number
              <input
                className="form__input"
                value={contact.number}
                type="number"
                name="number"
                placeholder="Enter your phone number"
                onChange={onInputChange}
              />
            </fieldset>
          </div>
          <div className="form__error-message">{contact.formError}</div>
          <div className="form__button-wrapper">
            <button
              className="form__submit-button button"
              disabled={!contact.formValid}
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
