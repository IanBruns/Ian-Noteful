import React from 'react';
import { Link } from 'react-router-dom'
import './SideBar.css';
// import Folder from '../Folder/Folder'

class SideBar extends React.Component {
    render() {
        const folders = this.props.folders.map(folder => {
            return (
                <div className='folder' key={folder.id}>
                    <Link
                        to={`/folder/${folder.id}`}>{folder.name}</Link>
                </div>
            )
        })
        return (
            <div className='SideBar'>
                {folders}
                <div className='add'>
                    <h3>Add New Folder</h3>
                </div>
            </div>
        )
    }
}

export default SideBar;