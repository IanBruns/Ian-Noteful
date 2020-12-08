import React from 'react';
import Note from '../Note/Note'
import './NoteStorage.css';

class NoteStorage extends React.Component {
    render() {
        return (
            <div className='NoteStorage' >
                And I'm where you actually store stuff
                <Note />
            </div>
        )
    }
}

export default NoteStorage;