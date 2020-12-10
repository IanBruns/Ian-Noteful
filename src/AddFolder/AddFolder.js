import React from 'react'

class AddFolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { folderName: '' }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.folderName)
    }

    updateFolderName(newFolderName) {
        this.setState({ folderName: newFolderName })
    }

    render() {
        return (
            <div className='AddFolder'>
                <form className='newFolderForm' onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <legend>New Folder!</legend>
                        <label htmlFor='folderName'>Enter your folder name here:</label>
                        <br></br>
                        <input type='text' name='folderName' id='folderName'
                            value={this.state.folderName}
                            onChange={e => this.updateFolderName(e.target.value)} />
                        <br></br>
                        <button type='submit'>
                            Create New Folder!
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddFolder;