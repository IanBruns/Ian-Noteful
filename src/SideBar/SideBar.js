import React from 'react';
import './SideBar.css';
import Folder from '../Folder/Folder'

class SideBar extends React.Component {
    render() {
        const folders = this.props.folders.map(folder => {
            return <Folder
                key={folder.id}
                name={folder.name} />
        })
        return (
            <div className='SideBar'>
                {folders}
            </div>
        )
    }
}

export default SideBar;