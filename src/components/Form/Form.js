import React from "react";
import "./Form.css";
import { createContact } from "../../store/contacts/actions";
import { useDispatch, useSelector } from "react-redux";
import { getFormValuesSelector } from "../../store/form/selectors";
import { formError, formReset, formValuesSet } from "../../store/form/actions";

function Form() {
  const dispatch = useDispatch();
  const formValues = useSelector(getFormValuesSelector);

  const onInputChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      formValuesSet({
        ...formValues,
        [name]: value,
      })
    );
  };

  const resetForm = () => {
    dispatch(formReset());
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.name || !formValues.email || !formValues.phone) {
      dispatch(formError());
      return;
    }

    resetForm();
    dispatch(createContact(formValues));
  };

  return (
    <section
      className={`${formValues.showForm === false ? "disable" : "form"}`}
    >
      <div className="container form__container">
        <form className="form__area" onSubmit={onHandleSubmit}>
          <h2 className="form__title">Creating new contact</h2>
          <div className="form__input-wrapper">
            <fieldset className="form__field">
              Name
              <input
                className="form__input"
                value={formValues.name}
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
                value={formValues.email}
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
                value={formValues.phone}
                type="number"
                name="phone"
                placeholder="Enter your phone number"
                onChange={onInputChange}
              />
            </fieldset>
          </div>
          <div className="form__error-message">{formValues.formError}</div>
          <div className="form__button-wrapper">
            <button
              className="form__submit-button button"
              disabled={!formValues.formValid}
            >
              Save
            </button>
            <button
              type={"reset"}
              className="form__cancel-button button"
              onClick={resetForm}
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
