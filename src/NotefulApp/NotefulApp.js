import React from 'react';
import './NotefulApp.css';
import SideBar from '../SideBar/SideBar';
import SideBarFolder from '../SideBarFolder/SideBarFolder';
import SideBarNote from '../SideBarNote/SideBarNote';
import NoteStorage from '../NoteStorage/NoteStorage';
import NoteStorageFolder from '../NoteStorageFolder/NoteStorageFolder';
import NoteStorageNote from '../NoteStorageNote/NoteStorageNote';
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

    componentDidMount() {
        this.getFolderData();
        this.getNoteData();
    }

    render() {
        return (
            <div className='NotefulApp'>
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
                        render={() => <NoteStorage notes={this.state.notes} />}
                    />
                    <Route path='/folder/:folderId'
                        render={(props) => <NoteStorageFolder {...props}
                            folders={this.state.folders}
                            notes={this.state.notes} />}
                    />
                    <Route path='/note/:noteId'
                        render={(props) => <NoteStorageNote {...props}
                            notes={this.state.notes} />}
                    />
                </div>
            </div>
        )
    }
}

export default NotefulApp;