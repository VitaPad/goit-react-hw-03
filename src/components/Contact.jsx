export default function Contact ({ contact }) {
    return (
      <li key={contact.id}>
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
        <button>Delete</button>
      </li>
    );
  }