
import Contact from '../Contact/Contact.jsx';
import styles from '../ContactList/ContactList.module.css'; 

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div className={styles.container}>
      {contacts.map(contact => (
        <div key={contact.id} className={styles.contactContainer}>
          <Contact contact={contact} onDelete={() => onDeleteContact(contact.id)} />
        </div>
      ))}
    </div>
  );
}

export default ContactList;