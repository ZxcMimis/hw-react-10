import { Component } from "react";
import { Contacts } from "../Contact/Contacts";
import styles from './AddContact.module.scss'

export class AddContacts extends Component {
  state = {
    contacts: [],
    name: "",
    phone: "",
  };

  componentDidMount = () => {
    if (JSON.parse(localStorage.getItem("contacts")) !== null) {
      if (JSON.parse(localStorage.getItem("contacts")).length !== 0) {
        this.setState({
          contacts: JSON.parse(localStorage.getItem("contacts")),
        });
      }
    }
  };

  addName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  addPhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  addContact = (e) => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      phone: this.state.phone,
      id: Date.now(),
    };

    this.setState(
      (prevState) => ({
        contacts: [...prevState.contacts, contact],
      }),
      () => {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
      }
    );


  };

  deleteContact = (id) => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      }),
      () => {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
      }
    );
  };

  render() {
    return (
      <>
        <h1 className={styles.title}>PHONEBOOK</h1>
        <form className={styles.form} onSubmit={this.addContact}>
          
          <p className={styles.name}>Name</p>
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onInput={this.addName}
            className={styles.nameInput}
          />
          <p className={styles.phone}>Number</p>
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onInput={this.addPhone}
            className={styles.phoneInput}
          />
          <button type="submit" className={styles.btn}>Add Contact</button>
        </form>
        <Contacts
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}