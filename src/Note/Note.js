import React from 'react';
import { Link } from 'react-router-dom'
import './Note.css'

class Note extends React.Component {
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
                    <button>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default Note;