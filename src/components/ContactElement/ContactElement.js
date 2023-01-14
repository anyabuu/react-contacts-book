import React from "react";
import './ContavtElement.css';

class ContactElement extends React.Component {

    render() {
        return (
            <li className="contacts-item">
                <div className="contacts-item-cell">
                    {this.props.name}
                </div>
                <div className="contacts-item-cell">
                    {this.props.surname}
                </div>
                <div className="contacts-item-cell">
                    {this.props.number}
                </div>
                <button className="contacts-item-button" onClick={(e) => this.props.removeListItem(e, this.props.id)} key={this.props.id}>
                    Х
                </button>
            </li>

        );
    }
}

export default ContactElement;