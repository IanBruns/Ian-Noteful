import React from 'react';
import { Link } from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import './SideBar.css';
// import Folder from '../Folder/Folder'

class SideBar extends React.Component {
    static contextType = NotefulContext;

    render() {
        const { folders } = this.context;
        const folderList = folders.map(folder => {
            return (
                <div className='folder' key={folder.id}>
                    <Link
                        to={`/folder/${folder.id}`}>{folder.name}</Link>
                </div>
            )
        })
        return (
            <div className='SideBar'>
                {folderList}
                <div className='add'>
                    <h3>Add New Folder</h3>
                </div>
            </div>
        )
    }
}

export default SideBar;