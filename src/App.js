import React from "react";
import './App.css';
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";

class App extends React.Component {


    state = {
        items: [],

        name: '',
        surname: '',
        number: '',

        formError: '',
        formValid: true
    }

    onInputNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    onInputSurnameChange = (e) => {
        this.setState({ surname: e.target.value });
    }

    onInputNumberChange = (e) => {
        this.setState({ number: e.target.value });
    }



    onHandleSubmit = (e) => {
        e.preventDefault();


        console.log(this.state.name)

        if (this.state.name.length === 0 || this.state.surname.length === 0 || this.state.number.length === 0) {
            // this.setState({
            //     formError: 'All fields are required',
            //     formValid: false
            // });
            return;
        }

        const newItem = {
            name: this.state.name,
            surname: this.state.surname,
            number: this.state.number,
            id: Date.now()
        };
        this.setState({
            items: [...this.state.items, newItem],
            name: '',
            surname: '',
            number: '',
            formError: '',
            formValid: true
        });
    }

    resetForm = () => {
        this.setState({
            name: '',
            surname: '',
            number: '',
        })
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

                <section className="form">
                    <div className="container form__container">
                        <h2 className="form__title">
                            Create new contact
                        </h2>
                        <form className="form" onSubmit={this.onHandleSubmit}>
                            <div className="form__input-wrapper">
                                <input className="form__input"
                                       value={this.state.name}
                                       type="text"
                                       name="name"
                                       placeholder="Name"
                                       onChange={this.onInputNameChange}
                                />
                                <input className="form__input"
                                       value={this.state.surname}
                                       type="text"
                                       name="surname"
                                       placeholder="Surname"
                                       onChange={this.onInputSurnameChange}
                                />
                                <input className="form__input"
                                       value={this.state.number}
                                       type="number"
                                       name="number"
                                       placeholder="Phone number"
                                       onChange={this.onInputNumberChange}
                                />
                            </div>
                            <div className='form__error-message'>
                                {this.state.formError}
                            </div>
                            <div className="form__button-wrapper">
                                <button className="form__submit-button button" disabled={!this.state.formValid} >
                                    OK
                                </button>
                                <button className="form__cancel-button button" type="reset" onClick={this.resetForm}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </section>


            </>
        );
    }

}

export default App;
