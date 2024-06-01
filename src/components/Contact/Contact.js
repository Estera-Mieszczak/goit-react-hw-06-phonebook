import { Button } from '../Button/Button';

export const Contact = ({ contact }) => {
    return (
        <div>
            <p>{contact.name} | {contact.phone}</p>
            <Button>Delete</Button>
        </div>
    )
}