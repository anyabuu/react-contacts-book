import React from "react";
import './ContactsList.css';

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
                            <li className="contacts-item" key={item.id}>
                                <div className="contacts-item-cell">
                                    {item.name}
                                </div>
                                <div className="contacts-item-cell">
                                    {item.surname}
                                </div>
                                <div className="contacts-item-cell">
                                    {item.number}
                                </div>
                                <button className="contacts-item-button" onClick={(e) => this.props.removeListItem(e, item.id)} key={item.id}>
                                    Х
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}

export default ContactsList;