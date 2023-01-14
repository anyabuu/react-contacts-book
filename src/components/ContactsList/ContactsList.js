import React from "react";
import './ContactsList.css';
import ContactElement from "../ContactElement/ContactElement";

class ContactsList extends React.Component {

    render() {
        return (
            <section className="contacts">
                <div className="container contacts__container">
                    <ul className="contacts__list">
                        <li className="contacts-item title-item">
                            <div className="contacts-item-cell">
                                Name
                            </div>
                            <div className="contacts-item-cell">
                                Surname
                            </div>
                            <div className="contacts-item-cell contacts-item-cell-phone">
                                Phone number
                            </div>
                        </li>
                        {this.props.items.map(item => (
                            <ContactElement removeListItem={this.props.removeListItem} key={item.id} id={item.id} name={item.name} surname={item.surname} number={item.number}/>
                        ))}
                    </ul>
                    <button className="contacts__create-contact-button button" onClick={this.props.toggleForm}>
                        Add contact
                    </button>
                </div>
            </section>
        );
    }
}

export default ContactsList;