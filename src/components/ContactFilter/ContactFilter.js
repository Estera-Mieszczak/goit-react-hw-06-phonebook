import { Button } from '../Button/Button';

export const ContactFilter = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        form.reset();
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <input
                className=""
                type="text"
                name="text"
                placeholder="Search..."
            />
            
            <Button type="submit">Search</Button>
        </form>
    );
};