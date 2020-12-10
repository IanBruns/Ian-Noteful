import React from 'react'
import NotefulContext from '../NotefulContext';

class AddNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noteName: '',
            noteContent: '',
            targetFolder: '',
        }
    }
    static contextType = NotefulContext;

    handleSubmit = e => {
        e.preventDefault();

        console.log('click')
    }

    updateNoteName(newNoteName) {
        this.setState({
            noteName: newNoteName
        })
    }

    updateNoteContent(newNoteContent) {
        this.setState({
            noteContent: newNoteContent
        })
    }

    render() {
        const { folders } = this.context;

        const selectOptions = folders.map((folder, i) => {
            return (
                <option key={i} value={folder.id}>{folder.name}</option>
            )
        })

        return (
            <div className='AddNote'>
                <form className='addNoteForm' onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <legend>Add a New Note!</legend>

                        <label htmlFor='noteName'>Note Name:</label>
                        <br></br>
                        <input type='text' name='noteName' id='noteName'
                            value={this.state.noteName}
                            onChange={e => this.updateNoteName(e.target.value)} />

                        <br></br>

                        <label htmlFor='noteContent'>Note Content:</label>
                        <br></br>
                        <textarea id="noteContent" name="noteContent" rows="4" cols="50"
                            value={this.state.noteContent}
                            onChange={e => this.updateNoteContent(e.target.value)} />

                        <br></br>

                        <label htmlFor='targetFolder'>Add to Which Folder?</label>
                        <br></br>
                        <select name='targetFolder' id='targetFolder'>
                            {selectOptions}
                        </select>

                        <br></br>

                        <button type='submit'>
                            Create New Folder!
                        </button>
                    </fieldset>
                </form>
                <button onClick={() => this.props.history.goBack()}>
                    Cancel
                </button>
            </div>
        )
    }
}

export default AddNote;