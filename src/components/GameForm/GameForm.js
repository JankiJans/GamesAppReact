import { useState } from 'react';

const GameForm = ({addGame}) => {

    const[title, setTitle] = useState('');
    const[category, setCategory] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        addGame({title: title, category: category});
        setTitle('');
        setCategory('');
    }
    return (
        <form onSubmit={handleSubmit}>
           Title: <input type="text" value={title} onChange={ e => setTitle(e.target.value)} />
           Category: <input type="text" value={category} onChange={ e => setCategory(e.target.value)} />
           <button>Add Game</button>
        </form>
    );
};

export default GameForm;