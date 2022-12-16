import React from "react";
import './App.css';
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";

class App extends React.Component {

    state = {
        items: [],

        // formError: '',
        // formValid: true
    }

    handleAddItem = ({name, surname, number}) => {

        const newItem = {
            name: name,
            surname: surname,
            number: number,
            id: Date.now()
        };

        this.setState(({items}) => ({
            items: [...items, newItem],
        }));
    }

    removeListItem = (e, id) => {
        const result = this.state.items.filter(function(item) {
            return item.id !== id
        })
        this.setState({
            items: result
        })
    }

    render() {
        return (
            <>
                <header>
                    <div className="container header__container">
                        <h1 className="header__title">
                            Contact book
                        </h1>
                    </div>
                </header>

                <ContactsList items={this.state.items} removeListItem={this.removeListItem}/>
                <Form handleAddItem={this.handleAddItem}/>

            </>
        );
    }

}

export default App;
