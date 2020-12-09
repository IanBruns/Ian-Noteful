import React from 'react';
import './NotefulApp.css';
import SideBar from '../SideBar/SideBar';
import SideBarFolder from '../SideBarFolder/SideBarFolder';
import SideBarNote from '../SideBarNote/SideBarNote';
import NoteStorage from '../NoteStorage/NoteStorage';
import NoteStorageFolder from '../NoteStorageFolder/NoteStorageFolder';
import NoteStorageNote from '../NoteStorageNote/NoteStorageNote';
import NotefulContext from '../NotefulContext'
import { Route } from 'react-router-dom'

class NotefulApp extends React.Component {
    state = {
        notes: [],
        folders: []
    }

    getFolderData() {
        fetch(`http://localhost:9090/folders`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Hey, something went wrong')
                }
                return response.json()
            })
            .then(data => {
                this.setState({
                    folders: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    getNoteData() {
        fetch(`http://localhost:9090/notes`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Hey, something went wrong')
                }
                return response.json()
            })
            .then(data => {
                this.setState({
                    notes: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleDeleteItem(noteId) {
        const filterState = this.state.notes.filter(note => {
            return note.id !== noteId;
        })
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(() => {
                this.setState({
                    notes: filterState
                })
            })
    }

    componentDidMount() {
        this.getFolderData();
        this.getNoteData();
    }

    render() {
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders
        }
        return (
            <div className='NotefulApp'>
                <NotefulContext.Provider
                    value={contextValue}>
                    <div className='flex-one'>
                        <Route exact path='/'
                            render={() => <SideBar folders={this.state.folders} />}
                        />
                        <Route path='/folder/:folderId'
                            render={() => <SideBarFolder folders={this.state.folders} />}
                        />
                        <Route path='/note/:noteId'
                            render={(props) => <SideBarNote {...props}
                                notes={this.state.notes}
                                folders={this.state.folders} />}
                        />
                    </div>
                    <div className='flex-three'>
                        <Route exact path='/'
                            render={() => <NoteStorage notes={this.state.notes}
                                deleteButtonClick={(itemId) => this.handleDeleteItem(itemId)} />}
                        />
                        <Route path='/folder/:folderId'
                            render={(props) => <NoteStorageFolder {...props}
                                folders={this.state.folders}
                                notes={this.state.notes}
                                deleteButtonClick={(itemId) => this.handleDeleteItem(itemId)} />}
                        />
                        <Route path='/note/:noteId'
                            render={(props) => <NoteStorageNote {...props}
                                notes={this.state.notes}
                                deleteButtonClick={(itemId) => this.handleDeleteItem(itemId)} />}
                        />
                    </div>
                </NotefulContext.Provider>
            </div>
        )
    }
}

export default NotefulApp;