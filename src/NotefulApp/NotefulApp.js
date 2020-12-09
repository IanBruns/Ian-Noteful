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

    deleteItem = (noteId) => {
        const filterState = this.state.notes.filter(note => {
            return note.id !== noteId;
        })

        this.setState({
            notes: filterState
        })
    }

    componentDidMount() {
        this.getFolderData();
        this.getNoteData();
    }

    render() {
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteItem: this.deleteItem
        }
        return (
            <div className='NotefulApp'>
                <NotefulContext.Provider
                    value={contextValue}>
                    <div className='flex-one'>
                        <Route exact path='/'
                            component={SideBar}
                        />
                        <Route path='/folder/:folderId'
                            component={SideBarFolder}
                        />
                        <Route path='/note/:noteId'
                            component={SideBarNote}
                        />
                    </div>
                    <div className='flex-three'>
                        <Route exact path='/'
                            component={NoteStorage}
                        />
                        <Route path='/folder/:folderId'
                            component={NoteStorageFolder}
                        />
                        <Route path='/note/:noteId'
                            component={NoteStorageNote}
                        />
                    </div>
                </NotefulContext.Provider>
            </div>
        )
    }
}

export default NotefulApp;