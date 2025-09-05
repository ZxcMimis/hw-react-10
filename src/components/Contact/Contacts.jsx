import { Component } from "react";
import styles from './Contacts.module.scss'

export class Contacts extends Component {

  
  render() {
    return (
      <>
        <h2 className={styles.subtitle}>Contacts</h2>
        <ul className={styles.list}>
            {this.props.contacts.map((contact) => 
                <li className={styles.item} key={contact.id}>
                  <p className={styles.text}>{contact.name}: {contact.phone}</p>
                  <button className={styles.delete} onClick={() => this.props.deleteContact(contact.id)} type="button">Delete</button>
                </li>
            )}
        </ul>
      </>
    );
  }
}