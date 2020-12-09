import React from 'react';
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext'
import './NoteStorage.css';

class NoteStorage extends React.Component {
    static contextType = NotefulContext;

    render() {
        const { notes } = this.context;
        const notesMap = notes.map(note => {
            return <Note
                key={note.id}
                id={note.id}
                name={note.name}
                modified={note.modified}
                folderId={note.folderId}
                content={note.content}
            />
        });

        return (
            <div className='NoteStorage' >
                {notesMap}
            </div>
        )
    }
}

export default NoteStorage;