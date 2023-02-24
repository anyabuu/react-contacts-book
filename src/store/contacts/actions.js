const CONTACTS_URL = "https://jsonplaceholder.typicode.com/users";

export const ACTION_CREATE_CONTACT = "ACTION_CREATE_CONTACT";

export const createContact = ({ name, email, phone }) => {
  return (dispatch) => {
    fetch(CONTACTS_URL, {
      method: "POST",
      body: JSON.stringify({ name, email, phone }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: ACTION_CREATE_CONTACT,
          payload: data,
        })
      );
  };
};

export const ACTION_SET_CONTACT = "ACTION_SET_CONTACT";

export const fetchContacts = () => (dispatch) => {
  fetch(CONTACTS_URL, {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      dispatch({
        type: ACTION_SET_CONTACT,
        payload: data,
      });
    });
};

export const ACTION_REMOVE_CONTACT = "ACTION_REMOVE_CONTACT";

export const removeContact = (id) => {
  return (dispatch) => {
    fetch(`${CONTACTS_URL}/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: ACTION_REMOVE_CONTACT,
      payload: id,
    });
  };
};
