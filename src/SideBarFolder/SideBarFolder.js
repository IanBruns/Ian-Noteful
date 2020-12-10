import React from 'react';
import { NavLink } from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import './SideBarFolder.css';

class SideBarFolder extends React.Component {
    static contextType = NotefulContext;

    render() {
        const { folders } = this.context;
        const foldersMap = folders.map(folder => {
            return (
                <div className='folder' key={folder.id}>
                    <NavLink
                        activeClassName='selected'
                        to={`/folder/${folder.id}`}>{folder.name}</NavLink>
                </div>
            )
        })
        return (
            <div className='SideBar'>
                {foldersMap}
                <div className='add'>
                    <h3>Add New Folder</h3>
                </div>
            </div>
        )
    }
}

export default SideBarFolder;