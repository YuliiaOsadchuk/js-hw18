import React, { Component } from "react";

import Contact from "./Contact";

import "./Contacts.css";

class Contacts extends Component {
  state = {
    contacts: [
      {
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male",
      },
      {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
      },
      {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
      },
      {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
      },
      {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
      },
      {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male",
      },
    ],
    search: "",
  };

  handleSearchChange = ({ target: { value } }) => {
    this.setState({ search: value });
  };

  filterContacts = (term) => {
    return this.state.contacts.filter(({ firstName, lastName, phone }) => {
      return (
        firstName.toLowerCase().includes(term.toLowerCase()) ||
        lastName.toLowerCase().includes(term.toLowerCase()) ||
        phone.includes(term)
      );
    });
  };

  render() {
    const contacts = this.filterContacts(this.state.search);
    return (
      <div className="contacts-wrapper">
        <div className="input-text">
          <input
            type="text"
            className="contact-name"
            onChange={this.handleSearchChange}
            value={this.state.search}
            placeholder="Search"
          />
        </div>
        <div className="contacts">
          {contacts.map((contact, i) => (
            <Contact key={i} {...contact} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
