import React from "react";
import "./App.css";
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <header>
        <div className="container header__container">
          <h1 className="header__title">Contact book</h1>
        </div>
      </header>
      <ContactsList />
      <Form />
    </>
  );
}

export default App;
