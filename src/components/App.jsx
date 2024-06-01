// import './App.css'
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { ContactFilter } from './ContactFilter/ContactFilter';


export const App = () => {
  return (
    <div>
      <Form />
      <ContactFilter />
      <ContactList />
    </div>
  );
};