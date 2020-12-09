import React from 'react';
import Note from '../Note/Note'
import './NoteStorage.css';

class NoteStorage extends React.Component {
    render() {
        const notes = this.props.notes.map(note => {
            return <Note
                key={note.id}
                id={note.id}
                name={note.name}
                modified={note.modified}
                folderId={note.folderId}
                content={note.content}
                deleteButtonClick={this.props.deleteButtonClick}
            />
        });

        return (
            <div className='NoteStorage' >
                {notes}
            </div>
        )
    }
}

export default NoteStorage;