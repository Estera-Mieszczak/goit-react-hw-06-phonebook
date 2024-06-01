// import { searchContact } from "../Search/Search";
import css from "./ContactList.module.css"
import { Contact } from '../Contact/Contact'


export const ContactList = () => { 
  return (
    <ul className={css.ul}>
        {[].map(contact => (
            <li className={css.li} key={contact.key}>
                <Contact contact={contact} />
            </li>))}
                :
            <p>No contacts....</p>
      </ul>
  )
};