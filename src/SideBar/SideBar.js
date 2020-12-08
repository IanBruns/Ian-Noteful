import React from 'react';
import './SideBar.css';
import Folder from '../Folder/Folder'

class SideBar extends React.Component {
    render() {
        return (
            <div className='SideBar'>
                Hi, I'm the sidebar
                <Folder />
            </div>
        )
    }
}

export default SideBar;