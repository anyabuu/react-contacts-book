import React, { useState } from "react";
import "./App.css";
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";

function App(props) {
  const [mainState, setMainState] = useState({
    items: [],
    showForm: false,
  });

  const handleAddItem = ({ name, surname, number }) => {
    const newItem = {
      name: name,
      surname: surname,
      number: number,
      id: Date.now(),
    };

    setMainState({
      items: [...mainState.items, newItem],
      showForm: false,
    });
  };

  const removeListItem = (e, id) => {
    const result = mainState.items.filter((item) => {
      return item.id !== id;
    });
    setMainState({
      items: result,
      showForm: false,
    });
  };

  const toggleForm = () => {
    if (mainState.showForm === false) {
      setMainState({
        items: [...mainState.items],
        showForm: true,
      });
    } else {
      setMainState({
        items: [...mainState.items],
        showForm: false,
      });
    }
  };

  return (
    <>
      <header>
        <div className="container header__container">
          <h1 className="header__title">Contact book</h1>
        </div>
      </header>
      <ContactsList
        items={mainState.items}
        toggleForm={toggleForm}
        removeListItem={removeListItem}
      />
      <Form
        handleAddItem={handleAddItem}
        toggleForm={toggleForm}
        showForm={mainState.showForm}
      />
    </>
  );
}

export default App;
