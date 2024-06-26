import { PiPhoneFill } from "react-icons/pi";
import { PiUserFill } from "react-icons/pi";
import css from "./Contact.module.css"



export default function Contact ({ contact, onDelete }) {
  const handleDelete = () => {
    onDelete(contact.id);
  };
    return (
      <li key={contact.id} className={css.item}>
        <div className={css.box}>
        <p><PiPhoneFill size="20"/>{contact.name}</p>
        <p><PiUserFill size="20"/>{contact.number}</p>
        </div>
        <button className={css.button} onClick={handleDelete}>Delete</button>
      </li>
    );
  }