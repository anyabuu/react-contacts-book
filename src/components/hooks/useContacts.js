import { useEffect, useState } from "react";

function UseContacts() {
  const [contacts, setContacts] = useState([]);

  const HOST = "https://jsonplaceholder.typicode.com/users";

  const [showingForm, setShowingForm] = useState({
    showForm: false,
  });

  const toggleForm = () => {
    if (showingForm.showForm === false) {
      setContacts([...contacts]);
      setShowingForm({
        showForm: true,
      });
    } else {
      setContacts([...contacts]);
      setShowingForm({
        showForm: false,
      });
    }
  };

  useEffect(() => {
    fetch(HOST, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContacts(data);
      });
  }, []);

  const handleAddItem = ({ name, email, phone }) => {
    const newItem = {
      name: name,
      email: email,
      phone: phone,
    };

    setContacts([...contacts, newItem]);

    setShowingForm({
      showForm: false,
    });

    fetch(HOST, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContacts([...contacts, data]);
      });
  };

  const removeListItem = (e, id) => {
    fetch(`${HOST}/${id}`, {
      method: "DELETE",
    });

    const result = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(result);
    setShowingForm({
      showForm: false,
    });
  };

  return {
    contacts,
    handleAddItem,
    removeListItem,
    toggleForm,
    showingForm,
  };
}

export default UseContacts;
