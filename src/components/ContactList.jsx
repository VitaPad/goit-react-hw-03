import Contact from "./Contact.jsx";
import css from "./ContactList.module.css";



export default function ContactList ({contacts, onDelete}) {
return (
    <ul className={css.list}>
        {contacts.map ((contact) => 
        {
            return  <Contact key={contact.id} contact={contact} onDelete={onDelete}></Contact>
        } )
        }
    </ul>
)
}