import React from "react";
import './Form.css';

class Form extends React.Component {

    state = {
        name: '',
        surname: '',
        number: '',

        formError: '',
        formValid: true
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value ,
            formValid: true
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            surname: '',
            number: '',
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length === 0 || this.state.surname.length === 0 || this.state.number.length === 0) {
            this.setState({
                formError: 'All fields are required',
                formValid: false
            });
            return;
        }

        const {handleAddItem} = this.props

        handleAddItem(this.state)

        this.setState({
            name: '',
            surname: '',
            number: '',
            formError: '',
            formValid: true
        });
    }

    render() {
        return (
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
                                   onChange={this.onInputChange}
                            />
                            <input className="form__input"
                                   value={this.state.surname}
                                   type="text"
                                   name="surname"
                                   placeholder="Surname"
                                   onChange={this.onInputChange}
                            />
                            <input className="form__input"
                                   value={this.state.number}
                                   type="number"
                                   name="number"
                                   placeholder="Phone number"
                                   onChange={this.onInputChange}
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
        )
    }
}

export default Form;