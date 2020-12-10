import React from 'react';
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext';
import './NoteStorageNote.css';

class NoteStorageNote extends React.Component {
    static contextType = NotefulContext;

    render() {
        const { notes } = this.context;
        const targetNote = notes.find(note => {
            return note.id === this.props.match.params.noteId
        }) || { id: '' }

        return (
            <div className='NoteStorage' >
                <Note
                    key={targetNote.id}
                    id={targetNote.id}
                    name={targetNote.name}
                    modified={targetNote.modified}
                    folderId={targetNote.folderId}
                />
                <p>
                    {targetNote.content}
                </p>
            </div>
        )
    }
}

export default NoteStorageNote;