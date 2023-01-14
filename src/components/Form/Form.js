import React from "react";
import './Form.css';

class Form extends React.Component {

    state = {
        name: '',
        surname: '',
        number: '',
        formError: '',
        formValid: true,
    }


    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value ,
            formValid: true
        })
    }


    onHandleSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length === 0 || this.state.surname.length === 0 || this.state.number.length === 0) {
            this.setState({
                formError: '*All fields are required',
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

    cancelForm = () => {

        this.props.toggleForm()

        this.setState({
            name: '',
            surname: '',
            number: '',

            formError: '',
            formValid: true,
        })
    }

    render() {
        return (
            <section className={`${this.props.showForm === false ? 'disable' : 'form'}`} >
                <div className="container form__container">
                    <form className="form__area" onSubmit={this.onHandleSubmit}>
                        <h2 className="form__title">
                            Creating new contact
                        </h2>
                        <div className="form__input-wrapper">
                            <fieldset className="form__field">
                                Name
                                <input className="form__input"
                                       value={this.state.name}
                                       type="text"
                                       name="name"
                                       placeholder="Enter your name"
                                       onChange={this.onInputChange}
                                />
                            </fieldset>
                            <fieldset className="form__field">
                                Surname
                                <input className="form__input"
                                       value={this.state.surname}
                                       type="text"
                                       name="surname"
                                       placeholder="Enter your surname"
                                       onChange={this.onInputChange}
                                />
                            </fieldset>
                            <fieldset className="form__field">
                                Phone number
                                <input className="form__input"
                                       value={this.state.number}
                                       type="number"
                                       name="number"
                                       placeholder="Enter your phone number"
                                       onChange={this.onInputChange}
                                />
                            </fieldset>
                        </div>
                        <div className='form__error-message'>
                            {this.state.formError}
                        </div>
                        <div className="form__button-wrapper">
                            <button className="form__submit-button button" disabled={!this.state.formValid} >
                                Save
                            </button>
                            <button type={"reset"} className="form__cancel-button button" onClick={this.cancelForm}>
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