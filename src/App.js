import React from "react";
import "./App.css";
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";
import useContacts from "./components/hooks/useContacts";

function App() {
  const { contacts, handleAddItem, removeListItem, toggleForm, showingForm } =
    useContacts();

  return (
    <>
      <header>
        <div className="container header__container">
          <h1 className="header__title">Contact book</h1>
        </div>
      </header>
      <ContactsList
        items={contacts}
        toggleForm={toggleForm}
        removeListItem={removeListItem}
      />
      <Form
        handleAddItem={handleAddItem}
        toggleForm={toggleForm}
        showForm={showingForm.showForm}
      />
    </>
  );
}

export default App;
