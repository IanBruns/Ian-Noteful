import React from 'react';
import './NotefulApp.css';
import SideBar from '../SideBar/SideBar';
import NoteStorage from '../NoteStorage/NoteStorage'

class NotefulApp extends React.Component {
    render() {
        return (
            <div className='NotefulApp'>
                <div className='flex-one'>
                    <SideBar />
                </div>
                <div className='flex-three'>
                    <NoteStorage />
                </div>
            </div>
        )
    }
}

export default NotefulApp;