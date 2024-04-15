import Contact from "./Contact.jsx";



export default function ContactList ({contacts}) {
return (
    <ul>
        {contacts.map ((contact) => 
        {
            return  <Contact key={contact.id} contact={contact}></Contact>
        } )
        }
    </ul>
)
}