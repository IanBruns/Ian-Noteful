import React from 'react';
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext';
import './Note.css'

class Note extends React.Component {
    static contextType = NotefulContext;

    deleteButton = () => {
        const { deleteItem } = this.context;
        fetch(`http://localhost:9090/notes/${this.props.id})`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(() => {
                deleteItem(this.props.id);
            })
    }

    render() {
        let date = new Date(this.props.modified);
        let formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        return (
            <div className='Note'>
                <Link to={`/note/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </Link>
                <div className='note-details'>
                    <p>
                        Date Modified: {formatDate}
                    </p>
                    <button onClick={() => this.deleteButton()}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default Note;